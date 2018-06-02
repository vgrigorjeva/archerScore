import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../styles/general';
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
    const { onLongPress } = this.props;
    const { points, set } = this.state;
    const setId = set.itemId;
    return (
      <View style={styles.itemContainer}>
        <View>
          <TouchableHighlight
            onLongPress={onLongPress}
            underlayColor={colors.underlayColor}
          >
            <View style={styles.buttonsRow}>
              {points.map(point => (
                <PointButton
                  number={point.value}
                  key={point}
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
  set: PropTypes.object.isRequired,
  onLongPress: PropTypes.func.isRequired,
};

