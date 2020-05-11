import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../../containers/navbar/NavBar";
import Home from "../../containers/home/Home";
import ViewProduct from "../../containers/view-product/ViewProduct";
import Wishlist from "../../containers/wishlist/Wishlist";
import Cart from "../../containers/cart/Cart";
import Checkout from "../../containers/checkout/Checkout";

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/ViewProduct/:prodId" component={ViewProduct}></Route>
      <Route path="/wishlist" component={Wishlist}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route path="/checkout" component={Checkout}></Route>
    </Switch>
  </Router>
);

export default App;
