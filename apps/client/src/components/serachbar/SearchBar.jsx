import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import ImageData from "../cloudinary/ImageDataFunction";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState([]);

  const handleInputOnChange = (event) => {
    event.preventDefault();
    setSearchValue(event);
  };

  const onSubmit = () => {};

  return (
    <div className="flex items-center w-full my-4 space-x-6">
      <Button className="px-8 py-6 mx-2 my-2 " type="submit">
        Favorites
      </Button>

      <Input
        onChange={handleInputOnChange}
        type="text"
        placeholder="Search"
        className="w-[500px] text-2xl py-6"
      />
      <Button className="px-8 py-6 mx-2 my-2" type="submit">
        Search
      </Button>
      <ImageData />
    </div>
  );
};

export default SearchBar;
