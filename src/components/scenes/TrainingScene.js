import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import generalStyles, { colors } from '../../styles/general';
import styles from '../../styles/scenes/listScene';
import NavBar from '../items/Navbar';
import realmService from '../../services/realmService';
import SingleListView from '../items/views/SingleListView';
import SingleStatsView from '../items/views/SingleStatsView';
import SingleInfoView from '../items/views/SingleInfoView';
import I18n from '../../i18n/i18n';
import AddButton from '../items/buttons/AddButton';

let tempArray = [];
let pointsArray = [];

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
      pointsArray: [],
    };
    this.addSet = this.addSet.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
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
    pointsArray = [];
    sets.forEach((set) => {
      set.points.forEach((point) => {
        pointsArray.push(point.value);
        this.setState({
          amountOfShots: this.state.amountOfShots += 1,
          totalCountOfArrows: this.state.totalCountOfArrows += point.value,
          pointsArray,
        });
      });
    });
  }

  render() {
    const { navigation } = this.props;
    const { training } = navigation.state.params;
    const {
      amountOfShots, totalCountOfArrows, total, index, pointsArray,
    } = this.state;
    let average = totalCountOfArrows / amountOfShots;
    if (amountOfShots === 0) {
      average = 0;
    }
    const roundedAverage = Math.round(average * 100) / 100;
    return (
      <View style={generalStyles.sceneContainer}>
        <NavBar
          title={training.name}
          navigation={navigation}
          goBack
        />
        <View style={styles.viewsContainer}>
          <View style={styles.pointsHeader}>
            <Text style={styles.headerText}>{I18n.t('totalArrows')}: {amountOfShots}</Text>
            <Text style={styles.headerText}>{I18n.t('totalPoints')}: {totalCountOfArrows}</Text>
            <Text style={styles.headerText}>{I18n.t('average')}: {roundedAverage}</Text>
          </View>
          <View style={styles.tabBarHeader}>
            <View style={styles.tabsRow}>
              <TouchableHighlight
                onPress={() => this.setState({ index: 1 })}
                underlayColor={colors.underlayColor}
              >
                <View>
                  <Text style={index === 1 ? styles.activeTab : styles.inactiveTab}>{I18n.t('list')}</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.setState({ index: 2 })}
                underlayColor={colors.underlayColor}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text style={index === 2 ? styles.activeTab : styles.inactiveTab}>{I18n.t('stats')}</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.setState({ index: 3 })}
                underlayColor={colors.underlayColor}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text style={index === 3 ? styles.activeTab : styles.inactiveTab}>{I18n.t('info')}</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <ScrollView>
            {index === 1 && <SingleListView training={training} />}
            {index === 2 && <SingleStatsView pointsArray={pointsArray} />}
            {index === 3 && <SingleInfoView training={training} />}
          </ScrollView>
          <AddButton
            onPress={() => {
 navigation.navigate('Set', {
              addSet: this.addSet,
              updateTotal: this.updateTotal,
              setLength: training.arrowsPerSet,
            });
}
          }
          />
        </View>
      </View>
    );
  }
}

TrainingScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
