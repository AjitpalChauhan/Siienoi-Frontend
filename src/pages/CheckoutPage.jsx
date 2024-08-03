import React from "react";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";

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
  // {
  //   id: 3,
  //   name: "Focus Paper Refill",
  //   href: "#",
  //   price: "$89",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
  //   imageAlt:
  //     "Person using a pen to cross a task off a productivity paper card.",
  // },
  // {
  //   id: 4,
  //   name: "Machined Mechanical Pencil",
  //   href: "#",
  //   price: "$35",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
  //   imageAlt:
  //     "Hand holding black machined steel mechanical pencil with brass tip and top.",
  // },
  // More products...
];

function CheckoutPage() {
  return (
    <div className="w-full">
      <div className="w-full max-h-52 grid grid-cols-12">
        <div className="logo col-span-11 flex justify-center pl-20">
          <img
            src="https://www.oceedee.com/cdn/shop/files/Oceedee_logo_final-04_180x.png?v=1661152247"
            alt="logo"
          />
        </div>
        <div className="search text-2xl flex items-center justify-between gap-6 col-span-1">
          <Link to="/cart">
            <BsHandbag />
          </Link>
        </div>
      </div>
      <div className="main">
        <div className="grid md:grid-cols-11 ">
          <div className="form md:col-span-6 border flex flex-col items-start px-10 py-5 md:pl-20 lg:pl-36 ">
            <div className="flex w-full justify-between">
              <h1 className="text-start text-xl font-medium">Contact</h1>
              <Link className="underline text-sm">Log in</Link>
            </div>
            <form action="" className="w-full">
              <input
                type="email"
                placeholder="Email"
                className="mt-3 py-3 px-2 w-full border rounded"
              />
              <h1 className="text-start mt-5 text-xl font-medium">Delivery</h1>
              <input
                type="text"
                placeholder="Country/Region"
                className="mt-3 py-3 px-2 w-full border rounded"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="mt-3 py-3 px-2 w-full border rounded"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="mt-3 py-3 px-2 w-full border rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="mt-3 py-3 px-2 w-full border rounded"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc."
                className="mt-3 py-3 px-2 w-full border rounded"
              />
              <div className="grid grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="City"
                  className="mt-3 py-3 px-2 w-full border rounded"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="mt-3 py-3 px-2 w-full border rounded"
                />
                <input
                  type="text"
                  placeholder="PIN code"
                  className="mt-3 py-3 px-2 w-full border rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Phone"
                className="mt-3 py-3 px-2 w-full border rounded"
              />
            </form>
            <div className="w-full bg-black rounded mt-8 p-3">
              <Link to="/checkout" className="rounded   text-white">
                Pay now
              </Link>
            </div>
          </div>

          <div className="cart md:col-span-5 h-screen border bg-gray-100 px-10 py-5 md:pr-20 lg:pr-36">
            <div className="pb-2 flex justify-start">
              <h1 className="">Order summary</h1>
            </div>

            <div className="">
              {products.map((product) => (
                <div className="grid grid-cols-12 mt-2 gap-1">
                  <div className="col-span-10 flex flex-col justify-start">
                    <div className="flex">
                      <div className="shrink-0">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="w-16 border rounded"
                        />
                      </div>
                      <div className="flex flex-col items-start p-4">
                        <h1 className="text-left ">{product.name}</h1>
                        <div className="flex gap-2 text-xs">
                          <p className="opacity-55">{product.price}</p>
                          <p className="opacity-55"> x 1</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 ">
                    <div className=" ">
                      <div className="flex h-full justify-end pb-4 ">
                        <div className="flex pt-4">
                          <h1>{product.price}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-3 flex flex-col justify-center">
                <div className="grid grid-cols-10 mt-2 gap-2">
                  <input
                    type="text"
                    placeholder="Discount code or gift card"
                    className="col-span-8 sm:col-span-7 lg:col-span-8 rounded p-3 border"
                  />
                  <button className="col-span-2 sm:col-span-3 lg:col-span-2 rounded p-3 bg-gray-300 text-gray-600">
                    Apply
                  </button>
                </div>
                <div className="flex justify-between mt-5 text-sm sm:text-md gap-2">
                  <p>Subtotal</p>
                  <p>$207</p>
                </div>
                <div className="flex justify-between mt-2 text-sm sm:text-md gap-2">
                  <p>Shipping</p>
                  <p>free</p>
                </div>
                <div className="flex justify-between mt-3 text-lg font-medium gap-2">
                  <p>Total</p>
                  <p>$207</p>
                </div>
                <div className="flex justify-between mt-3 text-sm sm:text-md gap-2 opacity-65">
                  <p>Including $6.56 in taxes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
