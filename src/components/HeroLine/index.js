import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// libs
import {SvgXml} from 'react-native-svg';

// redux
import {useSelector, useDispatch} from 'react-redux';

// assets
import {ICONS} from '../../assets';

// helpers
import {
  addFavouriteHelper,
  removeFavouriteHelper,
  isFavouriteHelper,
} from '../../helpers';

import styles from './styles';

const HeroLine = ({item: {item}, navigation}) => {
  const dispatch = useDispatch();

  const [isFavourite, setIsFavourite] = useState(false);
  const {favourites} = useSelector(state => state);

  const goHeroInfo = () => {
    navigation.navigate('HeroInfo', {item});
  };

  const addFavourite = () => {
    addFavouriteHelper(favourites, item, dispatch);
  };

  const removeFavourite = () => {
    removeFavouriteHelper(favourites, item, dispatch);
  };

  const starPressed = () => {
    if (!isFavourite) {
      addFavourite();
    } else {
      removeFavourite();
    }
  };

  const isFavouriteCheck = () => {
    const check = isFavouriteHelper(favourites, item);

    setIsFavourite(check);
  };

  useEffect(() => {
    isFavouriteCheck();
  }, [favourites]);

  return (
    <View style={styles.lineContainer}>
      <TouchableOpacity
        style={styles.line}
        activeOpacity={0.6}
        onPress={goHeroInfo}>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addFavouriteContainer}
        activeOpacity={0.6}
        onPress={starPressed}>
        <SvgXml xml={!isFavourite ? ICONS.starEmpty : ICONS.star} />
      </TouchableOpacity>
    </View>
  );
};

export default HeroLine;
