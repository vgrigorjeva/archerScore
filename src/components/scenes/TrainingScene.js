import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/addTraining';
import NavBar from '../items/Navbar';
import PointButton from '../items/PointButton';
import realmService from '../../services/realmService';
import SetListItem from '../items/SetListItem';
import SingleListView from '../items/views/SingleListView';
import SingleStatsView from '../items/views/SingleStatsView';
import SingleInfoView from '../items/views/SingleInfoView';

let tempArray = [];

export default class TrainingScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      pointsPerCurrentSet: [],
      sets: [],
      amountOfShots: 0,
      totalCountOfArrows: 0,
      index: 1,
    };
  }

  componentWillMount() {
    this.count();
  }

  addSet() {
    const { navigation } = this.props;
    const { training } = navigation.state.params;
    const trainingId = training.itemId;
    const { pointsPerCurrentSet } = this.state;
    realmService.addTrainingSet({ trainingId, pointsPerCurrentSet });
    tempArray = [];
    this.setState({
      sets: this.state.sets + 1,
      total: 0,
      amountOfShots: 0,
      totalCountOfArrows: 0,
    }, () => this.count());
  }

  updateTotal(number) {
    const prevTotal = this.state.total;
    tempArray.push({ value: number });
    this.setState({
      total: prevTotal + number,
      pointsPerCurrentSet: tempArray,
    });
  }

  count() {
    const { navigation } = this.props;
    const { training: { sets } } = navigation.state.params;
    sets.forEach((set) => {
      set.points.forEach((point) => {
        this.setState({
          amountOfShots: this.state.amountOfShots += 1,
          totalCountOfArrows: this.state.totalCountOfArrows += point.value,
        });
      });
    });
  }

  render() {
    const { navigation } = this.props;
    const { training } = navigation.state.params;
    const {
      amountOfShots, totalCountOfArrows, total, index,
    } = this.state;
    const average = totalCountOfArrows / amountOfShots;
    return (
      <View style={generalStyles.sceneContainer}>
        <NavBar
          title={training.name}
          navigation={navigation}
          goBack
        />
        <View style={{ backgroundColor: 'black', flex: 1 }}>
          <Text style={{ color: 'white' }}>{total}</Text>
          <Text style={{ color: 'white' }}>Total arrows: {amountOfShots}</Text>
          <Text style={{ color: 'white' }}>Total point: {totalCountOfArrows}</Text>
          <Text style={{ color: 'white' }}>Average: {average}</Text>
          <View style={styles.tabBarHeader}>
            <View style={styles.tabsRow}>
              <TouchableHighlight onPress={() => this.setState({ index: 1 })}>
                <View>
                  <Text style={index === 1 ? styles.activeTab : styles.inactiveTab}>List</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.setState({ index: 2 })}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={index === 2 ? styles.activeTab : styles.inactiveTab}>Stats</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.setState({ index: 3 })}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={index === 3 ? styles.activeTab : styles.inactiveTab}>Info</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <ScrollView>
            {index === 1 && <SingleListView training={training} />}
            {index === 2 && <SingleStatsView />}
            {index === 3 && <SingleInfoView />}
          </ScrollView>
        </View>
        {/*         <View style={{ flexDirection: 'row' }}>
          <PointButton
            onPress={() => this.updateTotal(1)}
            number={1}
          />
          <PointButton
            onPress={() => this.updateTotal(2)}
            number={2}
          />
          <PointButton
            onPress={() => this.updateTotal(3)}
            number={3}
          />
          <PointButton
            onPress={() => this.updateTotal(4)}
            number={4}
          />
          <PointButton
            onPress={() => this.updateTotal(5)}
            number={5}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <PointButton
            onPress={() => this.updateTotal(6)}
            number={6}
          />
          <PointButton
            onPress={() => this.updateTotal(7)}
            number={7}
          />
          <PointButton
            onPress={() => this.updateTotal(8)}
            number={8}
          />
          <PointButton
            onPress={() => this.updateTotal(9)}
            number={9}
          />
          <PointButton
            onPress={() => this.addSet()}
            number={10}
          />
        </View */}

      </View>
    );
  }
}

TrainingScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
