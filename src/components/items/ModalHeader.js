import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles/items/modalHeader';
import DoneButton from '../items/buttons/DoneButton';
import BackButton from '../items/buttons/BackButton';

export default class ModalHeader extends Component {
  render() {
    const { title, onPress, onPressDone } = this.props;
    return (
      <View style={styles.container}>
        <BackButton onPress={onPress} />
        <Text style={styles.text}>{title}</Text>
        <DoneButton onPress={onPressDone} />
      </View>
    );
  }
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  onPressDone: PropTypes.func.isRequired,
};
