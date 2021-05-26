import React from "react";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/website/home";
import AboutPage from "./pages/website/about";
import ProductPage from "./pages/admin/products";
import ProductDetail from "./pages/website/productDetail";
import NotFoundPage from "./pages/404";
import LayoutAdmin from "./layouts/admin";
import LayoutWebsite from "./layouts/website";
import ProductList from "./components/ProductList";
import ProductAdd from "./components/ProductAdd";
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
                <ProductList {...props} />
              </Route>
              <Route exact path="/admin/products/add">
                <ProductAdd {...props} />
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
              <Route exact path="/products/:idProduct">
                <ProductDetail {...props} />
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
