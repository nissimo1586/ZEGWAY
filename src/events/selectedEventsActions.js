export const ADD_EVENT = 'ADD_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const addEvent = (event) => {
  return {
    type: ADD_EVENT,
    payload: event,
  };
};

export const removeEvent = (eventId) => {
  return {
    type: REMOVE_EVENT,
    payload: eventId,
  };
};
