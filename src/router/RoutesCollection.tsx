import * as React from "react";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFound.page";
import MainPage from "../pages/Main.page";

export default function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage}/>
      <Route path="/home" component={MainPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  );
}
