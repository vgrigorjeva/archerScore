import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import SetListItem from '../SetListItem';
import realmService from '../../../services/realmService';

export default class SingleListView extends Component {
    renderItem = ({ item }) => {
      const { navigation } = this.props;
      const setId = item.itemId;
      return (
        <SetListItem
          navigation={navigation}
          points={item.points}
          set={item}
          onLongPress={() => realmService.deleteSet({ setId })}
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
