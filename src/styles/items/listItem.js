import { StyleSheet } from 'react-native';

import { colors, fonts } from '../general';

export default StyleSheet.create({
  titleText: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fonts.main,
  },
  itemContainer: {
    height: 60,
    backgroundColor: colors.granitGray,
    justifyContent: 'center',
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  dateText: {
    fontSize: 16,
    color: colors.grey,
    fontFamily: fonts.main,
  },
});
