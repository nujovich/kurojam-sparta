import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";
import ImageData from "../components/cloudinary/ImageDataFunction";
import SearchBar from "../components/serachbar/SearchBar";
import MemeCard from "../components/MemeCard/MemeCard";
import { request } from "../lib/entity";
import { SignedOut } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'

function Home() {
  const [trending, setTrending] = useState([])

  useEffect(() => {
    const fetchTrendring = async () => {
      const res = await request('memes/trending')
      setTrending(res)
    }
    fetchTrendring()
  }, [])

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="flex flex-col items-center">
        <SearchBar />
        <div className="mt-4">
          <MemeCard />
        </div>
        <p className="text-slate-400">
          Click on the Vite and React logos to learn more
        </p>
        {/* Esto de abajo es la llamada del cloudinary que muestra la info tmb */}
        <ImageData />
      </div>
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-3xl font-bold tracking-tight">Trending</h2>
          <TrendingUp className="h-8 w-8" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {!trending ? (
          trending.map((meme) => (
            <div key={meme.id}>
              <img
                src={meme.url}
                alt={meme.name}
                className="w-auto h-auto max-w-full max-h-96"
              />
            </div>
          ))
        ) : (
          <div className="text-2xl inline-block gap-2">
            If you want to see trending, please
            <SignedOut>
              <Button className="m-2" onClick={() => clerk.openSignUp()}>
                Sign Up
              </Button>
              <span> or </span>
              <Button className="m-2" onClick={() => clerk.openSignIn()}>
                Sign In
              </Button>
            </SignedOut>
          </div>
        )}
      </div>
    </>
  )
}

export default Home;
