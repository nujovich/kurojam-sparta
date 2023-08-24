import { useState, useEffect } from 'react'
import { Loader2, TrendingUp } from 'lucide-react'
import { SignedIn, useUser } from '@clerk/clerk-react'
import SearchBar from '../components/serachbar/SearchBar'
import MemeCard from '../components/MemeCard/MemeCard'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { createOne, getOne, getAll, request } from '../lib/entity'

function Home() {
  const { user } = useUser()
  const { toast } = useToast()

  const [image, setImage] = useState()
  const [trending, setTrending] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    const fetchTrendring = async () => {
      const res = await getAll('memes/trending')
      if (res.error) {
        console.log(res.error)
        return
      }
      setTrending(res)
    }
    fetchTrendring()
  }, [])

  const handleOnSaveDuck = async () => {
    setIsSaving(true)
    const res = await createOne('memes', {
      url: image,
      prompt: 'Duck',
      userId: user?.id,
    })
    if (res.error) {
      console.log(res.error)
      return
    }

    setIsSaving(false)
    toast({
      title: 'Duck created',
      description: 'Duck created successfully',
    })
  }

  const handleSearch = async (prompt) => {
    setIsSearching(true)
    const result = await createOne('memes/generate', {
      prompt,
    })
    const imageUrl = result.data[0].url
    setImage(imageUrl)
    setIsSearching(false)
  }

  return (
    <>
      <SignedIn>
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <div className="flex flex-col">
          <SearchBar onClick={handleSearch} isLoading={isSearching} />
          {image && (
            <>
              <div className="flex flex-wrap gap-4">
                <img
                  src={image}
                  alt="Image"
                  className="w-auto h-auto max-w-full max-h-96"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="mt-2" onClick={handleOnSaveDuck}>
                  {isSaving && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {!isSaving && 'Save Duck'}
                </Button>
              </div>
            </>
          )}
        </div>
      </SignedIn>
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-3xl font-bold tracking-tight">Trending</h2>
          <TrendingUp className="h-8 w-8" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {trending.map((meme) => (
          <div key={meme.id}>
            <img
              src={meme.url}
              alt={meme.name}
              className="w-auto h-auto max-w-full max-h-96"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
