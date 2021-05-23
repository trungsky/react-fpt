import React, { useState } from "react";
import ProductApi from "../api/ProductApi";
const ProductAdd = (props) => {
  const [inputValue, setInputValue] = useState("");
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const { data: newProducts } = await ProductApi.add({ name: inputValue });
    props.onAdd([...props.products, newProducts]);
    setInputValue("");
  };

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input type="text" value={inputValue} onChange={onHandleChange} placeholder="Nhập tên sản phẩm"/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ProductAdd;
