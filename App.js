/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import MainContainer from './src/components/scenes/MainContainer';

export default class App extends Component<{}> {

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <MainContainer />
    );
  }
}