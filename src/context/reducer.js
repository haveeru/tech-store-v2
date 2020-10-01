export default (state, action) => {
  switch (action.type) {
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
