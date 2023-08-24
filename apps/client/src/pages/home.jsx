import { useState, useEffect } from 'react'
import { Loader2, TrendingUp } from 'lucide-react'
import { SignedIn, useUser } from '@clerk/clerk-react'
import SearchBar from '../components/serachbar/SearchBar'
import MemeCard from '../components/MemeCard/MemeCard'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { createOne, getOne, getAll, request } from '../lib/entity'
import { Link } from 'react-router-dom'

function Home() {
  const { user } = useUser()
  const { toast } = useToast()

  const [image, setImage] = useState()
  const [imagePrompt, setImagePrompt] = useState()
  const [trending, setTrending] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    const fetchTrendring = async () => {
      const res = await getAll('memes/trending')
      if (res.error) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem on fetching trending.',
        })
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
      userId: user?.id,
      prompt: imagePrompt,
    })
    if (res.error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem saving the duck.',
      })
      setIsSaving(false)
      return
    }

    setIsSaving(false)
    toast({
      title: 'Duck created',
      description: 'Duck created successfully',
    })

    setImage()
    setImagePrompt()
  }

  const handleSearch = async (prompt) => {
    setIsSearching(true)
    setImagePrompt(prompt)
    setImage()
    const result = await createOne('memes/generate', {
      prompt,
    })
    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with the search.',
      })
      setIsSearching(false)
      return
    }

    const imageUrl = result.data[0].url
    setImage(imageUrl)
    setImagePrompt(prompt)
    setIsSearching(false)
  }

  return (
    <>
      <SignedIn>
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <div className="flex flex-col gap-4">
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
          <Link key={meme._id} to={`/rate/${meme._id}`}>
            <img
              src={meme.url}
              alt={meme.name}
              className="w-auto h-auto max-w-full max-h-96"
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Home
