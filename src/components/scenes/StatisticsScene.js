import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/statistics';
import Navbar from '../items/Navbar';

export default class StatisticsScene extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={generalStyles.sceneContainer}>
        <Navbar
          title="STATISTICS"
          navigation={navigation}
        />
        <Text>
          stats
        </Text>
      </View>
    );
  }
}

StatisticsScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
