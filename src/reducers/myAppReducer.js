import * as types from '../constants/actionTypes';

const initialState = {
  counter: 1,
};

export default function myAppReducer(state = initialState, action) {
  switch (action.type) {
    case types.INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 };

    case types.DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 };

    case types.RESET_COUNTER:
      return { ...state, counter: 1 };

    default:
      return state;
  }
}
