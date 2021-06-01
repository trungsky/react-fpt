import React from "react";
import ProductEdit from "../../components/ProductEdit";

const EditProductPage = (props) => {
  return (
    <div>
      <ProductEdit products={props.products} onAdd={props.onAdd}/>
    </div>
  );
};

export default EditProductPage;
