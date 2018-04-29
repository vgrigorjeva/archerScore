import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { VictoryPie } from 'victory-native';


import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/statistics';
import Navbar from '../items/Navbar';
import I18n from '../../i18n/i18n';

export default class StatisticsScene extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={generalStyles.sceneContainer}>
        <Navbar
          title={I18n.t('statistics')}
          navigation={navigation}
          goBack={false}
        />
        <VictoryPie
          data={[
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 4 },
    { x: 'Birds', y: 55 },
  ]}
        />
      </View>
    );
  }
}

StatisticsScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
