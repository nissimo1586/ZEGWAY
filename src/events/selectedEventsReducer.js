import { ADD_EVENT, REMOVE_EVENT } from './selectedEventsActions';

const initialState = [];

const selectedEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.payload];
    case REMOVE_EVENT:
      return state.filter((event) => event.id !== action.payload);
    default:
      return state;
  }
};

export default selectedEventsReducer;
