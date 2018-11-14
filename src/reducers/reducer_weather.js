import { FETCH_WEATHER } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload.data];
  }

  return state;
};
