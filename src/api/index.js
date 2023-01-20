import baseRequest from './request';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAllPeople = async (page = 1) => {
  const responce = await baseRequest(`people/?page=${page}`);
  return responce;
};

export const getNameByQuery = async (query = 'planets/1/') => {
  const responce = await baseRequest(query);

  return responce?.name;
};

export const setFavourites = async value => {
  try {
    await AsyncStorage.setItem('favourites', value);
  } catch (e) {
    console.log('AsyncStorage error', e);
  }
};

export const getFavourites = async () => {
  try {
    const value = await AsyncStorage.getItem('favourites');
    if (value && value !== 'null') {
      return value;
    }
  } catch (e) {
    console.log('AsyncStorage error', e);
  }
  return [];
};
