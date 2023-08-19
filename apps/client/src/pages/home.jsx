import ImageData from "../components/cloudinary/ImageDataFunction";
import { Button } from "../components/ui/button";
import { createOne, getAll } from "../lib/entity";

import SearchBar from "../components/serachbar/SearchBar";
import MemeCard from "../components/MemeCard/MemeCard";

function Home() {
  const handleCreateMeme = async () => {
    const response = await createOne("memes", {
      name: "Meme",
      url: "meme.com",
    });
    console.log(response);
  };

  const handleGetAllMemes = async () => {
    const response = await getAll("memes");
    console.log(response);
  };

  return (
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
      <div className="flex justify-center">
        <h2 className="text-2xl">Meme Records</h2>
        <Button className="mt-2" onClick={handleCreateMeme}>
          Create Meme Record
        </Button>
        <Button className="mt-2" onClick={handleGetAllMemes}>
          Get All Meme Records
        </Button>
      </div>
    </div>
  );
}

export default Home;
