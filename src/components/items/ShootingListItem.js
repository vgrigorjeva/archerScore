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

export default class ShootingListItem extends Component {
  constructor(props) {
    super(props);
    const { item } = this.props;
    this.state = {
      item,
    };
  }

  render() {
    const { item } = this.state;
    const { navigation, longPress, isTraining } = this.props;
    const date = moment(item.date).format('YYYY-MM-DD');
    const setsnumber = item.sets.length;
    const { arrowsPerSet } = item;
    return (
      <View style={styles.itemContainer}>
        <View>
          <TouchableHighlight
            onPress={() => (isTraining ? navigation.navigate('Training', {
              training: item,
            }) : navigation.navigate('Competition', {
              competition: item,
            }))}
            onLongPress={longPress}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.titleText}>
                  {item.name}
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

ShootingListItem.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  longPress: PropTypes.func.isRequired,
  isTraining: PropTypes.bool.isRequired,
};