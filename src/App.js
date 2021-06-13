import React, { useState, useEffect } from "react";
import Routes from "./routes";
import "./App.css";
import ProductApi from "./api/ProductApi";
import CategoryApi from "./api/CategoryApi";
import Footer from "./components/Footer";
import toastr from "toastr";
toastr.options = {
  newestOnTop: true,
  progressBar: true,
  // "preventDuplicates": true,
  timeOut: "5000",
  extendedTimeOut: "2000",
};
function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data: products } = await ProductApi.getAll();
        let { data: categorys } = await CategoryApi.getAll();
        setProducts(products);
        setCategory(categorys);
        let cart = await JSON.parse(localStorage.getItem("cart"));
        setCart(cart);
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

  const removeItemCart = async (id) => {
    const itemRemove = cart.find((p) => p.id === id);
    const newProducts = cart.filter((products) => products.id !== id);
    try {
      // console.log(itemRemove);
      cart.splice(id, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      // await ProductApi.remove(itemRemove.id);
      setCart(cart);
      // toastr.success(`Xóa thành công: "${cart[id]}"`);
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
    <div className="container-fluid mx-auto">
      <Routes
        products={products}
        category={category}
        onDelete={removeItem}
        onAdd={(props) => setProducts(props)}
        onAddCategory={(props) => setCategory(props)}
        onDeleteCategory={removeCategory}
        carts={cart}
        onDeleteCart={removeItemCart}
      />
      <Footer />
    </div>
  );
}

export default App;
