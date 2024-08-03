import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { cartProducts, fetchCartItemsAsync } from "../slice/Cart/cartSlice";


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
//   // More products...
// ];

function CartPage() {

  const dispatch = useDispatch();
  const products = useSelector(cartProducts)

  useEffect(()=>{
    dispatch(fetchCartItemsAsync())
  },[ dispatch])

  if (!products) {
    return <div>Loading...</div>; // or some other fallback UI
}

  return (
    <div className="w-full">
      <div className="m-8 sm:m-10">
        <div className="h-auto p-10">
          <h1 className="uppercase -tracking-tighter">your cart</h1>
        </div>

        <div className="grid grid-cols-12">
          <div className="flex col-span-12 sm:col-span-8 lg:col-span-10 justify-start pb-3 border-b-2 ">
            <h1>Product</h1>
          </div>
          <div className="col-span-4 lg:col-span-2 grid grid-cols-2">
            <div className=" sm:col-span-1 hidden sm:block justify-center pb-3 border-b-2">
              <h1>Quantity</h1>
            </div>
            <div className=" col-span-2 hidden sm:block  sm:col-span-1  sm:items-end pb-3 border-b-2">
              <h1>Total</h1>
            </div>
          </div>
        </div>

        <div>
          {products.map((product) => (
            <div className="grid grid-cols-12 mt-2 border-b gap-4">
              <div className="col-span-10 sm:col-span-8 lg:col-span-10 flex flex-col justify-start">
                <div className="flex">
                  <div className="shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-32 sm:w-40 p-4 "
                    />
                  </div>
                  <div className="flex flex-col items-start p-4">
                    <h1 className="text-left ">{product.title}</h1>
                    <div className="flex gap-2">
                      <p>{product.price}</p>
                      <p className="opacity-55"> x 1</p>
                    </div>
                    <div className="mt-2 flex">
                      <button className="py-2 px-6 border sm:hidden -tracking-tighter">
                        - 1 +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-4 lg:col-span-2 grid sm:grid-cols-2">
                <div className="sm:col-span-1 hidden sm:block">
                  <div className="flex h-full justify-center items-center">
                    <div className="flex py-2 px-6 sm:border gap-3">
                      <button className=" "> - </button>
                      <button className=" "> 1 </button>
                      <button className=" "> + </button>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-1 ">
                  <div className="flex h-full justify-end items-end sm:items-center sm:justify-center pb-4 sm:pb-0">
                    <div className="flex gap-2">
                      <h1>{product.price}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="m-8 sm:m-20 pb-20 flex justify-center">
        <div className="w-full bg-blue-800 rounded p-3">
          <Link to="/checkout" className="rounded   text-white">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
