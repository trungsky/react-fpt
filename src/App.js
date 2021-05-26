import React, { useState, useEffect } from "react";
import Routes from "./routes";
import "./App.css";
import ProductAdd from "./components/ProductAdd";
import ProductApi from "./api/ProductApi";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data: products } = await ProductApi.getAll();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const removeItem = async (id) => {
    const itemRemove = products.find((p) => p.id === id);
    const newProducts = products.filter((products) => products.id !== id);
    await ProductApi.remove(itemRemove.id);
    setProducts(newProducts);
    console.log(`Xóa thành công thằng "${itemRemove.name}"`);
  };
  return (
    <div className="container mx-auto">
      {/* <ProductAdd products={products} onAdd={(props) => setProducts(props)} /> */}
      <Routes products={products} onDelete={removeItem} onAdd={(props) => setProducts(props)} />
      <Footer />
    </div>
  );
}

export default App;
