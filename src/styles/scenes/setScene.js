import { StyleSheet } from 'react-native';

import { colors, fonts } from '../general';

export default StyleSheet.create({
  pointButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5,
  },
  totalText: {
    fontFamily: fonts.main,
    fontSize: 28,
  },
  totalTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  setPoints: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
