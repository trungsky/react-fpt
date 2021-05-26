import React, { useState } from "react";
import ProductApi from "../../api/ProductApi";
import ProductList from "../../components/ProductList";

const ProductPage = (props) => {
  const [products, setProducts] = useState([]);

  const removeItem = async (id) => {
    const itemRemove = products.find((p) => p.id === id);
    const newProducts = products.filter((products) => products.id !== id);
    await ProductApi.remove(itemRemove.id);
    setProducts(newProducts);
    console.log(`Xóa thành công thằng "${itemRemove.name}"`);
  };

  return (
    <div>
      <ProductList
        products={props.products}
        onDelete={() => console.log(props.products)}
      />
    </div>
  );
};
export default ProductPage;
