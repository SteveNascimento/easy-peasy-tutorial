import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Basket from "./basket";
import Header from "./header";
import ProductList from "./product-list";
import './app.css'


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <article className="Article">
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/basket" exact component={Basket} />
          </Switch>
        </article>
      </div>
    </BrowserRouter>
  );
}
