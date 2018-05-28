import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

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
       <Text>COMMING SOON</Text>
      </View>
    );
  }
}

StatisticsScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
