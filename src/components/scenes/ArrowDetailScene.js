import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/details';
import Navbar from '../items/Navbar';
import I18n from '../../i18n/i18n';

export default class ArrowDetailScene extends Component {
  render() {
    const { navigation } = this.props;
    const { arrow } = navigation.state.params;
    return (
      <View style={generalStyles.sceneContainer}>
        <Navbar
          title={arrow.name}
          navigation={navigation}
          goBack
        />
        <View style={styles.viewContainer}>
          {!!arrow.length &&
          <View>
            <Text style={styles.labelText}>{I18n.t('length')}</Text>
            <Text style={styles.dataText}>{arrow.length}</Text>
          </View>
        }
          {arrow.material !== '' &&
          <View>
            <Text style={styles.labelText}>{I18n.t('material')}</Text>
            <Text style={styles.dataText}>{arrow.material}</Text>
          </View>
        }
          {arrow.weight !== '' &&
          <View>
            <Text style={styles.labelText}>{I18n.t('weight')}</Text>
            <Text style={styles.dataText}>{arrow.weight}</Text>
          </View>
        }
          {arrow.description !== '' &&
          <View>
            <Text style={styles.labelText}>{I18n.t('description')}</Text>
            <Text style={styles.dataText}>{arrow.description}</Text>
          </View>
        }
        </View>
      </View>
    );
  }
}

ArrowDetailScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
