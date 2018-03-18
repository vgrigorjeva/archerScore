import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../../styles/items/buttons';
import { menuIcons } from '../../../styles/images';

export default class BackButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={styles.underlayColor}
        style={styles.backButton}
      >
        <Image source={menuIcons.backArrow} />
      </TouchableHighlight>
    );
  }
}

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};
