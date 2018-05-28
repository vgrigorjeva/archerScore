import { StyleSheet } from 'react-native';
import { fonts, colors } from '../general';

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
  pointButtonSmall: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointButtonLarge: {
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointButtonTextSmall: {
    fontFamily: fonts.main,
    fontSize: 16,
  },
  pointButtonTextLarge: {
    fontFamily: fonts.main,
    fontSize: 24,
  },
  nextButton: {
    backgroundColor: colors.save,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    fontFamily: fonts.main,
    fontSize: 20,
  },
});
