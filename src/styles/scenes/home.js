import { StyleSheet } from 'react-native';

import { colors, fonts } from '../general';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: colors.black,
  },
  indicator: {
    backgroundColor: colors.yellow,
  },
  label: {
    color: colors.white,
    fontFamily: fonts.main,
    fontSize: 22,
  },
});
