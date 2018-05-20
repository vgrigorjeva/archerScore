import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../general';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: width * 0.5,
  },
  menuHeaderImage: {
    width: '50%',
  },
  menuHeaderText: {
    color: colors.white,
    fontFamily: 'ArchitectsDaughter-Regular',
  },
  menuItem: {
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 15,
    paddingLeft: 20,
  },
  menuItemText: {
    fontSize: 24,
    color: '#ffffff',
    fontFamily: 'ArchitectsDaughter-Regular',
  },
  separator: {
    backgroundColor: '#ffff00',
    height: 1,
    marginLeft: 20,
    marginRight: 20,
  },
});
