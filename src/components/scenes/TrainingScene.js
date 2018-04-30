import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/addTraining';
import NavBar from '../items/Navbar';
import PointButton from '../items/PointButton';
import realmService from '../../services/realmService';
import SetListItem from '../items/SetListItem';

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
          totalCountOfArrows: this.state.totalCountOfArrows += point.value
        });
      });
    });
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <SetListItem
        navigation={navigation}
        points={item.points}
        set={item}
      />
    );
  };

  render() {
    const { navigation } = this.props;
    const { training } = navigation.state.params;
    const { amountOfShots, totalCountOfArrows } = this.state;
    const average = totalCountOfArrows / amountOfShots;
    return (
      <View style={generalStyles.sceneContainer}>
        <NavBar
          title={training.name}
          navigation={navigation}
          goBack
        />
        <View style={{ flexDirection: 'row' }}>
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
        </View>
        <Text>{this.state.total}</Text>
        <Text>{this.state.amountOfShots}</Text>
        <Text>{this.state.totalCountOfArrows}</Text>
        <Text>Average: {average}</Text>
        <FlatList
          data={training.sets}
          keyExtractor={item => item.itemId}
          renderItem={this.renderItem}
          key={item => item.itemId}
        />
      </View>
    );
  }
}

TrainingScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
