import ImageData from "./components/cloudinary/ImageDataFunction";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ButtonDemo } from "./components/ButtonDemo";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { createOne, getAll } from "./lib/entity";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";

function App() {
  const clerk = useClerk();

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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="">
          <img
            src={viteLogo}
            className="mt-20 h-40 w-60 animate-bounce"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="">
          <img
            src={reactLogo}
            className="mt-20 h-40 w-60 animate-bounce"
            alt="React logo"
          />
        </a>
      </div>
      <div className="text-center">
        <h1>Vite + React</h1>
        <div className="p-2">
          <ButtonDemo />
          <p className="p-2">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
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
        <div className="flex justify-center">
          <h2 className="text-2xl">Login with clerk</h2>
          <SignedOut>
            <Button className="mt-2" onClick={() => clerk.openSignUp()}>
              Sign Up
            </Button>
            <Button className="mt-2" onClick={() => clerk.openSignIn()}>
              Sign In
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
