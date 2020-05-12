import {
  ADD_TODO,
  DELETE_TODO,
  CHECK_DONE,
  CANCEL,
  UPDATE_TODO,
} from "../action/actionsTypes";

const numInitialState = [];

const taskReducer = (task = numInitialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...task,
        {
          taskId: action.taskId,
          taskName: action.taskName,
          completed: false,
        },
      ];

    case DELETE_TODO:
      task = task.slice();
      task.splice(action.taskId, 1);
      debugger;
      break;

    case CHECK_DONE:
      return task.map((todo) =>
        todo.taskId === action.taskId
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case CANCEL:
      task = [];
      break;

    case UPDATE_TODO:
      return task.map((todo) =>
        todo.taskId === action.taskId
          ? { ...todo, taskName: action.taskName }
          : todo
      );

    //   task.map((todo) =>
    //   todo.taskId === action.taskId
    //     ? { ...todo, taskName: todo.taskName }
    //     : todo
    // );

    //a.map(item => item.key === 2 ? { ...item, name: 'dsfsdfdsfd' } : item)
    //  task.map((todo) =>
    //   todo.taskId === action.taskId
    //     ? { ...todo, taskName: todo.taskName }
    //     : todo
    // );

    default:
      return task;
  }

  return task;
};

export default taskReducer;
