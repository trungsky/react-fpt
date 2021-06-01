import React, { useState, useEffect } from "react";
import ProductApi from "../../api/ProductApi";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const { idProduct } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await ProductApi.get(idProduct);
      setProducts(product);
    };
    getProduct();
  }, []);

  return (
    <div>
      Đây là sản phẩm có ID là {products.id}, tên là {products.name}
    </div>
  );
};
export default ProductDetail;
