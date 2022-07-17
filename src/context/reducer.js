const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_RESUME':
      return action.data;
    default:
        return state;
  }
}

export default reducer;
