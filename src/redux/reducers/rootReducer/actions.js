// api
import {getAllPeople, setFavourites} from '../../../api';

export const GET_PEOPLE = 'GET_PEOPLE';
export const SET_FAVOURITES = 'SET_FAVOURITES';
export const SET_IS_LOADING = 'SET_IS_LOADING';

const getPeopleAction = payload => ({
  type: GET_PEOPLE,
  payload,
});

export const setIsLoading = payload => ({
  type: SET_IS_LOADING,
  payload,
});

export const getPeopleThunk =
  (page = 1) =>
  async dispatch => {
    dispatch(setIsLoading(true));

    const responce = await getAllPeople(page);

    if (responce?.results?.length > 0) {
      dispatch(getPeopleAction(responce));
    }

    dispatch(setIsLoading(false));
  };

const setFavouritesAction = payload => ({
  type: SET_FAVOURITES,
  payload,
});

export const setFavouritesThunk =
  (favourites = []) =>
  async dispatch => {
    if (favourites !== []) {
      const favouritesString = JSON.stringify(favourites);
      await setFavourites(favouritesString);
    } else {
      await setFavourites('null');
    }

    dispatch(setFavouritesAction(favourites));
  };
