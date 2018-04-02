import React, { Component } from 'react';
import { View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/addTraining';
import NavBar from '../items/Navbar';

// import TrainingListItem from '../items/trainingListItem';

@inject('trainingStore')
@observer
export default class TrainingScene extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={generalStyles.sceneContainer}>
        <NavBar
          title="this training"
          navigation={navigation}
        />
      </View>
    );
  }
}

TrainingScene.propTypes = {
};
