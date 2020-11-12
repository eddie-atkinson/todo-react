function counterReducer(counter = 0, action) {
  switch (action.type) {
    case 'CHANGE_COUNTER': {
      return counter + action.payload;
    }
    default: {
      return counter;
    }
  }
}
function changeStoreCounter(payload) {
  return {
    type: 'CHANGE_COUNTER',
    payload,
  };
}

export {
  counterReducer,
  changeStoreCounter,
};
