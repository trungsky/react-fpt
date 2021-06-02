import React, { useState, useEffect } from "react";
import ProductApi from "../../api/ProductApi";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const { idProduct } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await ProductApi.get(idProduct);
      setProducts(product);
    };
    getProduct();
  }, []);

  const textAlignLast = {
    "text-align-last": "center",
  };
  return (
    <div>
      <div className="bg-white shadow-sm sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
          {/* Search Mobile */}
          <div className="relative md:hidden">
            <input
              type="search"
              className="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
              placeholder="Search"
            />
            <svg
              className="h-6 w-6 text-gray-300 ml-2 mt-3 stroke-current absolute top-0 left-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {/* ./ Search Mobile */}
        </div>
      </div>
      <div className="py-6">
        {/* Breadcrumbs */}

        {/* ./ Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div x-data="{ image: 1 }" x-cloak>
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                    <img
                      src={products.photo}
                      className="h-64 w-full rounded md:h-80"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {products.name}
              </h2>
              <p className="text-gray-500 text-sm">
                By{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  {products.category}
                </a>
              </p>
              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="font-bold text-indigo-600 text-3xl">
                      {products.price}
                    </span>
                    <span className="text-indigo-400 mr-1 mt-1">đ</span>
                  </div>
                </div>
                {/* <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    Save 12%
                  </p>
                  <p className="text-gray-400 text-sm">
                    Inclusive of all Taxes.
                  </p>
                </div> */}
              </div>
              <p className="text-gray-500">{products.desc}</p>
              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Quantity
                  </div>
                  <select
                    style={textAlignLast}
                    className="w-[120px] text-center cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
                <button
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* partial */}
    </div>
  );
};
export default ProductDetail;
