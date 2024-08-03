import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

function ProductCard() {
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20 h-[90vh] lg:h-[600px] flex flex-col lg:flex-row ">
        {/* Static Section */}
        <div className="lg:w-1/3 flex-shrink-0 p-6 flex   lg:justify-start items-center justify-center ">
          <div>
            <h1 className="uppercase text-lg">New Arrivals</h1>
            <Link to='/all-products'>
            <button className="bg-black uppercase px-6 py-2 mt-4 text-white">
              Shop Now
            </button>
            </Link>
            
          </div>
        </div>

        {/* Scrollable Section */}
        <div className="lg:w-2/3 w-full relative overflow-x-auto hide-scrollbar flex lg:flex-row flex-col">
          <div className="flex lg:flex-row flex-col space-x-0 lg:space-x-4 space-y-8 lg:space-y-0 p-4">
            {products.map((product) => (
              
              <Link to={`product-details/:${product.id}`} 
              key={product.id}
              className="bg-white relative rounded-lg w-full lg:w-1/2 h-[450px] sm:h-auto flex-shrink-0 group hover:shadow-md flex flex-col">
                <div className="lg:h-[80%] h-[45vh]  bg-gray-200 flex justify-center items-center mb-4 overflow-hidden">
                <img
                     src={product.imageSrc}
                     alt={product.imageAlt}
                     className="object-cover h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                   />
                </div>
                <div className="">
                <h3 className="text-sm font-medium text-gray-700">
                   {product.name}
                   </h3>
                   <p className="text-sm text-gray-500">{product.price}</p>
                 
                </div>
                <button className="absolute rounded-lg bottom-2 left-1/2 transform -translate-x-1/2 w-11/12 p-2 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to cart
                  </button>
                
              </Link>
              

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
