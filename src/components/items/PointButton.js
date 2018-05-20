import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../styles/general';
import styles from '../../styles/items/buttons';

export default class PointButton extends Component {
  render() {
    const { onPress, number } = this.props;
    var color = 'black';
    var textColor = 'black';
    if (number === 1 || number === 2) {
      color = 'white';
    } else if (number === 3 || number === 4) {
      color = 'black';
      textColor = 'white';
    } else if (number === 5 || number === 6) {
      color = 'blue';
    } else if (number === 7 || number === 8) {
      color = 'red';
    } else if (number === 9 || number === 10) {
      color = 'yellow';
    }

    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.underlayColor}
        style={[styles.pointButton, { backgroundColor: color }]}
      >
        <Text style={{ color: textColor }}>{number}</Text>
      </TouchableHighlight>
    );
  }
}

PointButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
};
