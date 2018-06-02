import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/listScene';
import Navbar from '../items/Navbar';
import RealmService from '../../services/realmService';
import AddButton from '../items/buttons/AddButton';
import NewArrowModal from '../modals/NewArrowModal';
import I18n from '../../i18n/i18n';
import ArrowListItem from '../items/ArrowListItem';

let arrows = [];

@inject('arrowStore')
@observer
export default class ArrowsScene extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      arrows: [],
    };
  }

  componentWillMount() {
    arrows = RealmService.getBows();
    arrows.addListener(this.onChange);
    this.setState({
      arrows,
    });
  }

  componentWillUnmount() {
    arrows.removeAllListeners();
  }

  onChange() {
    this.setState({
      arrows: RealmService.getArrows(),
    });
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    const arrowId = item.itemId;
    return (
      <ArrowListItem
        item={item}
        navigation={navigation}
       // longPress={() => RealmService.deleteCompetition({ competitionId })}
        isTraining={false}
      />
    );
  };

  render() {
    const { arrowStore, navigation } = this.props;
    const { showAddArrowPopup } = arrowStore;
    const { arrows } = this.state;

    return (
      <View style={generalStyles.sceneContainer}>
        <Navbar
          title={I18n.t('myArrows')}
          navigation={navigation}
          goBack={false}
        />
        {arrows.length < 1 &&
        <Text>
          {I18n.t('noArrows')}
        </Text>}
        <View style={styles.viewMargin}>
          <FlatList
            data={arrows}
            keyExtractor={item => item.itemId}
            renderItem={this.renderItem}
          />
        </View>

        <AddButton onPress={() => { arrowStore.setShowAddArrowPopup(true); }} />
        {
          showAddArrowPopup && <NewArrowModal
            togglePopup={() => { arrowStore.setShowAddArrowPopup(false); }}
          />
        }
      </View>
    );
  }
}

ArrowsScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
