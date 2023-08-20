//imports juan
import CloudinaryUploadWidget from './UploadWidget'
import { useState } from 'react'

const ImageData = () => {
  const [imageData, setImageData] = useState({
    imageInfo: {
      url: null, // Inicialmente no hay imagen
    },
  })

  const handleImageUpload = (url) => {
    setImageData((prevPostData) => ({
      ...prevPostData,
      imageInfo: {
        url: url,
      },
    }))
  }

  return (
    <div>
      <CloudinaryUploadWidget handleImageUpload={handleImageUpload} />
      {imageData.imageInfo.url && (
        <div>
          <h4>Uploaded ✅</h4>
          <img
            src={imageData.imageInfo.url}
            alt="Imagen Subida"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
          <p>{imageData.imageInfo.url}</p>
        </div>
      )}
    </div>
  )
}

export default ImageData
