import { Card, CardContent } from '@/components/ui/card'
import { Github, Twitch } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function DevCard({ dev }) {
  return (
    <Card className="mt-5 flex flex-wrap bg-gray-900">
      <CardContent className="mt-5">
        <h2 className="text-2xl font-bold tracking-tight">{dev.username}</h2>
        <div className="flex items-center justify-center gap-4">
        </div>
        <h4 className="text-xl font-bold tracking-tight">Follow on:</h4>
        <div className="flex justify-center mt-5">
          <Link
          to={dev.linkTwitch}
          >
            <Twitch className="w-10 h-10 text-purple-600" />
          </Link>
          <Link
          to={dev.linkGithub}
          >
            <Github className="w-10 h-10 text-gray-600" />
          </Link>
        </div>
        <img
          src={dev.img}
          alt={dev.username}
          className="inline w-60 h-60 rounded mt-10"
        />
        <div className="flex mt-10">
          <p className="text-lg">{dev.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function DevList({ devs }) {
  return (
    <div className="text-center">
      {devs.map((dev, index) => (
        <DevCard key={index} dev={dev} />
      ))}
    </div>
  )
}

function About() {
  const dataDevs = [
    {
      linkGithub: 'https://github.com/nujovich',
      linkTwitch: 'https://www.twitch.tv/mermeladatech',
      username: 'Na',
      img: 'https://avatars.githubusercontent.com/u/48018975?v=4',
      description:
        'I have more than 10 years of experience working for companies interested in software deliverables. I have a Java SE Certification since 2012 and 2 years of Angular 2+ experience. I am a very proactive person, always willing to help others and learn new technologies, methodologies and working patterns. I am interested not only in projects that cover my background expertise, but also for the ones that bring me up to challenge.',
    },
    {
      linkTwitch: 'https://www.twitch.tv/cemdev',
      username: 'Cem',
      img: 'https://avatars.githubusercontent.com/u/5853160?v=4',
      description:
        'Full-Stack developer with more than 10 years of experience in software development, working in multiple projects. Resourceful, skilled, confident and highly experienced looking for new challenges.Successful in organizing and, leading complex projects, finding ways to improve teamwork and providing customer support.Extensive experience with the architecture and integration of web applications. High-level proficiency in .NET, NodeJS and React. Deeply skilled in Cloud technologies, specialized in AWS.',
    },
    {
      linkTwitch: '',
      linkGithub: 'https://github.com/juanmeyer94',
      username: 'Brother',
      img: 'https://avatars.githubusercontent.com/u/107147413?v=4',
      description:
        'Hello! I am a passionate front-end web developer with a knack for crafting interactive and engaging user experiences. Furthermore, I have extensive experience as a real estate agent, which has equipped me with skills in negotiation, project management, and communication.My career includes owning a real estate agency, where I had the opportunity to develop sales skills, gain deep insights into the real estate market, and lead small teams. During my time as an owner, I implemented digital marketing strategies and optimized internal processes, resulting in consistent company growth.',
    },
    {
      linkTwitch: '',
      linkGithub: 'https://github.com/IvanMJs',
      username: 'Iván',
      img: 'https://avatars.githubusercontent.com/u/37188867?v=4',
      description:
        'I currently work as a React / React-Native Developer for Kin + Carta on the Discover Financial Services project. Also using Jest, enzyme, RTL and Cucumber for unit, acceptance and integration tests. I worked as a software developer with Angular in CONCENTRIX contributing my knowledge and having direct contact with the North American company Healtcare SYMPLR. I worked as a Full Stack developer at TUPACA applying with the Stack MERN, React, NodeJs, Express and Mongo providing services to DISNEY and also applying in .NET. Work as a Java developer with Guidewire integration at C.A.B.L. y Asociados S.R.L providing services to Sancor Seguros. Work as a .NET Developer and SQL Database. I am a lover of programming and all its architecture. Curious about new trends and evolution of technology. In constant learning and growth.',
    },
  ]

  return <DevList devs={dataDevs} />
}

export default About
