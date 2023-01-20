// api
import {getFavourites} from '../api';

// redux
import {setFavouritesThunk} from '../redux/reducers';

export const getAllFavouritesHelper = async dispatch => {
  const data = await getFavourites();

  if (data !== 'null') {
    const dataValue = JSON.parse(data);

    dispatch(setFavouritesThunk(dataValue));
  }
};

export const isFavouriteHelper = (all, hero) => {
  const index = all.findIndex(item => {
    return item.url === hero.url;
  });

  return Boolean(index + 1);
};

export const addFavouriteHelper = (all = [], hero = null, dispatch) => {
  if (Array.isArray(all) && hero) {
    const newFavourites = [...all];
    newFavourites.push(hero);

    dispatch(setFavouritesThunk(newFavourites));
  }
};

export const removeFavouriteHelper = (all = [], hero = null, dispatch) => {
  if (Array.isArray(all) && hero) {
    const newFavourites = all.filter(item => {
      return item.url !== hero.url;
    });

    dispatch(setFavouritesThunk(newFavourites));
  }
};

export const countGenders = (all = []) => {
  let male = 0;
  let female = 0;
  let other = 0;

  if (Array.isArray(all)) {
    for (const hero of all) {
      if (hero.gender === 'male') {
        male++;
      } else if (hero.gender === 'female') {
        female++;
      } else {
        other++;
      }
    }
  }

  return {male, female, other};
};

export const removeAllFavouritesHelper = dispatch => {
  dispatch(setFavouritesThunk([]));
};
