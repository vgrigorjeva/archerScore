import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from '../../styles/items/listItem';
import I18n from '../../i18n/i18n';

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
    const date = moment(training.date).format('YYYY-MM-DD');
    const setsnumber = training.sets.length;
    const { arrowsPerSet } = training;
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
                <Text style={styles.dateText}>{setsnumber} {I18n.t('sets')} x {arrowsPerSet} {I18n.t('arrows')}</Text>
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
  longPress: PropTypes.func.isRequired,
};
