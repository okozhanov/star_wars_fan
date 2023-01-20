import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

// components
import Wrapper from '../../components/Wrapper';
import HeroLine from '../../components/HeroLine';
import Counter from '../../components/Counter';
import Button from '../../components/Button';

// redux
import {useDispatch, useSelector} from 'react-redux';

// helpers
import {getAllFavouritesHelper, removeAllFavouritesHelper} from '../../helpers';

import styles from './styles';

const Favourites = ({navigation}) => {
  const dispatch = useDispatch();

  const {favourites} = useSelector(state => state);

  useEffect(() => {
    getAllFavouritesHelper(dispatch);
  }, []);

  const removeAll = () => {
    removeAllFavouritesHelper(dispatch);
  };

  return (
    <Wrapper title="Favourites" withoutSubtitle>
      <>
        {favourites?.length === 0 && (
          <View style={styles.oopsContsainer}>
            <Text style={styles.oopsText}>Oops! No favourites yet</Text>
          </View>
        )}

        {favourites?.length !== 0 && (
          <>
            <View style={styles.counterContainer}>
              <Counter favourites={favourites} />
            </View>
            <FlatList
              scrollEnabled
              showsVerticalScrollIndicator={false}
              bounces={false}
              data={favourites}
              renderItem={item => (
                <HeroLine item={item} navigation={navigation} />
              )}
              keyExtractor={item => item.url}
            />
            <View style={styles.buttonContainer}>
              <Button label="Remove all" onPress={removeAll} />
            </View>
          </>
        )}
      </>
    </Wrapper>
  );
};

export default Favourites;
