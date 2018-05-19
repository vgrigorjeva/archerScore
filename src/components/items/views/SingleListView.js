import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import SetListItem from '../SetListItem';

export default class SingleListView extends Component {
    renderItem = ({ item }) => {
      const { navigation } = this.props;
      return (
        <SetListItem
          navigation={navigation}
          points={item.points}
          set={item}
        />
      );
    };

    render() {
      const { training } = this.props;
      return (
        <View>
          <FlatList
            data={training.sets}
            keyExtractor={item => item.itemId}
            renderItem={this.renderItem}
            key={item => item.itemId}
          />
        </View>
      );
    }
}

SingleListView.propTypes = {
  training: PropTypes.object.isRequired,
};
