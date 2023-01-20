import {StyleSheet} from 'react-native';

// assets
import {COLORS, FONTS} from '../../assets';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.background,
    paddingTop: 25,
  },

  logoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    ...FONTS.title,
  },

  subtitle: {
    ...FONTS.subtitle,
  },

  body: {
    width: '100%',
    height: '75%',
    paddingBottom: 70,
  },
});
