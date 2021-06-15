import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { StoreProvider } from 'easy-peasy'
import store from './store'

import './index.css'

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
        
, rootElement);
