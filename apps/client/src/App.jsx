import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ButtonDemo } from "./components/ButtonDemo";

function App() {
  return (
    <>
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
      </div>
    </>
  );
}

export default App;
