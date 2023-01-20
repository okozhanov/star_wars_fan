import {GET_PEOPLE, SET_FAVOURITES, SET_IS_LOADING} from './actions';

const defaultState = {
  people: null,
  favourites: [],
  isLoading: true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_PEOPLE: {
      return {...state, people: action.payload};
    }

    case SET_FAVOURITES: {
      return {...state, favourites: action.payload};
    }

    case SET_IS_LOADING: {
      return {...state, isLoading: action.payload};
    }

    default:
      return state;
  }
};
