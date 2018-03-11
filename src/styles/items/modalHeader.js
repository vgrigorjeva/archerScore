import { StyleSheet } from 'react-native';

import { colors, fonts } from '../general';

export default StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontFamily: fonts.main,
    fontSize: 22,
  },
});
