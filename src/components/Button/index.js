import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

// assets
import {COLORS} from '../../assets';

import styles from './styles';

const Button = ({
  label = 'Button',
  onPress = () => {},
  isYellowBorder = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, isYellowBorder && {borderColor: COLORS.main}]}
      onPress={onPress}
      activeOpacity={0.6}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
