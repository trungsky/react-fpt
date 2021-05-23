import React from "react";
import { NavLink } from "react-router-dom";

const ProductList = (props) => {
  const onHandleRemove = (id) => {
    props.onDelete(id);
  };

  return (
    <div>
      <ul>
        {props.products.length !== 0
          ? props.products.map((item, index) => (
              <li key={index}>
                <NavLink className="text-blue-600" to={`/products/${item.id}`}>
                  {item.name}
                </NavLink>
                <button
                  className="px-4 bg-red-400 rounded ml-5 mt-4 p-2"
                  onClick={() => onHandleRemove(item.id)}
                >
                  Delete
                </button>
              </li>
            ))
          : "Không có sản phẩm lào kả"}
      </ul>
    </div>
  );
};
export default ProductList;
