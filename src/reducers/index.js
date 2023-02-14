import { duration } from "@mui/material";

const initialState = {
  isOver: true,
  duration: 10000
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'CHANGE_VALUE': // pour ajouter un champ controller
      return {
        ...state,
        [action.key]: action.value,
        // la notation entre crochet me permet de spécifier
        // via une expression le nom de la propriété cliblée
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
