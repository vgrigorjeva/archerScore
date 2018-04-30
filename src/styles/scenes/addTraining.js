import { StyleSheet } from 'react-native';

import { colors, fonts } from '../general';

export default StyleSheet.create({
  separator: {
    backgroundColor: colors.yellow,
    height: 1,
  },
  activeTab: {
    color: colors.yellow,
  },
  container: {
    margin: 20,
  },
  countColor: {
    color: colors.white,
  },
  inactiveTab: {
    color: colors.white,
  },
  tabBarHeader: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  tabsRow: {
    marginRight: 20,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
