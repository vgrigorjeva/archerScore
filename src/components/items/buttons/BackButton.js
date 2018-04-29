import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../../styles/items/buttons';
import { menuIcons } from '../../../styles/images';

const BackButton = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={styles.underlayColor}
    style={styles.backButton}
  >
    <Image source={menuIcons.backArrow} />
  </TouchableHighlight>
);

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
