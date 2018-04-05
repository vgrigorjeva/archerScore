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
    backgroundColor: colors.listItemBackground,
    justifyContent: 'center',
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 3,
    paddingLeft: 2,
    paddingRight: 2,
    elevation: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.listItemBackground,
  },
});
