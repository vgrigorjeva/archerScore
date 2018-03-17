import React, { Component } from 'react';
import { View, Text } from 'react-native';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/statistics';
import Navbar from '../items/Navbar';

export default class StatisticsScene extends Component {
  render() {
    return (
      <View style={generalStyles.sceneContainer}>
        <Navbar
          title={'STATISTICS'}
          navigation={this.props.navigation}
        />
        <Text>
          stats
        </Text>
      </View>
    );
  }
}
