import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation/';

import SideBarScene from '../scenes/SideBarScene';
import HomeScene from '../scenes/HomeScene';
import BowsScene from '../scenes/BowsScene';
import ArrowsScene from '../scenes/ArrowsScene';
import CalendarScene from '../scenes/CalendarScene';
import StatisticsScene from '../scenes/StatisticsScene';

const HomeNavigationStack = StackNavigator(
    {
        Home: {
            screen: HomeScene,
        }
    },
    {
        navigationOptions: {
            header: null,
        },
    }
);

const AddBowsNavigationStack = StackNavigator(
    {
        AddBow: {
            screen: BowsScene,
        },
    },
    {
        navigationOptions: {
            header: null,
        },
    }
);

const AddArrowsNavigationStack = StackNavigator(
    {
        AddArrows: {
            screen: ArrowsScene,
        }
    },
    {
        navigationOptions: {
            header: null,
        },
    }
);

const CalendarNavigationStack = StackNavigator(
    {
        Calendar: {
            screen: CalendarScene,
        }
    },
    {
        navigationOptions: {
            header: null,
        },
    }
);

const StatisticsNavigationStack = StackNavigator(
    {
        Statistics: {
            screen: StatisticsScene,
        }
    },
    {
        navigationOptions: {
            header: null,
        },
    }
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

export default class MainContainer extends Component {

    render() {
        return (
            <SideBarNavigator />
        );
    }
}
