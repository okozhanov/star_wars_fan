import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// libs
import {SvgXml} from 'react-native-svg';

// assets
import {ICONS} from '../../assets';

import styles from './styles';

const Wrapper = ({
  children,
  paddingHorizontal = '5%',
  paddingTop = 30,
  withBackButton = false,
  navigation = null,
  title = 'Heroes',
  withoutSubtitle = false,
  subtitle = 'Choose your own',
}) => {
  return (
    <View style={[styles.container, {paddingHorizontal}]}>
      <View style={styles.logoContainer}>
        <TouchableOpacity
          hitSlop={{left: 15, top: 25, right: 50, bottom: 15}}
          disabled={!navigation || !withBackButton}
          onPress={() => {
            navigation?.goBack();
          }}>
          {withBackButton && <SvgXml xml={ICONS.backArrow} />}
        </TouchableOpacity>
        <SvgXml xml={ICONS.logo} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        {!withoutSubtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <View style={[styles.body, {paddingTop}]}>{children}</View>
    </View>
  );
};

export default Wrapper;
