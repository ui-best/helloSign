export const userAddData = (payload) => {
    return {
      type: "USER_ADD_DATA",
      payload,
    };
  };
  export const userRemoveData = () => ({
    type: "USER_REMOVE_DATA",
  });