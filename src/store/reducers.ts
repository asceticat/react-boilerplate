import { combineReducers } from "redux";

export interface ITestReducer {
  value: number;
}

const initialState: ITestReducer = {
  value: 0,
};

function testReducer(state: ITestReducer = initialState, action) {
  switch (action.type) {
    case "INCREASE":
      return {
        value: state.value + 1,
      };
    case "DECREASE":
      return {
        value: state.value - 1,
      };
  }
  return state;
}

export default combineReducers({
  testReducer,
});
