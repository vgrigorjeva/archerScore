import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/addCompetition';
import AddButton from '../items/buttons/AddButton';
import NewCompetitionModal from '../modals/NewCompetitionModal';
import NavBar from '../items/Navbar';
import RealmService from '../../services/realmService';
import TrainingListItem from '../items/TrainingListItem';
import I18n from '../../i18n/i18n';

@inject('competitionStore')
@observer
export default class CompetitionsListScene extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      competitions: [],
    };
  }

  componentWillMount() {
    const competitions = RealmService.getCompetitions();
    competitions.addListener(this.onChange);
    this.setState({
      competitions,
    });
  }

  onChange() {
    this.setState({
      competitions: RealmService.getCompetitions(),
    });
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <TrainingListItem
        training={item}
        navigation={navigation}
      />
    );
  };

  render() {
    const { competitions } = this.state;
    const { competitionStore, navigation } = this.props;
    const { showAddCompetitionPopup } = competitionStore;
    return (
      <View style={generalStyles.sceneContainer}>
        <NavBar
          title={I18n.t('myCompetitions')}
          navigation={navigation}
          goBack={false}
        />
        <View style={{ marginTop: 5 }}>
          <FlatList
            data={competitions}
            keyExtractor={item => item.itemId}
            renderItem={this.renderItem}
          />
        </View>

        {
          showAddCompetitionPopup && <NewCompetitionModal
            togglePopup={() => { competitionStore.setShowAddCompetitionPopup(false); }}
          />
        }
        <AddButton
          onPress={() => { competitionStore.setShowAddCompetitionPopup(true); }}
        />
      </View>
    );
  }
}

CompetitionsListScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
