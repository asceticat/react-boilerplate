import * as React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

function configureStore() {
  const composeEnhancers = composeWithDevTools({});

  const enhancers = [
    applyMiddleware(thunkMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ];

  const composedEnhancers: any = composeEnhancers(...enhancers);

  return createStore(reducers, undefined, composedEnhancers);
}

export default function storeHoc(Children) {
  return (props) => {
    return (
      <Provider store={configureStore()}>
        <Children {...props} />
      </Provider>
    );
  };
}
