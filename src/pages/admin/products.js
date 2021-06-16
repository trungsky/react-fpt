import React from "react";

import AdminProductList from "../../components/AdminProductList";
import { isAuthenticated } from "../../auth";
import NotFoundPage from "../404";
const AdminProductPage = (props) => {
  const onHandleRemove = (id) => {
    props.onDelete(id);
  };
  const { user } = isAuthenticated();
  if (user.role !== 1) {
    return <NotFoundPage />;
  }
  return (
    <div>
      <AdminProductList
        products={props.products}
        onDelete={(props) => onHandleRemove(props)}
        category={props.category}
      />
    </div>
  );
};
export default AdminProductPage;
