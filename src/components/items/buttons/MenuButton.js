import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../../styles/items/buttons';
import { menuIcons } from '../../../styles/images';

const MenuButton = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={styles.underlayColor}
    style={styles.menuButton}
  >
    <Image source={menuIcons.menu} />
  </TouchableHighlight>
);

MenuButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default MenuButton;
