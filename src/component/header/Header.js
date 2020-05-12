import React from "react";
import "../header/Header.css";

const Header = () => (
  <div className="header-todo">
    <a className="todo-header-title" href="http://localhost:3000/">
      <h4 className="title-app">ToDo List App</h4>
    </a>
    <a className="header-version" href="http://localhost:3000/">
      <h3 className="version-app">v 1.1</h3>
    </a>
  </div>
);

export default Header;
