import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Basket from "./basket";
import Header from "./header";
import Product from "./product";
import ProductList from "./product-list";
import AuditLog from "./audit-log";
import './app.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <article className="Article">
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route
              path="/product/:id"
              render={({ match }) => {
                console.log(match)
                return (
                  <Product id={parseInt(match.params.id, 10)} />

                )
              }
              }
            />
            <Route path="/basket" exact component={Basket} />
          </Switch>
          <AuditLog />
        </article>
        
      </div>
    </BrowserRouter>
  );
}
