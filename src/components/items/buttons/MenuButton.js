import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../../styles/items/buttons';
import { menuIcons } from '../../../styles/images';

export default class MenuButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={styles.underlayColor}
        style={styles.menuButton}
      >
        <Image source={menuIcons.menu} />
      </TouchableHighlight>
    );
  }
}

MenuButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};
