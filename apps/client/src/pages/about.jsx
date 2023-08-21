import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

function About() {


  return (
    <Card className="w-full max-w-2xl items-center p-2 w-72 py-10">
      <CardContent className="flex flex-col items-center justify-center gap-4">
        IMAGEN
        {/* {!loading ? (
          <img
            src={user.imageUrl}
            alt={user.username}
            className="w-48 h-48 rounded"
          />
        ) : (
          <Skeleton className="w-48 h-48 rounded" />
        )} */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight">Nombre</h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <h4 className="text-xl font-bold tracking-tight">Follow on:</h4>

          <div className="flex flex-row items-center justify-center gap-4">
            icons follows
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default About
