import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./reducer";

import AddToDo from "./component/addtodo/AddToDo";
import ToDoList from "./component/list/ToDoList";
import Header from "./component/header/Header";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <AddToDo />
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;
