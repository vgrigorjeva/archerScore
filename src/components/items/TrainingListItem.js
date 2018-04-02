import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import realmService from '../../services/realmService';
import styles from '../../styles/items/trainingListItem';

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
      <View style={{ height: 50, backgroundColor: '#115511', justifyContent: 'center' }}>
        <View>
          <TouchableHighlight
            onPress={() => navigation.navigate('Training', {
              training,
            })}
            onLongPress={() => realmService.deleteTraining(trainingId)}
          >
            <View>
              <Text style={{ fontSize: 24, color: 'white' }}>
                {training.name}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

TrainingListItem.propTypes = {
  training: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
