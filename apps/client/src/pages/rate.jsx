import { useState, useEffect, useCallback } from 'react'
import { Github, ThumbsUp, TrendingUp, Twitch, Twitter } from 'lucide-react'
import ImageData from '../components/cloudinary/ImageDataFunction'
import SearchBar from '../components/serachbar/SearchBar'
import MemeCard from '../components/MemeCard/MemeCard'
import { getOne, request } from '../lib/entity'
import { Card, CardContent, CardFooter } from '../components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Link, useParams } from 'react-router-dom'
import { useToast } from '@/components/ui/use-toast'

const MemeContent = ({ image, onLike, onNext, disableLike, loading }) => (
  <Card className="w-full max-w-2xl items-center p-2 py-10">
    <CardContent className="flex flex-col items-center justify-center gap-6">
      {!loading ? (
        <img src={image.url} alt={image.name} />
      ) : (
        <Skeleton className="w-72 h-72 rounded" />
      )}
      <div className="flex flex-col items-center justify-center">
        {!loading ? <>Total Likes: {image.likes}</> : <Skeleton />}
      </div>
    </CardContent>
    <CardFooter className="flex flex-col items-center justify-center gap-4">
      {!loading ? (
        <>
          <Button
            className="flex items-center justify-center w-48 px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
            onClick={onLike}
            disabled={disableLike}
          >
            <ThumbsUp className="w-5 h-5 mr-2" />
            {disableLike ? 'Liked' : 'Like'}
          </Button>
          <Button
            className="flex items-center justify-center w-48 px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
            onClick={onNext}
          >
            Next
          </Button>
        </>
      ) : (
        <>
          <Skeleton className="w-48 h-10 rounded" />
          <Skeleton className="w-48 h-10 rounded" />
        </>
      )}
    </CardFooter>
  </Card>
)

const UserContent = ({ user, loading }) => {
  return (
    <Card className="w-full max-w-2xl items-center p-2 w-72 py-10">
      <CardContent className="flex flex-col items-center justify-center gap-4">
        {!loading ? (
          <img
            src={user.imageUrl}
            alt={user.username}
            className="w-48 h-48 rounded"
          />
        ) : (
          <Skeleton className="w-48 h-48 rounded" />
        )}
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight">
            {!loading ? (
              user.username
            ) : (
              <Skeleton className="w-48 h-10 rounded" />
            )}
          </h2>
        </div>
        {!loading &&
          user?.externalAccounts?.some((account) => account.provider) && (
            <div className="flex flex-col items-center justify-center gap-4">
              <h4 className="text-xl font-bold tracking-tight">Follow on:</h4>

              <div className="flex flex-row items-center justify-center gap-4">
                {user?.externalAccounts
                  ?.filter((account) => account.provider)
                  .map((account) => (
                    <div className="flex flex-row items-center justify-center gap-4">
                      <a href={account.url} target="_blank">
                        {account.provider === 'oauth_github' && (
                          <Link to={`https://github.com/${user?.username}`}>
                            <Github className="w-5 h-5" />
                          </Link>
                        )}
                        {account.provider === 'oauth_twitch' && (
                          <Link
                            to={`https://www.twitch.tv/${user?.externalAccounts[2]?.username}`}
                          >
                            <Twitch className="w-5 h-5" />
                          </Link>
                        )}
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          )}
      </CardContent>
    </Card>
  )
}

function Rate() {
  const parms = useParams()
  const { toast } = useToast()
  const [image, setImage] = useState()
  const [searchWithParams, setSearchWithParams] = useState(false)
  const [disableLike, setDisableLike] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const fetchImage = useCallback(async (needsToReload = true) => {
    setIsLoading(needsToReload)
    let res
    if (parms.id && !searchWithParams) {
      res = await getOne(`memes/${parms.id}`)
    } else {
      res = await request('memes/rate')
    }
    if (res.error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem on getting the image to rate.',
      })
      return
    }
    setSearchWithParams(true)
    setIsLoading(false)
    setImage(res)
  }, []);

  useEffect(() => {
    fetchImage()
  }, [])

  const handleLike = async () => {
    const res = await request(`memes/${image._id}/like`, {}, 'POST')
    if (res.error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem on liking the image.',
      })
      return
    }
    setImage((prev) => ({ ...prev, likes: res.likes }))
    setDisableLike(true)
  }

  const handleNext = async () => {
    fetchImage()
    setDisableLike(false)
  }

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Rate the duck meme
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-center gap-4">
          <UserContent user={image?.user} loading={isLoading} />
          <MemeContent
            image={image}
            onLike={handleLike}
            onNext={handleNext}
            disableLike={disableLike}
            loading={isLoading}
          />
        </div>
      </div>
    </>
  )
}

export default Rate
