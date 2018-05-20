import { StyleSheet } from 'react-native';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  blackInactive: '#0f0f0f',
  yellow: '#ffff00',
  red: '#ff0000',
  blue: '#0004ff',
  greyBackground: '#efefef',
  underlayColor: 'rgba(0,0,0,0)',
  listItemBackground: '#6d6d6d',
  grey: '#727272',
  granitGray: '#2f353b',
  workoutMarked: '#C63085',
};

export const fonts = {
  main: 'ArchitectsDaughter-Regular',
};

export default StyleSheet.create({
  sceneContainer: {
    flex: 1,
    backgroundColor: colors.greyBackground,
  },
});
