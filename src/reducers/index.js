import { combineReducers } from 'redux'

const sectionReducer = () => {
  return [
    { title: 'ActionCreator', description: 'this is action creator' },
    { title: 'Action', description: 'this is action' },
    { title: 'dispatch', description: 'this is dispatch' },
    { title: 'Reducer', description: 'this us reducer' },
    { title: 'Store', description: 'this is store' },
  ];
}

const selectedSectionReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECT_SECTION":
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  section: sectionReducer,
  selectedSection: selectedSectionReducer
});
