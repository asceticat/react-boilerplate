import * as React from "react";
import "./styles/main.scss";
import storeHoc from "./store/Store.hoc";
import MainPage from "./pages/Main.page";

function Application() {
  return (
    <div>
      <MainPage></MainPage>
    </div>
  )
}

export default storeHoc(Application);