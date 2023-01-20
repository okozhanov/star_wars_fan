import {StyleSheet, Dimensions} from 'react-native';

// assets
import {FONTS} from '../../assets';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  oopsContsainer: {
    width: '100%',
    height: 150,

    justifyContent: 'center',
    alignItems: 'center',
  },

  oopsText: {
    ...FONTS.subtitle,
  },

  counterContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
  },

  buttonContainer: {
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
  },
});
