import {StyleSheet} from 'react-native';

// assets
import {FONTS} from '../../assets';

export default StyleSheet.create({
  linesContainer: {
    width: '100%',
  },

  line: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },

  subcontainer: {
    height: '100%',
    alignItems: 'center',
  },

  sublabel: {
    ...FONTS.sublabel,
  },

  label: {
    ...FONTS.label,
  },
});
