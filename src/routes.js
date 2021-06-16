import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/website/home";
import AboutPage from "./pages/website/about";
import AdminProductPage from "./pages/admin/products";
import CategoryPage from "./pages/admin/category";
import ProductDetail from "./pages/website/productDetail";
import NotFoundPage from "./pages/404";
import LayoutAdmin from "./layouts/admin";
import LayoutWebsite from "./layouts/website";
// import AdminProductList from "./components/AdminProductList";
import AddProductPage from "./pages/admin/addproducts";
import EditProductPage from "./pages/admin/editproducts";
import CategoryAdd from "./components/CategoryAdd";
import EditCategoryPage from "./pages/admin/editcategory";
import LoginPage from "./pages/user/login";
import RegisterPage from "./pages/user/register";
import UserPage from "./pages/user/user";
import TestPage from "./pages/website/test";
import ProductPage from "./pages/website/ProductPage";
import ProductByPage from "./pages/website/ProductByPage";
import CartPage from "./pages/website/cart";
import CheckoutPage from "./pages/website/checkout";
import ConfirmPage from "./pages/website/confirm";
import ProductByCategory from "./pages/website/productByCategory";
import BillPage from "./pages/website/bill";
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/:path?/:path?">
          <LayoutAdmin>
            <Switch>
              <Route exact path="/admin">
                Hello Admin !
              </Route>
              <Route exact path="/admin/products">
                <AdminProductPage {...props} />
              </Route>
              <Route exact path="/admin/products/add">
                <AddProductPage {...props} />
              </Route>
              <Route exact path="/admin/products/:idProduct">
                <EditProductPage {...props} />
              </Route>

              <Route exact path="/admin/category">
                <CategoryPage {...props} />
              </Route>
              <Route exact path="/admin/category/add">
                <CategoryAdd {...props} />
              </Route>

              <Route exact path="/admin/category/:idCategory">
                <EditCategoryPage {...props} />
              </Route>
            </Switch>
          </LayoutAdmin>
        </Route>

        <Route>
          <LayoutWebsite>
            <Switch>
              <Route exact path="/">
                <HomePage {...props} />
              </Route>
              <Route exact path="/about">
                <AboutPage />
              </Route>
              <Route exact path="/products">
                <ProductPage {...props} />
              </Route>

              <Route exact path="/products/page/:page">
                <ProductByPage {...props} />
              </Route>

              <Route exact path="/products/:idProduct">
                <ProductDetail {...props} />
              </Route>

              <Route exact path="/signin">
                <LoginPage {...props} />
              </Route>

              <Route exact path="/signup">
                <RegisterPage {...props} />
              </Route>

              <Route exact path="/user">
                <UserPage {...props} />
              </Route>

              <Route exact path="/test">
                <TestPage {...props} />
              </Route>

              <Route exact path="/cart">
                <CartPage {...props} />
              </Route>

              <Route exact path="/checkout">
                <CheckoutPage {...props} />
              </Route>
              <Route exact path="/thanks">
                <ConfirmPage {...props} />
              </Route>

              <Route exact path="/bill/:idBill">
                <BillPage {...props} />
              </Route>

              <Route exact path="/category/:idCategory">
                <ProductByCategory {...props} />
              </Route>

              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </LayoutWebsite>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
