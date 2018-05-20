import { StyleSheet } from 'react-native';

import { colors, fonts } from '../general';

export default StyleSheet.create({
  separator: {
    backgroundColor: colors.yellow,
    height: 1,
  },
  activeTab: {
    color: colors.yellow,
    fontSize: 24,
    fontFamily: fonts.main,
  },
  container: {
    margin: 20,
  },
  countColor: {
    color: colors.white,
  },
  inactiveTab: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.main,
  },
  tabBarHeader: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    height: 40,
    justifyContent: 'center',
  },
  tabsRow: {
    marginRight: 20,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: colors.white,
    fontFamily: fonts.main,
  },
  viewsContainer: {
    backgroundColor: colors.black,
    flex: 1,
  },
  viewMargin: {
    marginTop: 5,
  },
});
