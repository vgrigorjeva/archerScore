import React from 'react';
import { DrawerNavigator, StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation/';

import SideBarScene from '../scenes/SideBarScene';
import BowsScene from '../scenes/BowsScene';
import BowDetailScene from '../scenes/BowDetailScene';
import ArrowsScene from '../scenes/ArrowsScene';
import ArrowDetailScene from '../scenes/ArrowDetailScene';
import CalendarScene from '../scenes/CalendarScene';
import StatisticsScene from '../scenes/StatisticsScene';
import TrainingScene from '../scenes/TrainingScene';
import TrainingsListScene from '../scenes/TrainingsListScene';
import CompetitionScene from '../scenes/CompetitionScene';
import CompetitionsListScene from '../scenes/CompetitionsListScene';
import SetScene from '../scenes/SetScene';
import { colors, fonts } from '../../styles/general';
import I18n from '../../i18n/i18n';

const TrainingStack = StackNavigator(
  {
    TrainingList: {
      screen: TrainingsListScene,
    },
    Training: {
      screen: TrainingScene,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
    Set: {
      screen: SetScene,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const CompetitionStack = StackNavigator(
  {
    CompetitionList: {
      screen: CompetitionsListScene,
    },
    Competition: {
      screen: CompetitionScene,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const HomeNavigationStack = TabNavigator(
  {
    Trainings: {
      screen: TrainingStack,
      navigationOptions: {
        tabBarLabel: I18n.t('trainings'),
      },
    },
    Competitions: {
      screen: CompetitionStack,
      navigationOptions: {
        tabBarLabel: I18n.t('competitions'),
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeBackgroundColor: colors.black,
      inactiveBackgroundColor: colors.blackInactive,
      activeTintColor: colors.yellow,
      inactiveTintColor: colors.greyBackground,
      labelStyle: {
        fontSize: 24,
        fontFamily: fonts.main,
      },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
  },
);

const AddBowsNavigationStack = StackNavigator(
  {
    AddBow: {
      screen: BowsScene,
    },
    Bow: {
      screen: BowDetailScene,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const AddArrowsNavigationStack = StackNavigator(
  {
    AddArrows: {
      screen: ArrowsScene,
    },
    Arrow: {
      screen: ArrowDetailScene,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const CalendarNavigationStack = StackNavigator(
  {
    Calendar: {
      screen: CalendarScene,
    },
    Training: {
      screen: TrainingScene,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
    Competition: {
      screen: CompetitionScene,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const StatisticsNavigationStack = StackNavigator(
  {
    Statistics: {
      screen: StatisticsScene,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const SideBarNavigator = DrawerNavigator(
  {
    Home: {
      screen: HomeNavigationStack,
    },
    AddBow: {
      screen: AddBowsNavigationStack,
    },
    AddArrows: {
      screen: AddArrowsNavigationStack,
    },
    Calendar: {
      screen: CalendarNavigationStack,
    },
    Statistics: {
      screen: StatisticsNavigationStack,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    contentComponent: props => <SideBarScene {...props} />,
  },
);

const MainContainer = () => (
  <SideBarNavigator />
);

export default MainContainer;
