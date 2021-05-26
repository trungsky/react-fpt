import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductEdit from "../../components/ProductEdit";

const EditProductPage = (props) => {
  return (
    <div>
      <ProductEdit products={props.products} onAdd={props.onAdd} />
    </div>
  );
};

export default EditProductPage;
