import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./ToDoItem.css";
import TickBlue from "../../assets/tick.png";
import TickBlack from "../../assets/tick_black.png";

import DeleteIcon from "../../assets/recycle-bin.svg";

import EditIcon from "../../assets/write.svg";

import { deleteTodo, checkDone, updateToDo } from "../../action/actions";
import { getUpdate } from "../../action/actionChoiceType";

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.updateItem = this.updateItem.bind(this);
  }
  /**
   * func update item
   */
  updateItem = (event) => {
    event.preventDefault();
    this.props.getUpdate(this.props.todoItem);
  };

  render() {
    const {
      todoItem: { taskId, taskName, completed },
      deleteTodo,
      checkDone,
    } = this.props;

    return (
      <tr>
        <td>
          <img
            src={`${completed ? TickBlue : TickBlack}`}
            alt=""
            onClick={() => checkDone(taskId)}
            className="img-tick"
          />
        </td>
        <td
          style={{
            textDecoration: completed ? "line-through" : "none",
            fontStyle: completed ? "italic" : "normal",
          }}
        >
          <p className="task-name"> {taskName}</p>
        </td>
        <td>
          <button
            className="btn btn-success buttonDelete"
            onClick={this.updateItem}
          >
            <img width="16px" src={EditIcon} />
          </button>
          <button
            className="btn btn-danger buttonDelete"
            onClick={() => {
              deleteTodo(taskId);
            }}
          >
            <img width="16px" src={DeleteIcon} />
          </button>
        </td>
      </tr>
    );
  }
}
/**
 * dispatch action to reducer
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { deleteTodo, checkDone, updateToDo, getUpdate },
    dispatch
  );
}
export default connect(null, mapDispatchToProps)(ToDoItem);
