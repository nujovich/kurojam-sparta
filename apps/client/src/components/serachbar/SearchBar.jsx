import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import ImageData from '../cloudinary/ImageDataFunction'
import { Loader2 } from "lucide-react"

const SearchBar = ({ onClick, isLoading }) => {
  const [searchValue, setSearchValue] = useState([])

  const handleInputOnChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleClick = async () => {
    onClick(searchValue)
  }

  return (
    <div className="flex items-center w-full my-4 space-x-6">
      <div className="flex w-full max-w-lg items-center space-x-2">
        <Input
          type="text"
          placeholder="A duck with a hat"
          className="w-full"
          onChange={handleInputOnChange}
        />
        <Button disabled={isLoading} onClick={handleClick}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {!isLoading && 'Search'}
        </Button>
      </div>
    </div>
  )
}

export default SearchBar
