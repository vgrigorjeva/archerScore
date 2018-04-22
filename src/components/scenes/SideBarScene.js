import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles/scenes/sidebar';
import I18n from '../../i18n/i18n';

const home = I18n.t('home');
const myArrows = I18n.t('myArrows');
const myBows = I18n.t('myBows');
const calendar = I18n.t('calendar');
const statistics = I18n.t('statistics');

export const sideBarOptions = {
  Home: 'HOME',
  MyArrows: myArrows,
  MyBows: myBows,
  Calendar: calendar,
  Statistics: statistics,
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
          case myArrows:
            return this.props.navigation.navigate('AddArrows');
          case myBows:
            return this.props.navigation.navigate('AddBow');
          case home:
            return this.props.navigation.navigate('TrainingList');
          case calendar:
            return this.props.navigation.navigate('Calendar');
          case statistics:
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
