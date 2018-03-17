import { StyleSheet } from 'react-native';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  yellow: '#ffff00',
  red: '#ff0000',
  blue: '#0004ff',
  greyBackground: '#efefef',
  underlayColor: 'rgba(0,0,0,0)',
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
