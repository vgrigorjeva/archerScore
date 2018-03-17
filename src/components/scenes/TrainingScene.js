import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/addTraining';
import AddButton from '../items/buttons/AddButton';
import NewTrainingModal from '../modals/NewTrainingModal';

@inject('trainingStore')
@observer
export default class TrainingScene extends Component {
  render() {
    const { showAddTrainingPopup } = this.props.trainingStore;
    return (
      <View style={generalStyles.sceneContainer}>
      <AddButton onPress={() => { this.props.trainingStore.setShowAddTrainingPopup(true); }} />
        <Text>
          training
        </Text>
        {
          showAddTrainingPopup && <NewTrainingModal
            togglePopup={() => { this.props.trainingStore.setShowAddTrainingPopup(false); }}
          />
        }
      </View>
    );
  }
}
