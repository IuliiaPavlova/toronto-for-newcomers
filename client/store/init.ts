export const initialState = {
  categories: [
    { type: 'Business' },
    { type: 'Tourism' },
    { type: 'Immigration' },
  ],
  
  params: [
    { type: 'I use car' },
    { type: 'I travel a lot' },
    { type: 'I would prefer cheap accommodation' },
    { type: 'I have kids' },
    { type: 'I don\'t speak English' },
    { type: 'I prefer to use subway' },
    { type: 'I will use Public transportation' },
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
  type: string;
}

export interface AppState {
  categories: Category[];
  params: Category[];
  chosen: {
    category: string | null;
    params: string[];
  }
}