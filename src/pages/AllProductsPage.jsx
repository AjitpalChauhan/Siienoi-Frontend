import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { fetchAllProductAsync, selectAllProducts } from '../slice/Product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAsync, cartProducts } from '../slice/Cart/cartSlice';


// const products = [
//   {
//     id: 1,
//     name: "Earthen Bottle",
//     href: "#",
//     price: "$48",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
//     imageAlt:
//       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//   },
//   {
//     id: 2,
//     name: "Nomad Tumbler",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
//     imageAlt:
//       "Olive drab green insulated bottle with flared screw lid and flat top.",
//   },
//   {
//     id: 3,
//     name: "Focus Paper Refill",
//     href: "#",
//     price: "$89",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
//     imageAlt:
//       "Person using a pen to cross a task off a productivity paper card.",
//   },
//   {
//     id: 4,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   {
//     id: 5,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   {
//     id: 6,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   {
//     id: 7,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   {
//     id: 8,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   {
//     id: 9,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   // More products...
// ];





function AllProductsPage() {

  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts)
  const cart = useSelector(cartProducts)

  useEffect(() => {
    dispatch(fetchAllProductAsync())
    console.log(products)
  }, [dispatch])

  const handleCart = (_id) => {
    const productData = {product: _id, quantity: 1}
    dispatch(addToCartAsync(productData))
  }

  console.log("cart",cart)

  return (
    <div className='w-full'>
      <div className='header mt-20 mb-10 mx-20'>
        <div className='h-auto p-10 space-y-3 font-extralight text-gray-600'>
            <h1 className='uppercase -tracking-tighter'>SHOP ALL</h1>
            <p>Classic - modern fragrance for men and women</p>
        </div>
      </div>
      <div className='filter mx-20 bg-gray-100 p-5 flex justify-between'>
        <select className='px-6 py-1 border border-black '>
          <option value="1">Filter</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select className='px-6 py-1 border border-black '>
          <option value="1">Sort</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className='all-products m-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
              
              <div
              key={product._id}
              className="bg-white relative rounded-lg w-full h-[450px] lg:h-[550px]  flex-shrink-0 group hover:shadow-md flex flex-col">
                <Link to={`/product-details/${product._id}`} className='h-[95%]'>
                <div className="lg:h-[80%] h-[45vh]  bg-gray-200 flex justify-center items-center mb-4 overflow-hidden">
                <img
                     src={product.thumbnail}
                     alt={product.title}
                     className="object-cover h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                   />
                </div>
                <div className="">
                <h3 className="text-sm font-medium text-gray-700">
                   {product.title}
                   </h3>
                   <p className="text-sm text-gray-500">{product.price}</p>
                 
                </div>
                </Link>
                <button
                onClick={()=>handleCart(product._id)}
                className="absolute rounded-lg bottom-2 left-1/2 transform -translate-x-1/2 w-11/12 p-2 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to cart
                  </button>
                
              </div>
              

            ))}
      </div>
    </div>
  )
}

export default AllProductsPage