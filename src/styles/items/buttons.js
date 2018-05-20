import { StyleSheet } from 'react-native';
import { fonts } from '../general';

export default StyleSheet.create({
  menuButton: {
    position: 'absolute',
    left: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  doneButton: {
    position: 'absolute',
    right: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  pointButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointButtonText: {
    fontFamily: fonts.main,
  },
});
