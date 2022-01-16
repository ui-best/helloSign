const initialState = {};
const user = (state = initialState, action) => {
  if (action.type === "USER_ADD_DATA") {
    return { ...state, ...action.payload };
  }
  if (action.type === "USER_REMOVE_DATA") {
    return {};
  }
  return state;
};

export default user;