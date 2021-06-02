import React from "react";
import { Link, NavLink } from "react-router-dom";

const ProductList = (props) => {
  const onHandleRemove = (id) => {
    props.onDelete(id);
  };

  return (
    <div className="flex flex-wrap">
      {props.products.map((product, index) => (
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
                <Link to={`products/${product.id}`}>{product.name}</Link>
              </h1>
              <p className="mt-2 text-gray-600 text-sm min-w-[500px]">
                Lorem ipsum
              </p>
              <div className="flex item-center justify-between mt-3">
                <h1 className="text-gray-700 font-bold text-xl">
                  {product.price}
                </h1>
                <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                  Add to Card
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
