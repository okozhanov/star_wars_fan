import {StyleSheet} from 'react-native';

// assets
import {COLORS, FONTS} from '../../assets';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
  },

  sublabelContainer: {
    height: '39%',
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  labelContainer: {
    height: '60%',
    width: '100%',
    paddingHorizontal: 15,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  label: {
    ...FONTS.label,
  },

  sublabel: {
    ...FONTS.sublabel,
  },

  line: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.main,
  },
});
