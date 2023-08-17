
import { ThemeProvider } from "./components/theme-provider";

import SearchBar from './components/serachbar/SearchBar';
import MemeCard from './components/MemeCard/MemeCard';


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center">
        <SearchBar />
        <div className="mt-4">
          <MemeCard />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
