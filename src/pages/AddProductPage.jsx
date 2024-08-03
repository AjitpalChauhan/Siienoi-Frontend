import React, { useEffect, useState } from "react";

const AddProductPage = () => {
  
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
            onChange={handleInputChange}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed"
            placeholder="Title"
          />
        </div>
        <div>
          <textarea
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            rows={12}
            placeholder="Description"
          />
        </div>
        <div>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            placeholder="Price"
          />
        </div>
        <div>
          <input
            type="number"
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={handleInputChange}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            placeholder="DiscountPercentage"
          />
        </div>
        <div>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            placeholder="Rating"
          />
        </div>
        <div>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed"
          >
            {categories.map((category,index) => (
              <option key={index} value={category._id}>{category.name}</option>
            ))}
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="flex gap-4 mt-3 py-2 px-2 w-full items-center">
          <label htmlFor="isFeatured" className="">
            Is Featured
          </label>
          <input
            type="checkbox"
            name="isFeatured"
            value={formData.isFeatured}
            onChange={handleCheckboxChange}
            className="h-4 w-4 "
          />
        </div>
        <div className="flex gap-4 mt-1 py-2 px-2 w-full items-center">
          <label htmlFor="isTrending" className="">
            Is Trending
          </label>
          <input
            type="checkbox"
            name="isTrending"
            value={formData.isTrending}
            onChange={handleCheckboxChange}
            className="h-4 w-4 "
          />
        </div>
        <div className="flex gap-4 mt-1 py-2 px-2 w-full items-center">
          <label htmlFor="newArrival" className="">
            New Arrival
          </label>
          <input
            type="checkbox"
            name="newArrival"
            value={formData.newArrival}
            onChange={handleCheckboxChange}
            className="h-4 w-4 "
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
              className="w-32 h-32 object-cover rounded"
            />
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
              className="w-32 h-32 object-cover rounded"
            />
          ))}
        </div>
        <div>
          <input
            type="file"
            name="thumbnail"
            onChange={handleThumbnailChange}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            placeholder="Thumbnail"
          />
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          {formData.thumbnail && (
            <img
              src={URL.createObjectURL(formData.thumbnail)}
              alt="thumbnail"
              className="w-32 h-32 object-cover rounded"
            />
          )}
        </div>
        <div>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            placeholder="Stock"
          />
        </div>
        <div>
          <input
            type="text"
            name="colors"
            onChange={handleColorsChange}
            className="mt-3 py-3 px-2 w-full border rounded-md shadow-sm focus:outline-dashed "
            placeholder="Colors"
          />
          <p className="mt-4 text-sm text-gray-600">
            Colors: {formData.colors.join(", ")}
          </p>
        </div>
        {error && <p className="mt-4 text-red-600">{error}</p>}
        <button
          type="submit"
          className="mt-6 py-3 px-6 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Add Product
        </button>
      </form>
    </>
  );
};

export default AddProductPage;
