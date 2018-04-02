import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/addCompetition';
import AddButton from '../items/buttons/AddButton';
import NewCompetitionModal from '../modals/NewCompetitionModal';
import NavBar from '../items/Navbar';

@inject('competitionStore')
@observer
export default class CompetitionsListScene extends Component {
  render() {
    const { competitionStore, navigation } = this.props;
    const { showAddCompetitionPopup } = competitionStore;
    return (
      <View style={generalStyles.sceneContainer}>
        <NavBar
          title="MY COMPETITIONS"
          navigation={navigation}
          goBack={false}
        />
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

CompetitionsListScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
