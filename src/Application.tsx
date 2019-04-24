import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import storeHoc from "./store/Store.hoc";
import AppRouter from "./router/RoutesCollection";
import "./styles/main.scss";

function Application() {
  return (
    <div>
      <Router >
        <AppRouter />
      </Router>
    </div>
  );
}

export default storeHoc(Application);
