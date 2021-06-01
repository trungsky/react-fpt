import React from "react";
import AdminProductList from "../../components/AdminProductList";
const ProductPage = (props) => {
  const onHandleRemove = (id) => {
    props.onDelete(id);
  };

  return (
    <div>
      <AdminProductList
        products={props.products}
        onDelete={(props) => onHandleRemove(props)}
      />
    </div>
  );
};
export default ProductPage;
