import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const MemeCard = () => {
  const props = { 
    title: "Listo PA TOmar!",
    description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias ...",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKymz2tAupESgANBofrsZEz1Yt07RfBB0gQ&usqp=CAU",
    footer: ["listo","pato", "mar", "listopatomar"]
  }
  
    return (
      <div>
        <Card >
  <CardHeader>
    <CardTitle>{props.title}</CardTitle>
    <CardDescription>{props.description}</CardDescription>
  </CardHeader>
  <CardContent>
    <img src={props.photo} alt={props.title} />
  </CardContent>
  <CardFooter>
    <p>{props.footer.map(item => `#${item}`)}</p>
  </CardFooter>
</Card>

      </div>
    );
};

export default MemeCard;

