import React, { Component } from "react";
import { connect } from "react-redux";
import ToDoItem from "../../component/item/ToDoItem";
class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.task.taskReducers,
    };
  }

  render() {
    return (
      <div className="container">
        <table className="table">
          <tbody>
            {this.props.task.taskReducers &&
              this.props.task.taskReducers.map((value, key) => {
                return <ToDoItem key={key} todoItem={value} />; //<p key={key}>aaa {value.taskName}</p>;
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    task: state,
  };
}

export default connect(mapStateToProps)(ToDoList);
