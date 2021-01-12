export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_PARAM = 'ADD_PARAM';
export const REMOVE_PARAM = 'REMOVE_PARAM';

export interface Action<P = string> {
  type: string;
  payload: P;
}

export const addCategory = (category: string): Action => ({
  type: ADD_CATEGORY,
  payload: category,
})
export const addParam = (param: string): Action => ({
  type: ADD_PARAM,
  payload: param,
})
export const removeParam = (param: string): Action => ({
  type: ADD_CATEGORY,
  payload: param,
})
