import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import realmService from '../../services/realmService';
import styles from '../../styles/items/listItem';
import PointButton from './PointButton';


export default class SetListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: props.points,
      set: props.set,
    };
  }

  render() {
    const { points, set } = this.state;
    const setId = set.itemId;
    return (
      <View style={styles.itemContainer}>
        <View>
          <TouchableHighlight
            onLongPress={() => realmService.deleteSet({ setId })}
          >
          
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              {points.map(point => (
                <PointButton
                  number={point.value}
                  key={point}
                  onPress={() => console.warn(point.value)}
                />
            ))}
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

SetListItem.propTypes = {
  points: PropTypes.object.isRequired,
};

