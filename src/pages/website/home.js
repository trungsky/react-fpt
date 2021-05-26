import React from "react";
import ProductList from "../../components/ProductList";

const HomePage = (props) => {
  return (
    <div>
      <ProductList {...props}/>
    </div>
  );
};
export default HomePage;
