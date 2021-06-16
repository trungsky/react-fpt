import React from "react";
import ProductEdit from "../../components/ProductEdit";
import { isAuthenticated } from "../../auth";
import NotFoundPage from "../404";
const EditProductPage = (props) => {
  const { user } = isAuthenticated();
  if (user.role !== 1) {
    return <NotFoundPage />;
  }
  return (
    <div>
      <ProductEdit props={props.products} onAdd={props.onAdd} category={props.category}/>
    </div>
  );
};

export default EditProductPage;
