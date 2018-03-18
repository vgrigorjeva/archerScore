import React, { Component } from 'react';
import { View } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import type { NavigationState } from 'react-native-tab-view/types';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/home';
import TrainingScene from '../scenes/TrainingScene';
import CompetitionScene from '../scenes/CompetitionScene';
import NavBar from '../items/Navbar';

type Route = {
  key: string,
  title: string,
}

type State = NavigationState<Route>;

export default class HomeScene extends Component {
  state: State = {
    index: 0,
    routes: [
      { key: '1', title: 'TRAINING' },
      { key: '2', title: 'COMPETITION' },
    ],
    width: 0,
  };

  handleIndexChange = (index) => {
    this.setState({
      index,
    });
  };


  renderFooter = props => (
    <TabBar
      {...props}
      style={styles.tabbar}
      indicatorStyle={styles.indicator}
      labelStyle={styles.label}
    />
  );

  renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return (
          <TrainingScene />
        );
      case '2':
        return (
          <CompetitionScene />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <View style={generalStyles.sceneContainer}>
        <NavBar title="MY RESULTS" navigation={this.props.navigation} />
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderFooter={this.renderFooter}
          onIndexChange={this.handleIndexChange}
        />
      </View>
    );
  }
}

HomeScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
