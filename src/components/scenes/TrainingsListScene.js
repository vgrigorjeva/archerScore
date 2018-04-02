import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/addTraining';
import AddButton from '../items/buttons/AddButton';
import NewTrainingModal from '../modals/NewTrainingModal';
import RealmService from '../../services/realmService';
import NavBar from '../items/Navbar';

// import TrainingListItem from '../items/trainingListItem';

@inject('trainingStore')
@observer
export default class TrainingsListScene extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      trainings: [],
    };
  }

  componentWillMount() {
    RealmService.getRealm()
      .then(() => {
        const trainings = RealmService.getTrainings();
        trainings.addListener(this.onChange);
        this.setState({
          trainings,
        });
      });
  }

  onChange() {
    RealmService.getRealm()
      .then(() => {
        this.setState({
          trainings: RealmService.getTrainings(),
        });
      });
  }

  renderItem = ({ item }) => (
    <Text>{item.name}</Text>
    /*  <TrainingListItem
      training={item}
    /> */
  );

  render() {
    const { trainings } = this.state;
    const { trainingStore, navigation } = this.props;
    const { showAddTrainingPopup } = trainingStore;
    return (
      <View style={generalStyles.sceneContainer}>
        <NavBar
          title="MY TRAININGS"
          navigation={navigation}
        />
        <FlatList
          data={trainings}
          keyExtractor={item => item.itemId}
          renderItem={this.renderItem}
        />
        {
          showAddTrainingPopup && <NewTrainingModal
            navigation={this.props.navigation}
            togglePopup={() => { trainingStore.setShowAddTrainingPopup(false); }}
          />
        }
        <AddButton
          onPress={() => { trainingStore.setShowAddTrainingPopup(true); }}
        />
      </View>
    );
  }
}

TrainingsListScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
