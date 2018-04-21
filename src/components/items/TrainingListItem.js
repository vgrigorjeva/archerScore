import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from '../../styles/items/listItem';

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
    const { navigation, longPress } = this.props;
    const trainingId = training.itemId;
    const date = moment(training.date).format('YYYY-MM-DD');
    const setsnumber = training.sets.length;
    const arrowsPerSet = training.arrowsPerSet;
    return (
      <View style={styles.itemContainer}>
        <View>
          <TouchableHighlight
            onPress={() => navigation.navigate('Training', {
              training,
            })}
            onLongPress={longPress}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.titleText}>
                  {training.name}
                </Text>
                <Text style={styles.dateText}>{date}</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.dateText}>{setsnumber} sets x {arrowsPerSet} arrows</Text>
              </View>
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
