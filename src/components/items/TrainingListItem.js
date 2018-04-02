import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import realmService from '../../services/realmService';

export default class TrainingListItem extends Component {
  constructor(props) {
    super(props);
    const { training } = this.props;
    this.state = {
      training,
    };
  }

  render() {
    const { training } = this.state;
    const { navigation } = this.props;
    const trainingId = training.itemId;
    return (
      <View>
        <TouchableHighlight
          onPress={() => navigation.navigate('Training', {
            training,
          })}
          onLongPress={() => realmService.deleteTraining({ trainingId })}
        >
          <Text>{training.name}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TrainingListItem.propTypes = {
  training: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
