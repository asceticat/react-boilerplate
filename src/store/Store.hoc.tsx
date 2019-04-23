import * as React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

function configureStore() {
  const composeEnhancers = composeWithDevTools({});

  const enhancers = [
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ];

  const composedEnhancers: any = composeEnhancers(...enhancers);

  return createStore(reducers, undefined, composedEnhancers);
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