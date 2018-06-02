import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles/items/listItem';

export default class ArrowListItem extends Component {
  render() {
    const { item, navigation } = this.props;
    return (
      <View style={styles.itemContainer}>
        <TouchableHighlight
          onPress={() => navigation.navigate(
'Arrow',
          { arrow: item },
)}
        >
          <View style={styles.shootingListItemInfo}>
            <View style={styles.infoColumn}>
              <Text style={styles.titleText}>
                {item.name}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

ArrowListItem.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

