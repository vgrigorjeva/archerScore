import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/addTraining';
import NavBar from '../items/Navbar';

// import TrainingListItem from '../items/trainingListItem';

@inject('trainingStore')
@observer
export default class TrainingScene extends Component {
  render() {
    const { navigation } = this.props;
    const { training } = navigation.state.params;
    return (
      <View style={generalStyles.sceneContainer}>
        <NavBar
          title={training.name}
          navigation={navigation}
          goBack
        />
        <Text>
          {training.name}
        </Text>
      </View>
    );
  }
}

TrainingScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
