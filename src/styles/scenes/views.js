import { StyleSheet } from 'react-native';

import { colors, fonts } from '../general';

export default StyleSheet.create({
  listView: {
    marginTop: 5,
  },
  viewContainer: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  labelText: {
    fontFamily: fonts.main,
    fontSize: 16,
  },
  dataText: {
    fontFamily: fonts.main,
    fontSize: 20,
    color: colors.black,
    marginBottom: 10,
  },
});
