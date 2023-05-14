import { combineReducers } from 'redux';
import selectedEventsReducer from '../events/selectedEventsReducer';

const rootReducer = combineReducers({
  selectedEvents: selectedEventsReducer,
});

export default rootReducer;

