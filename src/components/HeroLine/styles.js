import {StyleSheet} from 'react-native';

// assets
import {FONTS, COLORS} from '../../assets';

export default StyleSheet.create({
  lineContainer: {
    width: '100%',
    height: 80,

    flexDirection: 'row',
    borderBottomColor: COLORS.main,
    borderBottomWidth: 1,
  },

  line: {
    height: '100%',
    width: '75%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    ...FONTS.label,
  },

  addFavouriteContainer: {
    height: '100%',
    width: '25%',

    justifyContent: 'center',
    alignItems: 'center',
  },
});
