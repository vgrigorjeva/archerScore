import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../../styles/general';
import styles from '../../../styles/items/buttons';
import { menuIcons } from '../../../styles/images';

const AddButton = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={colors.underlayColor}
    style={styles.addButton}
  >
    <Image source={menuIcons.addBlack} />
  </TouchableHighlight>
);

AddButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default AddButton;
