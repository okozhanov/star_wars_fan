import COLORS from '../colors';

const FONTS = {
  // titles gonna be single per page

  title: {
    color: COLORS.text,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },

  subtitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '200',
    fontStyle: 'italic',
  },

  // labels gonna be plural per page

  label: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },

  sublabel: {
    color: COLORS.main,
    fontSize: 18,
    fontWeight: '300',
  },
};

export default FONTS;
