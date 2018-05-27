import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react/native';

import generalStyles from '../../styles/general';
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

export default class CompetitionScene extends Component {
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
  }

  componentWillMount() {
    this.count();
  }

  addSet() {
    const { navigation } = this.props;
    const { competition } = navigation.state.params;
    const competitionId = competition.itemId;
    const { pointsPerCurrentSet } = this.state;
    realmService.addCompetitionSet({ competitionId, pointsPerCurrentSet });
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
    const { competition: { sets } } = navigation.state.params;
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
    const { competition } = navigation.state.params;
    const {
      amountOfShots, totalCountOfArrows, total, index, pointsArray
    } = this.state;
    const average = totalCountOfArrows / amountOfShots;
    const roundedAverage = Math.round(average * 100) / 100;
    return (
      <View style={generalStyles.sceneContainer}>
        <NavBar
          title={competition.name}
          navigation={navigation}
          goBack
        />
        <View style={styles.viewsContainer}>
          <Text style={styles.headerText}>{I18n.t('totalArrows')}: {amountOfShots}</Text>
          <Text style={styles.headerText}>{I18n.t('totalPoints')}: {totalCountOfArrows}</Text>
          <Text style={styles.headerText}>{I18n.t('average')}: {roundedAverage}</Text>
          <View style={styles.tabBarHeader}>
            <View style={styles.tabsRow}>
              <TouchableHighlight onPress={() => this.setState({ index: 1 })}>
                <View>
                  <Text style={index === 1 ? styles.activeTab : styles.inactiveTab}>{I18n.t('list')}</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.setState({ index: 2 })}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={index === 2 ? styles.activeTab : styles.inactiveTab}>{I18n.t('stats')}</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.setState({ index: 3 })}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={index === 3 ? styles.activeTab : styles.inactiveTab}>{I18n.t('info')}</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <ScrollView>
            {index === 1 && <SingleListView training={competition} />}
            {index === 2 && <SingleStatsView pointsArray={pointsArray} />}
            {index === 3 && <SingleInfoView />}
          </ScrollView>
        </View>
      </View>
    );
  }
}

CompetitionScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
