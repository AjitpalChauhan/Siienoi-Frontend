import React, { useState } from "react";
import axios from "axios";

const ViewProductPage = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    discountedPrice: "",
    images: [],
    videos: [],
    thumbnail: "",
    rating: "",
    category: "",
    isFeatured: false,
    isTrending: false,
    newArrival: false,
    stock: "",
    colors: [],
  });

  const handleImagesChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setFormData((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...filesArray],
    }));
  };
  const handleVideosChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setFormData((prevState) => ({
      ...prevState,
      videos: [...prevState.videos, ...filesArray],
    }));
  };
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the array
    setFormData({
      ...formData,
      thumbnail: file,
    });
  };
  const handleColorsChange = (e) => {
    const value = e.target.value;
    const colorsArray = value.split(',').map((color)=>color.trim())
    setFormData((prevState) => ({
      ...prevState,
      colors: colorsArray,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        Array.from(formData[key]).forEach((file) => {
          productData.append(key, file);
        });
      } else {
        productData.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post("/api/products", productData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
      onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="w-full lg:w-2/3 h-auto rounded p-10 mx-auto"
      >
        <div className="mb-10 text-xl ">Add Product</div>
        <div>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e)=>setFormData.title(e.target.value)}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed"
            placeholder="Title"
            readOnly={!isEditMode}
          />
        </div>
        <div>
          <textarea
            type="text"
            name="description"
            value={formData.description}
            onChange={(e)=>setFormData.description(e.target.value)}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            rows={12}
            placeholder="Description"
            readOnly={!isEditMode}
          />
        </div>
        <div>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={(e)=>setFormData.price(e.target.value)}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            placeholder="Price"
            readOnly={!isEditMode}
          />
        </div>
        <div>
          <input
            type="number"
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={(e)=>setFormData.discountPercentage(e.target.value)}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            placeholder="DiscountPercentage"
            readOnly={!isEditMode}
          />
        </div>
        <div>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={(e)=>setFormData.rating(e.target.value)}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            placeholder="Rating"
            readOnly={!isEditMode}
          />
        </div>
        <div>
          <select
            name="category"
            readOnly={!isEditMode}
            value={formData.category}
            onChange={(e)=>setFormData.category(e.target.value)}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed"
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="flex gap-4 mt-3 py-2 px-2 w-full items-center">
          <label htmlFor="isFeatured" className="">Is Featured</label>
          <input
            type="checkbox"
            name="isFeatured"
            value={formData.isFeatured}
            onChange={(e)=>setFormData.isFeatured(!setFormData.isFeatured)}
            className="h-4 w-4 "
            readOnly={!isEditMode}
          />
        </div>
        <div className="flex gap-4 mt-1 py-2 px-2 w-full items-center">
          <label htmlFor="isTrending" className="">Is Trending</label>
          <input
            type="checkbox"
            name="isTrending"
            value={formData.isTrending}
            onChange={(e)=>setFormData.isTrending(!setFormData.isTrending)}
            className="h-4 w-4 "
            readOnly={!isEditMode}
          />
        </div>
        <div className="flex gap-4 mt-1 py-2 px-2 w-full items-center">
          <label htmlFor="newArrival" className="">New Arrival</label>
          <input
            type="checkbox"
            name="newArrival"
            value={formData.newArrival}
            onChange={(e)=>setFormData.newArrival(!setFormData.newArrival)}
            className="h-4 w-4 "
            readOnly={!isEditMode}
          />
        </div>
        <div>
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleImagesChange}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            placeholder="Images"
            readOnly={!isEditMode}
          />
        </div>
        <p className="mt-4 text-sm text-gray-600">
            Number of Images: {formData.images.length}
          </p>
        <div className="grid grid-cols-4 gap-2 mt-4">
          {formData.images.map((image, index) => (
            <img 
            key={index}
            src={URL.createObjectURL(image)} 
            alt={`preview,${index}`} 
            className="w-32 h-32 object-cover rounded"/>
          ))}
        </div>
        <div>
          <input
            type="file"
            name="videos"
            multiple
            accept="video/*"
            onChange={handleVideosChange}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            placeholder="Videos"
            readOnly={!isEditMode}
          />
        </div>
        <p className="mt-4 text-sm text-gray-600">
            Number of Videos: {formData.images.length}
          </p>
        <div className="grid grid-cols-4 gap-2 mt-4">
          {formData.videos.map((video, index) => (
            <img 
            key={index}
            src={URL.createObjectURL(video)} 
            alt={`preview,${index}`} 
            className="w-32 h-32 object-cover rounded"/>
          ))}
        </div>
        <div>
          <input
            type="file"
            name="thumbnail"
            onChange={handleThumbnailChange}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            placeholder="Thumbnail"
            readOnly={!isEditMode}
          />
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4">
            {formData.thumbnail && <img 
            src={URL.createObjectURL(formData.thumbnail)}
            alt='thumbnail' 
            className="w-32 h-32 object-cover rounded"/>}
        </div>
        <div>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={(e)=>setFormData.stock(e.target.value)}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            placeholder="Stock"
            readOnly={!isEditMode}
          />
        </div>
        <div>
          <input
            type="text"
            name="colors"
            onChange={handleColorsChange}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            placeholder="Colors"
            readOnly={!isEditMode}
          />
          <p className="mt-4 text-sm text-gray-600">
            Colors: {formData.colors.join(", ")}
          </p>
        </div>
        
      </form>
      <div className=" flex justify-between w-full lg:w-2/3 h-auto rounded p-10 mx-auto ">
      <div>
      <button
      onClick={(e)=>setIsEditMode(!isEditMode)}
      >{isEditMode? <div className="flex gap-3">
          <button className="py-2 px-5 bg-green-600 text-white rounded-md" >Save</button>
          <button className="py-2 px-5 bg-blue-600 text-white rounded-md" >Cancel</button>
        </div> : 
      <button className="py-2 px-5 bg-yellow-500 text-white rounded-md">Edit</button>
      }
     </button>
      </div>
        

     <div>
      <button className="py-2 px-5 bg-red-600 text-white rounded-md">
      Delete
      </button>
     </div>
        
      </div>
    </>
  );
};

export default ViewProductPage;
