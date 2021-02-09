import { Reducer } from 'redux';
import { Action, ADD_CATEGORY, ADD_PARAM, REMOVE_PARAM } from './actions';
import { AppState, initialState } from './init';

const reducer: Reducer<AppState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        chosen: {
          ...state.chosen,
          category: action.payload
        }
      }
    case ADD_PARAM:
      return {
        ...state,
        chosen: {
          ...state.chosen,
          params: state.chosen.params.concat(action.payload)
        }
      }
    case REMOVE_PARAM:
      return {
        ...state,
        chosen: {
          ...state.chosen,
          params: state.chosen.params.filter((param) => param !== action.payload)
        }
      }
    default:
      return state
  }
}

export default reducer;