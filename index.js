import React from 'react';
import { AppRegistry } from 'react-native';

import StoreProvider from './src/components/StoreProvider';

function archery() {
    return <StoreProvider />;
  }

AppRegistry.registerComponent('archerScore', () => archery);
