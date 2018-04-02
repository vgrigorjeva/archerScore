import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../../styles/items/buttons';
import { menuIcons } from '../../../styles/images';

const DoneButton = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={styles.underlayColor}
    style={styles.doneButton}
  >
    <Image source={menuIcons.done} />
  </TouchableHighlight>
);

DoneButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default DoneButton;
