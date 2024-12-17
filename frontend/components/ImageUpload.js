import { useState } from "react";

const ImageUpload = ({ maxImages, onImagesChange }) => {
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > maxImages)
      return alert(`Max ${maxImages} images allowed`);

    const updatedImages = [...images, ...files];
    setImages(updatedImages);
    onImagesChange(updatedImages);
  };

  const handleImageDelete = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onImagesChange(updatedImages);
  };

  return (
    <div>
      <label className="block mb-2 font-medium">Upload Images</label>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="mb-2"
      />
      <div className="grid grid-cols-3 gap-2">
        {images.map((file, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="w-full h-20 object-cover rounded-md"
            />
            <button
              type="button"
              onClick={() => handleImageDelete(index)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
