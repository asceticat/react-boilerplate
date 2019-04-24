import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ITestReducer } from "../store/reducers";

function MainPage({ value, dispatch }) {
  function handleInc() {
    dispatch({
      type: "INCREASE",
    });
  }

  function handleDec() {
    dispatch({
      type: "DECREASE",
    });
  }

  return (
    <div>
      { value }
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <br />
      <Link to="/">/</Link>
      <br />
      <Link to="/home">/home</Link>
    </div>
  );
}

const mapStateToProps = ({ testReducer }: { testReducer: ITestReducer }) => {
  return {
    value: testReducer.value,
  };
};

export default connect(mapStateToProps)(MainPage);
