import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../styles/general';
import styles from '../../styles/items/buttons';

const PointButton = ({ onPress, number }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={colors.underlayColor}
    style={styles.pointButton}
  >
    <Text>{number}</Text>
  </TouchableHighlight>
);

PointButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
};

export default PointButton;
