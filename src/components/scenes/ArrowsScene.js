import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/addArrows';
import Navbar from '../items/Navbar';
import AddButton from '../items/buttons/AddButton';
import NewArrowModal from '../modals/NewArrowModal';
import I18n from '../../i18n/i18n';

@inject('arrowStore')
@observer
export default class ArrowsScene extends Component {
  render() {
    const { arrowStore, navigation } = this.props;
    const { showAddArrowPopup } = arrowStore;

    return (
      <View style={generalStyles.sceneContainer}>
        <Navbar
          title={I18n.t('myArrows')}
          navigation={navigation}
          goBack={false}
        />
        <AddButton onPress={() => { arrowStore.setShowAddArrowPopup(true); }} />
        <Text>
          arrows
        </Text>
        {
          showAddArrowPopup && <NewArrowModal
            togglePopup={() => { arrowStore.setShowAddArrowPopup(false); }}
          />
        }
      </View>
    );
  }
}

ArrowsScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
