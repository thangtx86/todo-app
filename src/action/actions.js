import {
  ADD_TODO,
  DELETE_TODO,
  CHECK_DONE,
  CANCEL,
  UPDATE_TODO,
} from "./actionsTypes";

let newTask = 0;

export const addTodo = (inputTaskName = "rtretre") => {
  return {
    type: ADD_TODO,
    taskId: newTask++,
    taskName: inputTaskName,
  };
};

export const deleteTodo = (taskId) => {
  return {
    type: DELETE_TODO,
    taskId,
  };
};

export const checkDone = (taskId) => {
  return {
    type: CHECK_DONE,
    taskId,
  };
};

export function cancel() {
  return {
    type: CANCEL,
  };
}

export const updateToDo = (taskId, taskName) => {
  return {
    type: UPDATE_TODO,
    taskId,
    taskName,
  };
};
