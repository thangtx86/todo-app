const GET_CREATE = "GET_CREATE";
const GET_UPDATE = "GET_UPDATE";

const initialHeaderState = {
  type: "CREATE",
  args: {},
};

export const getCreate = () => ({ type: GET_CREATE });

export const getUpdate = (task) => ({ type: GET_UPDATE, task });

export default function headerReducer(state = initialHeaderState, action) {
  switch (action.type) {
    case GET_CREATE:
      return {
        type: "CREATE",
        args: initialHeaderState.args,
      };
    case GET_UPDATE:
      return {
        type: "UPDATE",
        args: action.task,
      };
    default:
      return state;
  }
}
