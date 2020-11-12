/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeStoreCounter } from './store/reducers/counterReducer';

function changeCounter(dispatch, value) {
  dispatch(changeStoreCounter(value));
}
function App() {
  const { counter }  = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>
        {counter}
      </p>
      <button
        type="button"
        onClick={() => changeCounter(dispatch, 1)}
      >
        Increase
      </button>
      <button
        type="button"
        onClick={() => changeCounter(dispatch, -1)}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
