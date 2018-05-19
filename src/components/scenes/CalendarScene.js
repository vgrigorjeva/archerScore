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
let trainings = [];
let competitions = [];

export default class CalendarScene extends Component {
  constructor(props) {
    super(props);
    const selected = new Date();
    this.onChangeTrainings = this.onChangeTrainings.bind(this);
    this.onChangeCompetitions = this.onChangeCompetitions.bind(this);
    this.onDayPress = this.onDayPress.bind(this);
    this.state = {
      marked: {},
      trainingsState: [],
      competitionsState: [],
      allShootings: [],
      shootingsForSelectedDay: [],
      selected,
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
        trainings = RealmService.getTrainings();
        competitions = RealmService.getCompetitions();
        trainings.addListener(this.onChangeTrainings);
        competitions.addListener(this.onChangeCompetitions);
        const trainingsMap = trainings.map(x => Object.assign({}, x));
        const competitionsMap = competitions.map(x => Object.assign({}, x));
        const allShootings = trainingsMap.concat(competitionsMap);
        this.setState({
          trainingsState: trainings,
          competitionsState: competitions,
          allShootings,
          selected: new Date(),
        }, () => this.getShootingsForSelectedDay());
        this.getDatesWithContent();
      });
  }

  componentWillReceiveProps() {
    this.getShootingsForSelectedDay();
  }

  componentWillUnmount() {
    trainings.removeAllListeners();
    competitions.removeAllListeners();
  }


  onChangeTrainings() {
    RealmService.getRealm()
      .then(() => {
        trainings = RealmService.getTrainings();
        const trainingsMap = trainings.map(x => Object.assign({}, x));
        const competitionsMap = competitions.map(x => Object.assign({}, x));
        const allShootings = trainingsMap.concat(competitionsMap);
        this.setState({
          trainingsState: trainings,
          allShootings,
        });
      });
  }

  onChangeCompetitions() {
    RealmService.getRealm()
      .then(() => {
        competitions = RealmService.getCompetitions();
        const trainingsMap = trainings.map(x => Object.assign({}, x));
        const competitionsMap = competitions.map(x => Object.assign({}, x));
        const allShootings = trainingsMap.concat(competitionsMap);
        this.setState({
          competitionsState: competitions,
          allShootings,
        });
      });
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString,
    }, () => {
      this.getDatesWithContent();
      this.getShootingsForSelectedDay();
    });
  }

  getShootingsForSelectedDay() {
    const shootingsForSelectedDay = [];
    this.state.allShootings.forEach((shooting) => {
      const date = moment(shooting.date).format('YYYY-MM-DD');
      if (moment(this.state.selected).format('YYYY-MM-DD') === date) {
        shootingsForSelectedDay.push(shooting);
      }
    });
    this.setState({
      shootingsForSelectedDay,
    });
  }

  getDatesWithContent() {
    const datesWithContent = {};
    this.state.allShootings.forEach((shooting) => {
      const date = moment(shooting.date).format('YYYY-MM-DD');
      datesWithContent[date] = { dots: [workout1] };
    });
    const marked = {};
    Object.keys(datesWithContent).forEach((dateKey) => {
      if (moment(this.state.selected).format('YYYY-MM-DD') === dateKey) {
        marked[dateKey] = { marked: true, selected: true };
      } else {
        marked[dateKey] = { marked: true };
      }
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
    const {
 allShootings, shootingsForSelectedDay, marked, selected 
} = this.state;
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
            current={today}
            firstDay={1}
            markedDates={Object.assign(
{
              [moment(this.state.selected).format('YYYY-MM-DD')]: { selected: true },
            },
              this.state.marked,
            )}
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
            data={shootingsForSelectedDay}
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
