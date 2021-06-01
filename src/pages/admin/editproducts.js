import React from "react";
import ProductEdit from "../../components/ProductEdit";

const EditProductPage = (props) => {
  return (
    <div>
      <ProductEdit props={props.products} onAdd={props.onAdd} category={props.category}/>
    </div>
  );
};

export default EditProductPage;
