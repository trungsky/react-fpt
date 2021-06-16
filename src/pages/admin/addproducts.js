import React from "react";
import ProductAdd from "../../components/ProductAdd";
import { isAuthenticated } from "../../auth";
import NotFoundPage from "../404";
const AddProductPage = (props) => {
  const { user } = isAuthenticated();
  if (user.role !== 1) {
    return <NotFoundPage />;
  }
  return (
    <div>
      <ProductAdd products={props.products} onAdd={props.onAdd} />
    </div>
  );
};

export default AddProductPage;
