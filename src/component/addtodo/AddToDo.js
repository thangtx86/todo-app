import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { addTodo, cancel, updateToDo } from "../../action/actions";
import { getCreate } from "../../action/actionChoiceType";
import "./AddToDo.css";

const AddToDo = (props) => {
  const inputEl = useRef("");
  const [state, setState] = useState({
    taskName: props.args.taskName,
    taskId: props.args.taskId,
  });

  useEffect(() => {
    if (props.type === "UPDATE") {
      setState({ taskName: props.args.taskName, taskId: props.args.taskId });
    }
  }, [props.type, props.args]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.type === "CREATE") {
      props.actions.addTodo(state.taskName);
    } else {
      props.actions.updateToDo(state.taskId, state.taskName);
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    inputEl.current.value = "";
    props.actions.cancel();
    props.actions.getCreate();
  };

  const isChangeForm = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="container form-add">
      <div className="header-name">
        <h3>ToDo List</h3>
        <p>Add An Item</p>
      </div>
      <div className="row">
        <form className=" col-md-12" onSubmit={handleSubmit}>
          <table className="table table-form">
            <tr>
              <td>
                <input
                  className="form-control col-md-7"
                  type="text"
                  name="taskName"
                  ref={inputEl}
                  onChange={isChangeForm}
                  placeholder="Enter your todo name ..."
                  value={state.taskName}
                />
              </td>
              <td>
                <div className="row">
                  <button
                    className={`btn btn-${
                      props.type == "CREATE" ? "primary" : "success"
                    } col-md-5 btn-submit`}
                    type="submit"
                  >
                    {props.type == "CREATE" ? "ADD" : "UPDATE"}
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div className="row">
                  <input
                    className="btn btn-danger col-md-5 btn-submit"
                    type="button"
                    onClick={handleCancel}
                    value="Cancer"
                  />
                </div>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};

AddToDo.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    ...state.headerReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { addTodo, cancel, updateToDo, getCreate },
      dispatch
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
