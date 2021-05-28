import React from "react";
import ProductEdit from "../../components/ProductEdit";

const EditProductPage = (props) => {
  return (
    <div>
      <ProductEdit props={props.products} />
    </div>
  );
};

export default EditProductPage;
