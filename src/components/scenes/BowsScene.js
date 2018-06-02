import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/listScene';
import Navbar from '../items/Navbar';
import RealmService from '../../services/realmService';
import AddButton from '../items/buttons/AddButton';
import NewBowModal from '../modals/NewBowModal';
import I18n from '../../i18n/i18n';
import BowListItem from '../items/BowListItem';

let bows = [];

@inject('bowStore')
@observer
export default class BowsScene extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      bows: [],
    };
  }

  componentWillMount() {
    bows = RealmService.getBows();
    bows.addListener(this.onChange);
    this.setState({
      bows,
    });
  }

  componentWillUnmount() {
    bows.removeAllListeners();
  }

  onChange() {
    this.setState({
      bows: RealmService.getBows(),
    });
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    const bowId = item.itemId;
    return (
      <BowListItem
        item={item}
        navigation={navigation}
       // longPress={() => RealmService.deleteCompetition({ competitionId })}
        isTraining={false}
      />
    );
  };

  render() {
    const { bowStore, navigation } = this.props;
    const { showAddBowPopup } = bowStore;
    const { bows } = this.state;
    return (
      <View style={generalStyles.sceneContainer}>
        <Navbar
          title={I18n.t('myBows')}
          navigation={navigation}
          goBack={false}
        />
        {bows.length < 1 &&
        <Text>
          {I18n.t('noBows')}
        </Text>}
        <View style={styles.viewMargin}>
          <FlatList
            data={bows}
            keyExtractor={item => item.itemId}
            renderItem={this.renderItem}
          />
        </View>

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
