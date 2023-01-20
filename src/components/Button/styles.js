import {StyleSheet} from 'react-native';

// assets
import {COLORS, FONTS} from '../../assets';

export default StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.text,

    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    ...FONTS.label,
    textTransform: 'uppercase',
  },
});
