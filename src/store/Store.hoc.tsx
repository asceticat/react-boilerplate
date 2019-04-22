import * as React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunkMiddleware from "redux-thunk";

function configureStore() {
  const enhancers = [
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ];

  const composedEnhancers = compose(...enhancers);

  const store = createStore(reducers, undefined, composedEnhancers);
  
  return store;
}

export default function storeHoc(Children) {
  return function(props) {
    return (
      <Provider store={configureStore()}>
        <Children {...props} />
      </Provider>
    )
  }
}