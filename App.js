import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import MainContainer from './src/components/scenes/MainContainer';

import RealmService from './src/services/realmService';

export default class App extends Component<{}> {
  componentDidMount() {
    RealmService.getRealm();
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <MainContainer />
    );
  }
}
