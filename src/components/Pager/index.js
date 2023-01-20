import React from 'react';
import {TouchableOpacity, View, Text, Vibration} from 'react-native';

// libs
import {SvgXml} from 'react-native-svg';

// redux
import {useDispatch} from 'react-redux';
import {getPeopleThunk} from '../../redux/reducers';

// assets
import {ICONS} from '../../assets';

import styles from './styles';

const Pager = ({
  nextPage = null,
  previousPage = null,
  total = 82,
  number = 10,
}) => {
  const dispatch = useDispatch();

  const Button = ({forward = false}) => {
    const isDisabled = (forward && !nextPage) || (!forward && !previousPage);

    const onPress = () => {
      if (!isDisabled) {
        dispatch(getPeopleThunk(forward ? nextPage : previousPage));
      }
    };

    // go futher functions

    const goToStart = () => {
      dispatch(getPeopleThunk(1));
    };

    const goToEnd = () => {
      dispatch(getPeopleThunk(9));
    };

    const onLongPress = () => {
      Vibration.vibrate();
      forward ? goToEnd() : goToStart();
    };

    return (
      <View
        style={[
          styles.buttonContainer,
          {flexDirection: !forward ? 'row' : 'row-reverse'},
        ]}>
        <TouchableOpacity
          disabled={isDisabled}
          onLongPress={onLongPress}
          hitSlop={{left: 20, top: 15, right: 20, bottom: 30}}
          onPress={onPress}
          activeOpacity={0.6}
          style={{opacity: isDisabled ? 0.5 : 1}}>
          <SvgXml xml={forward ? ICONS.forwardArrow : ICONS.backArrow} />
        </TouchableOpacity>
        <Text style={styles.subtext}>{forward ? nextPage : previousPage}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Button />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {`${nextPage ? number * (nextPage - 1) : total} of ${total}`}
        </Text>
        <Text style={styles.subtitle}>viewed</Text>
      </View>
      <Button forward />
    </View>
  );
};

export default Pager;
