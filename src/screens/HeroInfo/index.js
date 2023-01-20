import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

// components
import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button';

// api
import {getNameByQuery} from '../../api';

// redux
import {useSelector, useDispatch} from 'react-redux';

// helpers
import {
  isFavouriteHelper,
  addFavouriteHelper,
  removeFavouriteHelper,
} from '../../helpers';

import styles from './styles';

const HeroInfo = props => {
  const {
    navigation,
    route: {
      params: {item},
    },
  } = props;

  const {
    name,
    hair_color,
    skin_color,
    eye_color,
    height,
    birth_year,
    gender,
    species,
    homeworld,
  } = item;

  // checking for more personal info

  const homeworldUrl = homeworld.slice(homeworld.indexOf('planets/'));
  const speciesUrl =
    species?.length > 0
      ? species[0].slice(species[0].indexOf('species/'))
      : null;

  const [homeworldName, setHomeworldName] = useState('');
  const [speciesName, setSpeciesName] = useState('');

  const getHomeworldName = async () => {
    const responce = await getNameByQuery(homeworldUrl);
    setHomeworldName(responce);
  };

  const getSpeciesName = async () => {
    if (speciesUrl) {
      const responce = await getNameByQuery(speciesUrl);
      setSpeciesName(responce);
    }
  };

  useEffect(() => {
    getHomeworldName();
    getSpeciesName();
  }, []);

  // checking is favourite

  const dispatch = useDispatch();

  const {favourites} = useSelector(state => state);

  const [isFavourite, setIsFavourite] = useState(false);

  const isFavouriteCheck = () => {
    const check = isFavouriteHelper(favourites, item);

    setIsFavourite(check);
  };

  useEffect(() => {
    isFavouriteCheck();
  }, [favourites]);

  // change status of favourite

  const addFavourite = () => {
    addFavouriteHelper(favourites, item, dispatch);
  };

  const removeFavourite = () => {
    removeFavouriteHelper(favourites, item, dispatch);
  };

  const buttonPressed = () => {
    if (!isFavourite) {
      addFavourite();
    } else {
      removeFavourite();
    }
  };

  const Line = ({sublabel = '', label = ''}) => {
    return (
      <View style={styles.line}>
        <View style={[styles.subcontainer, {width: '40%'}]}>
          <Text style={styles.sublabel}>{sublabel}</Text>
        </View>
        <View style={[styles.subcontainer, {width: '60%'}]}>
          <Text style={styles.label}>
            {label ? label.toUpperCase() : 'Processing...'}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Wrapper
      title={name}
      withBackButton
      navigation={navigation}
      withoutSubtitle>
      <>
        <View style={styles.linesContainer}>
          <Line sublabel="Height" label={height} />
          <Line sublabel="Hair Color" label={hair_color} />
          <Line sublabel="Eye Color" label={eye_color} />
          <Line sublabel="Skin Color" label={skin_color} />
          <Line sublabel="Birth year" label={birth_year} />
          <Line sublabel="Gender" label={gender} />
          <Line sublabel="Home World" label={homeworldName} />
          {species?.length > 0 && (
            <Line sublabel="Species" label={speciesName} />
          )}
        </View>

        <Button
          label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          isYellowBorder={!isFavourite}
          onPress={buttonPressed}
        />
      </>
    </Wrapper>
  );
};

export default HeroInfo;
