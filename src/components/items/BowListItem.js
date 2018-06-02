import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../styles/general';
import styles from '../../styles/items/listItem';

export default class BowListItem extends Component {
  render() {
    const { item, navigation, longPress } = this.props;
    return (
      <View style={styles.itemContainer}>
        <TouchableHighlight
          onPress={() => navigation.navigate(
'Bow',
          { bow: item },
)}
          onLongPress={longPress}
          underlayColor={colors.underlayColor}
        >
          <View style={styles.shootingListItemInfo}>
            <View style={styles.infoColumn}>
              <Text style={styles.titleText}>
                {item.name}
              </Text>
              <Text style={styles.dateText}>{item.bowType}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

BowListItem.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  longPress: PropTypes.func.isRequired,
};

