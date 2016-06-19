import * as types from '../constants/actionTypes';

const initialState = {};

export default function myAppReducer(state = initialState, action) {
  switch (action.type) {
    case types.MY_FANCY_ACTION:
      return { ...state };

    default:
      return state;
  }
}
