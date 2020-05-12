import { createStore, combineReducers } from "redux";
import taskReducers from "./taskReducer";
import headerReducer from "../action/actionChoiceType";

const allReducer = combineReducers({
  taskReducers,
  headerReducer,
});

var store = createStore(allReducer);
store.subscribe(() => {
  console.log(store.getState());
});
export default store;
