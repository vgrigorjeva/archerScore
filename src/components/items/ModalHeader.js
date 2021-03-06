import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles/items/modalHeader';
import DoneButton from '../items/buttons/DoneButton';
import BackButton from '../items/buttons/BackButton';

const ModalHeader = ({ title, onPress, onPressDone }) => (
  <View style={styles.container}>
    <BackButton onPress={onPress} />
    <Text style={styles.text}>{title}</Text>
    <DoneButton onPress={onPressDone} />
  </View>

);

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  onPressDone: PropTypes.func.isRequired,
};

export default ModalHeader;
