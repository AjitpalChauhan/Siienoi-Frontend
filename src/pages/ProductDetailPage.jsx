import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetailsAsync, selectedProduct } from '../slice/Product/productSlice';


// const product = {
//   id: 1,
//   name: "Earthen Bottle",
//   href: "#",
//   price: "$48",
//   imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
//   imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//   rating: 4.5, // Product rating
//   colors: ['Red', 'Green', 'Blue'], // Available colors
//   description: "This is a detailed description of the Earthen Bottle. It is made from high-quality porcelain with a natural clay textured body and a cork stopper."
// };

function ProductDetailPage() {

  const dispatch = useDispatch()
  const product = useSelector(selectedProduct)
  const params = useParams()

  useEffect(() =>{
    dispatch(fetchProductDetailsAsync(params.id))
    console.log(params)
  },[dispatch, params.id])


  if (!product) {
    return <div>Loading...</div>; // Display a loading message or spinner while the product data is being fetched
  }
console.log(product)

  return (
    <div className='w-full'>
      <div className='main'>
        <div className='grid sm:grid-cols-11'>
          <div className='images sm:col-span-6 p-10 lg:p-20'>
            <div className='display w-full rounded-lg mb-6'>
              <img src={product.thumbnail ? product.thumbnail : ''} alt={product.title} />
            </div>
            <div className='flex flex-wrap gap-2'>
              {product.images && product.images.map((image, index) => (
                <div key={index} className='w-20 sm:w-24 sm:h-24'>
              <img src={image} alt={product.title} className='w-full overflow-hidden object-center hover:opacity-70 transition-opacity ease-in hover:shadow-sm'/>
              </div>
              ))}
              
            </div>
          </div>
          <div className='details sm:col-span-5 p-10 lg:p-20 '>
            <div className='flex flex-col justify-start items-start text-start'>
              <div className='py-3'>
              <h1 className='text-2xl '>{product.title}</h1>
              </div>
            <div className='py-3'>
              stars
            </div>
            <div className='py-3'>
              <h1>{product.price}</h1>
              <p className='text-xs opacity-85'>Price inclusive of all taxes and GST</p>
            </div>
            <div className='py-3'>
              <h1>color</h1>
              <div className='flex gap-2'>
                  {product.colors && product.colors.map((color, index) => (
                    <label key={index} className='cursor-pointer'>
                      <input
                        type="radio"
                        name="color"
                        value={color}
                        className={`hidden  `}
                        onChange={() => setSelectedColor(color)}
                      />
                      <span className={`inline-block w-6 h-6 border rounded-full hover:border-black transition `}></span>
                    </label>
                  ))}
                </div>
            </div>
            <div className="w-full text-center border rounded mt-8 p-3">
              <Link to="/checkout" className="rounded  ">
              ADD TO CART
              </Link>
            </div>
            <div className="w-full text-center bg-black rounded mt-2 p-3">
              <Link to="/checkout" className="rounded   text-white">
              BUY IT NOW
              </Link>
            </div>
            <div className='py-3 mt-3 w-full text-center'>
              <p>Secure Checkout With</p>
              <div className='grid grid-cols-5 px-8 gap-2 mt-2'>
                <div className='border h-10 bg-red-100'></div>
                <div className='border h-10 bg-red-200'></div>
                <div className='border h-10 bg-red-300'></div>
                <div className='border h-10 bg-red-400'></div>
                <div className='border h-10 bg-red-500'></div>
              </div>
            </div>
            <div className='py-5'>
              <h1>DETAILS</h1>
              <p>{product.description}</p>
            </div>
            <div className='py-5'>SHIPPING</div>
            <div className='py-5'>EXCHANGE AND RETURN</div>
            </div>
           
          </div>
        </div>
        <div>
          review
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
