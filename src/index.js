import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./_redux/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="dashboard">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
