import React from "react";

import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import HomePage from "./pages/website/home";
import AboutPage from "./pages/website/about";
import ProductPage from "./pages/admin/products";
import CategoryPage from "./pages/admin/category";
import ProductDetail from "./pages/website/productDetail";
import NotFoundPage from "./pages/404";
import LayoutAdmin from "./layouts/admin";
import LayoutWebsite from "./layouts/website";
import AdminProductList from "./components/AdminProductList";
import AddProductPage from "./pages/admin/addproducts";
import EditProductPage from "./pages/admin/editproducts";
import CategoryAdd from "./components/CategoryAdd";
import EditCategoryPage from "./pages/admin/editcategory";
import LoginPage from "./pages/user/login";
import RegisterPage from "./pages/user/register";
import UserPage from "./pages/user/user";
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/:path?/:path?">
          <LayoutAdmin>
            <Switch>
              <Route exact path="/admin">
                Admin
              </Route>
              <Route exact path="/admin/products">
                <ProductPage {...props} />
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
                <AdminProductList {...props} />
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
