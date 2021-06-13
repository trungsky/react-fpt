import React from "react";
import AdminProductList from "../../components/AdminProductList";
const AdminProductPage = (props) => {
  const onHandleRemove = (id) => {
    props.onDelete(id);
  };

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
