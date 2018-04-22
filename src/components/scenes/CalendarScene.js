import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import PropTypes from 'prop-types';

import RealmService from '../../services/realmService';
import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/calendar';
import Navbar from '../items/Navbar';

const workout1 = { key: 'workout1', color: '#C63085', selectedDotColor: '#252525' };
const workout2 = { key: 'workout2', color: '#C63085', selectedDotColor: '#FFFFFF' };
const workout3 = { key: 'workout3', color: '#C63085', selectedDotColor: '#FFFFFF' };

export default class CalendarScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marked: {},
    };
    this.onDayPress = this.onDayPress.bind(this);
  }

  componentWillMount() {
    RealmService.getRealm()
      .then(() => {
        const trainings = RealmService.getTrainings();
        this.setState({
          trainings,
        });
        this.getDatesWithContent();
      });
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString,
    });
  }

  getDatesWithContent() {
    const datesWithContent = {};
    this.state.trainings.forEach((training) => {
      const date = moment(training.date).format('YYYY-MM-DD');
      datesWithContent[date] = { dots: [workout1] };
    });
    const marked = {};
    Object.keys(datesWithContent).forEach((dateKey) => {
      marked[dateKey] = { marked: true };
    });
    this.setState({ marked });
    console.warn(this.state.marked);
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
            markedDates={Object.assign(
{
              [this.state.selected]: { selected: true },
            },
              this.state.marked,
            )}
           // markingType="multi-dot"
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
