import Data from '../data/data.json'
const initialState = {
  projects: Data,
  active: "",
  isOver: true,
  duration: 10000,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case 'CHANGE_TO_ACTIVE':
      return {
        ...state,
        active : action.active
      }; 

    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.key]: action.value,
      };

    case 'MOUSE_OVER':
      return {
        ...state,
        isOver: action.isOver,
        duration: action.duration
      };  
    case 'MOUSE_OUT':
      return {
        ...state, 
        isOver: action.isOver,
        duration: action.duration
      };
    default:
      return state;
  }
}

export default reducer;
