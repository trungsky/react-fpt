import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ProductApi from "../api/ProductApi";
import { PriceFormat } from "../components/constant";

const ProductList = (props) => {
  const onHandleRemove = (id) => {
    props.onDelete(id);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await ProductApi.getAllWithLimit(9);
      setProducts(product);
    };
    getProduct();
  }, []);

  return (
    <div className="flex flex-wrap">
      {products.map((product, index) => (
        <div key={index} className="flex px-12 py-6">
          <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
            <div
              className="w-1/3 bg-cover"
              style={{
                backgroundImage: `url("${product.photo}")`,
              }}
            ></div>
            <div className="w-2/3 p-4">
              <h1 className="text-gray-900 font-bold text-2xl">
                <Link to={`products/${product._id}`}>{product.name}</Link>
              </h1>
              <p className="mt-2 text-gray-600 text-sm min-w-[500px]">
                {product.description.substring(0, 35)}...
              </p>
              <div className="flex item-center justify-between mt-3">
                <h1 className="text-gray-700 font-bold text-xl">
                  {PriceFormat(product.price)}
                </h1>
                <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                  <Link
                    className="hover:no-underline hover:text-yellow-400"
                    to={`/products/${product._id}`}
                  >
                    Xem chi tieest
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
