import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/calendar';
import Navbar from '../items/Navbar';

export default class CalendarScene extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString,
    });
  }

  render() {
    const today = moment().format('YYYY-MM-DD');
    const { navigation } = this.props;
    return (
      <View style={generalStyles.sceneContainer}>
        <Navbar
          title="CALENDAR"
          navigation={navigation}
          goBack={false}
        />
        <ScrollView>
          <Calendar
            onDayPress={this.onDayPress}
            style={styles.calendar}
            current={(this.state.selected) || today}
            firstDay={1}
            markedDates={{ [this.state.selected]: { selected: true } }}
            /*  markedDates={{
               [today]: { selected: true, marked: true },
             }} */
            theme={{
              dayTextColor: '#000000',
              todayTextColor: '#ff0000',
              selectedDayTextColor: '#000000',
              monthTextColor: '#000000',
              selectedDayBackgroundColor: '#ffff00',
              arrowColor: '#000000',
              'stylesheet.day.basic': {
                visibleDot: {
                  opacity: 1,
                  backgroundColor: '#000000',
                },
                selectedDot: {
                  backgroundColor: '#000000',
                },
                text: {
                  fontFamily: 'ArchitectsDaughter-Regular',
                },
              },
              'stylesheet.calendar.header': {
                monthText: {
                  fontFamily: 'ArchitectsDaughter-Regular',
                  color: '#000000',
                },
                dayHeader: {
                  fontFamily: 'ArchitectsDaughter-Regular',
                  color: '#000000',
                },
              },
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

CalendarScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
