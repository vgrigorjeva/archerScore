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
    backgroundColor: colors.black,
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
    fontSize: 16,
  },
  viewsContainer: {
    flex: 1,
  },
  viewMargin: {
    marginTop: 5,
  },
  pointsHeader: {
    backgroundColor: colors.black,
  },
  noEquipment: {
    color: colors.black,
    fontSize: 30,
    fontFamily: fonts.main,
  },
});
