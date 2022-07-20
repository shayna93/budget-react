import entriesTypes from '../actions/entries.actions';

const reducer = (state = initialEntries, action) => {
    let newEntries;
    switch (action.type) {
      case entriesTypes.POPULATE_ENTRIES:
        return action.payload;
      case entriesTypes.ADD_ENTRY_RESULT:
        newEntries = state.concat({...action.payload});
        return newEntries;
        
      case entriesTypes.REMOVE_ENTRY_RESULT:
        newEntries = state.filter(entry => entry.id !== action.payload.id)
        return newEntries;
        case entriesTypes.POPULATE_ENTRY_DETAILS:
        case entriesTypes.UPDATE_ENTRY :
          newEntries = [...state];
          const index = newEntries.findIndex((entry) => entry.id === action.payload.id)
          console.log(newEntries[index])
          console.log(action.payload.entry)

          newEntries[index] = {...newEntries[index] , ...action.payload.entry};
          console.log(newEntries[index])
          console.log(234)

          return newEntries;
      default:
        return state;
    }
  };

  export default reducer;

  var initialEntries = [];