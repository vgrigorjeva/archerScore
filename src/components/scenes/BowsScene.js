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
    const { showAddBowPopup } = this.props.bowStore;
    return (
      <View style={generalStyles.sceneContainer}>
        <Navbar
          title="MY BOWS"
          navigation={this.props.navigation}
        />
        <AddButton onPress={() => { this.props.bowStore.setShowAddBowPopup(true); }} />
        <Text>
          bows
        </Text>
        {
          showAddBowPopup && <NewBowModal
            togglePopup={() => { this.props.bowStore.setShowAddBowPopup(false); }}
          />
        }
      </View>
    );
  }
}

BowsScene.propTypes = {
  bowStore: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
