import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import styles from '../../styles/scenes/sidebar';

export const sideBarOptions = {
  Home: 'HOME',
  MyArrows: 'MY ARROWS',
  MyBows: 'MY BOWS',
  Calendar: 'CALENDAR',
  Statistics: 'STATISTICS',
};

const sideBarItems = [
  sideBarOptions.Home,
  sideBarOptions.MyArrows,
  sideBarOptions.MyBows,
  sideBarOptions.Calendar,
  sideBarOptions.Statistics,
];

export default class SideBarScene extends Component {
  renderItem = ({ item }) => (
    <TouchableHighlight
      onPress={() => {
        switch (item) {
          case 'MY ARROWS':
           return this.props.navigation.navigate('AddArrows');
          case 'MY BOWS':
            return this.props.navigation.navigate('AddBow');
          case 'HOME':
          return this.props.navigation.navigate('TrainingList');
          case 'CALENDAR':
            return this.props.navigation.navigate('Calendar');
          case 'STATISTICS':
            return this.props.navigation.navigate('Statistics');
          default:
            return null;
        }
      }}
    >
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>{item}</Text>
      </View>
    </TouchableHighlight>
  )

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.menuHeaderImage}
            resizeMode="contain"
            source={require('../../../assets/images/app/appIcon.png')}
          />
        </View>
        <FlatList
          data={sideBarItems}
          keyExtractor={item => item}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    );
  }
}

SideBarScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
