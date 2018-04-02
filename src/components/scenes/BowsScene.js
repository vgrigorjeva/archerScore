import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/addBows';
import Navbar from '../items/Navbar';
import AddButton from '../items/buttons/AddButton';
import NewBowModal from '../modals/NewBowModal';

@inject('bowStore')
@observer
export default class BowsScene extends Component {
  render() {
    const { bowStore, navigation } = this.props;
    const { showAddBowPopup } = bowStore;
    return (
      <View style={generalStyles.sceneContainer}>
        <Navbar
          title="MY BOWS"
          navigation={navigation}
        />
      
        <Text>
          bows
        </Text>
        {
          showAddBowPopup && <NewBowModal
            togglePopup={() => { bowStore.setShowAddBowPopup(false); }}
            navigation={this.props.navigation}
          />
        }
        <AddButton onPress={() => { bowStore.setShowAddBowPopup(true); }} />
      </View>
    );
  }
}

BowsScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
