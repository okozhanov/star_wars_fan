import {StyleSheet} from 'react-native';

// assets
import {FONTS} from '../../assets';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 80,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 40,
  },

  text: {
    ...FONTS.label,
  },

  subtext: {
    ...FONTS.sublabel,
  },

  textContainer: {
    alignItems: 'center',
  },

  subtitle: {
    ...FONTS.subtitle,
  },
});
