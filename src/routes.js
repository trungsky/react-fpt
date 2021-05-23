import React from "react";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/products";
import ProductDetail from "./pages/productDetail";
import NotFoundPage from "./pages/404";
const Routes = (props) => {
  return (
    <Router>
      <Nav />
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
          <ProductDetail {...props}/>
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
