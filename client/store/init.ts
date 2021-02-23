import { IconType } from 'react-icons/lib';
import { MdBusiness } from 'react-icons/md';

export const initialState = {
  categories: [
    { id: 1, type: 'Business', icon: MdBusiness},
    { id: 2, type: 'Tourism', icon: MdBusiness },
    { id: 3, type: 'Immigration', icon: MdBusiness },
  ],
  
  params: [
    { type: 'I use car' },
    { type: 'I travel a lot' },
    { type: 'I would prefer cheap accommodation' },
    { type: 'I have kids' },
    { type: 'I don\'t speak English' },
    { type: 'I prefer to use subway' },
    { type: 'I will use public transportation' },
    { type: 'I prefer to be close to downtown' },
    { type: 'I would like to live in a house' },
    { type: 'I would like to live in an apartment' },
  ],

  chosen: {
    category: null,
    params: [],
  }
}

export interface Category {
  id: number;
  type: string;
  icon: IconType;
}
export interface Params {
  type: string;
}

export interface AppState {
  categories: Category[];
  params: Params[];
  chosen: {
    category: string | null;
    params: string[];
  }
}