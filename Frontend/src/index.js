import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RouteSwitch from "./routeSwitch";
import store from './Redux/store';
import { Provider } from 'react-redux';
// require('dotenv').config()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouteSwitch />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
