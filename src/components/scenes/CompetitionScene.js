import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/addCompetition';
import AddButton from '../items/buttons/AddButton';
import NewCompetitionModal from '../modals/NewCompetitionModal';

@inject('competitionStore')
@observer
export default class CompetitionScene extends Component {
  render() {
    const { competitionStore } = this.props;
    const { showAddCompetitionPopup } = competitionStore;
    return (
      <View style={generalStyles.sceneContainer}>
        <AddButton
          onPress={() => { competitionStore.setShowAddCompetitionPopup(true); }}
        />
        <Text>
          competition
        </Text>
        {
          showAddCompetitionPopup && <NewCompetitionModal
            togglePopup={() => { competitionStore.setShowAddCompetitionPopup(false); }}
          />
        }
      </View>
    );
  }
}

CompetitionScene.propTypes = {
};
