import { counterReducer } from './counterReducer';

const initialState = {
  counter: 0,
};

function rootReducer(state = initialState, action) {
  return {
    counter: counterReducer(state.counter, action),
  };
}

export default rootReducer;
