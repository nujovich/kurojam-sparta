import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import ImageData from "../cloudinary/ImageDataFunction";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState([])

    const handleInputOnChange = (event) => {
        event.preventDefault()
        setSearchValue(event)
    }
    
    const onSubmit = () => {

    }

    return (
        <div className="flex w-full items-center space-x-6 my-4">
            <Button className="text-2xl font-extrabold mx-2 my-2 text-gray-600 py-6 px-8" type="submit">Rate Public Memes</Button>
            <Button className="text-2xl font-extrabold mx-2 my-2 text-gray-600 py-6 px-8"  type="submit">Favorites</Button>
            <Button className="text-2xl font-extrabold mx-2 my-2 text-gray-600 py-6 px-8"  type="submit">Last Searches</Button>
            
            <Input onChange={handleInputOnChange} type="text" placeholder="Search" className="w-[500px] text-cyan-500 text-2xl py-6" />
            <Button className="text-2xl font-extrabold mx-2 my-2 text-gray-600 py-6 px-8"  type="submit">Search</Button>
            <ImageData  />

        </div>
    );
}

export default SearchBar;
