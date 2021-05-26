import React, { useState, useEffect } from "react";
import Routes from "./routes";
import "./App.css";
import ProductApi from "./api/ProductApi";
import Footer from "./components/Footer";
import toastr from "toastr";
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
    try {
      await ProductApi.remove(itemRemove.id);
      setProducts(newProducts);
      toastr.success(`Xóa thành công: "${itemRemove.name}"`);
    } catch (error) {
      toastr.error(`Xóa lỗi: "${error}"`);
    }
  };
  return (
    <div className="container mx-auto">
      <Routes
        products={products}
        onDelete={removeItem}
        onAdd={(props) => setProducts(props)}
      />
      <Footer />
    </div>
  );
}

export default App;
