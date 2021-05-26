import React, { useState, useEffect } from "react";
import ProductApi from "../../api/ProductApi";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { idProduct } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const { data: product } = await ProductApi.get(idProduct);
        setProducts(product);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  return (
    <div>
      Đây là sản phẩm có ID là {products.id}, tên là {products.name}
    </div>
  );
};
export default ProductDetail;
