import React, { useState, useEffect } from "react";
import Routes from "./routes";
import "./App.css";
import ProductApi from "./api/ProductApi";
import CategoryApi from "./api/CategoryApi";
import Footer from "./components/Footer";
import toastr from "toastr";
function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data: products } = await ProductApi.getAll();
        let { data: categorys } = await CategoryApi.getAll();
        setProducts(products);
        setCategory(categorys);
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


  const removeCategory = async (id) => {
    const itemRemove = category.find((c) => c.id === id);
    const newCategory = category.filter((category) => category.id !== id);
    try {
      await CategoryApi.remove(itemRemove.id);
      setCategory(newCategory);
      toastr.success(`Xóa thành công: "${itemRemove.name}"`);
    } catch (error) {
      toastr.error(`Xóa lỗi: "${error}"`);
    }
  };

  return (
    <div className="container mx-auto">
      <Routes
        products={products}
        category={category}
        onDelete={removeItem}
        onAdd={(props) => setProducts(props)}
        onAddCategory={(props) => setCategory(props)}
        onDeleteCategory={removeCategory}
      />
      <Footer />
    </div>
  );
}

export default App;
