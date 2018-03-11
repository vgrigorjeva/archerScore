import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/addArrows';
import Navbar from '../items/Navbar';
import AddButton from '../items/buttons/AddButton';
import NewArrowModal from '../modals/NewArrowModal';

@inject('arrowStore')
@observer
export default class ArrowsScene extends Component {

  render() {
    const { showAddArrowPopup } = this.props.arrowStore;
    return (
      <View style={generalStyles.sceneContainer}>
        <Navbar
          title={'MY ARROWS'}
          navigation={this.props.navigation}
        />
        <AddButton onPress={() => { this.props.arrowStore.setShowAddArrowPopup(true); }} />
        <Text>
          arrows
        </Text>
        {
          showAddArrowPopup && <NewArrowModal
            togglePopup={() => { this.props.arrowStore.setShowAddArrowPopup(false); }}
          />
        }
      </View>
    );
  }
}
