import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';

// redux
import {getPeopleThunk} from '../../redux/reducers';
import {useSelector, useDispatch} from 'react-redux';

// components
import Wrapper from '../../components/Wrapper';
import HeroesList from '../../components/HeroesList';

// helpers
import {getAllFavouritesHelper} from '../../helpers';

// assets
import {COLORS} from '../../assets';

import styles from './styles';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  // get Heroes from Server
  const getData = async (page = 1) => {
    dispatch(getPeopleThunk(page));
  };

  useEffect(() => {
    getData();
    getAllFavouritesHelper(dispatch); // get Favourites from Async Storage
  }, []);

  // pull Heroes out from Redux
  const {people, isLoading} = useSelector(store => store);

  return (
    <Wrapper>
      {people?.results?.length > 0 && !isLoading && (
        <HeroesList heroes={people} navigation={navigation} />
      )}
      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={COLORS.main} />
        </View>
      )}
    </Wrapper>
  );
};

export default Home;
