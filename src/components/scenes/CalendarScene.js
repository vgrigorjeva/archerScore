import React, { Component } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
import PropTypes from 'prop-types';

import RealmService from '../../services/realmService';
import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/calendar';
import Navbar from '../items/Navbar';
import ShootingListItem from '../items/ShootingListItem';
import I18n from '../../i18n/i18n';
import localesSv from '../../i18n/locales/calenderLocalesSv';
import localesRu from '../../i18n/locales/calenderLocalesRu';
import localesEn from '../../i18n/locales/calenderLocalesEn';
import localesLt from '../../i18n/locales/calenderLocalesLt';

const workout1 = { key: 'workout1', color: '#C63085', selectedDotColor: '#252525' };
let trainingss = [];
let competitionss = [];

export default class CalendarScene extends Component {
  constructor(props) {
    super(props);
    this.onChangeTrainings = this.onChangeTrainings.bind(this);
    this.onChangeCompetitions = this.onChangeCompetitions.bind(this);
    this.onDayPress = this.onDayPress.bind(this);
    this.state = {
      marked: {},
      trainings: [],
      competitions: [],
      allShootings: [],
    };
  }

  componentWillMount() {
    const currentLocale = I18n.currentLocale();
    switch (currentLocale) {
      case 'sv-SE':
        LocaleConfig.defaultLocale = localesSv;
        break;
      case 'ru-RU':
        LocaleConfig.defaultLocale = localesRu;
        break;
      case 'lt-LT':
        LocaleConfig.defaultLocale = localesLt;
        break;
      default:
        LocaleConfig.defaultLocale = localesEn;
    }

    RealmService.getRealm()
      .then(() => {
        trainingss = RealmService.getTrainings();
        competitionss = RealmService.getCompetitions();
        trainingss.addListener(this.onChangeTrainings);
        competitionss.addListener(this.onChangeCompetitions);
        const allShootings = trainingss.concat(competitionss);
        this.setState({
          trainings: trainingss,
          competitions: competitionss,
          allShootings,
        });
        this.getDatesWithContent();
      });
  }

  componentWillUnmount() {
    trainingss.removeAllListeners();
    competitionss.removeAllListeners();
  }


  onChangeTrainings() {
    RealmService.getRealm()
      .then(() => {
        this.setState({
          trainings: RealmService.getTrainings(),
        });
      });
  }

  onChangeCompetitions() {
    RealmService.getRealm()
      .then(() => {
        this.setState({
          competitions: RealmService.getCompetitions(),
        });
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
  }

  renderItem = ({ item }) => {
    const trainingId = item.itemId;
    const { navigation } = this.props;
    const isTraining = item.key === 'training';
    return (
      <ShootingListItem
        item={item}
        navigation={navigation}
        longPress={() => RealmService.deleteTraining({ trainingId })}
        isTraining={isTraining}
      />
    );
  };

  render() {
    const today = moment().format('YYYY-MM-DD');
    const { navigation } = this.props;
    const { allShootings, trainings, competitions } = this.state;
    return (
      <View style={generalStyles.sceneContainer}>
        <Navbar
          title={I18n.t('calendar')}
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
          <FlatList
            data={competitions}
            keyExtractor={item => item.itemId}
            renderItem={this.renderItem}
          />
        </ScrollView>
      </View>
    );
  }
}

CalendarScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
