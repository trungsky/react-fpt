import React from "react";
import ProductAdd from "../../components/ProductAdd";
const AddProductPage = (props) => {
  return (
    <div>
      <ProductAdd products={props.products} onAdd={props.onAdd} />
    </div>
  );
};

export default AddProductPage;
