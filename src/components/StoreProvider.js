import React from 'react';
import { Provider } from 'mobx-react/native';

import App from '../../App';
import {
  arrowStore,
  bowStore,
  competitionStore,
  trainingStore,
} from '../stores/Stores';

function StoreProvider() {
  return (
    <Provider
      arrowStore={arrowStore}
      bowStore={bowStore}
      competitionStore={competitionStore}
      trainingStore={trainingStore}
    >
      <App />
    </Provider>
  );
}

export default StoreProvider;
