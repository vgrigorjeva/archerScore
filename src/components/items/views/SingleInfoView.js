import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../../styles/scenes/views';
import I18n from '../../../i18n/i18n';

export default class SingleInfoView extends Component {
  render() {
    const { training } = this.props;
    const {
      distance, environment, targetType, arrowsPerSet, note,
    } = training;
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.labelText}>{I18n.t('chooseDistance')}</Text>
        <Text style={styles.dataText}>{distance}</Text>
        <Text style={styles.labelText}>{I18n.t('chooseEnvironment')}</Text>
        <Text style={styles.dataText}>{environment}</Text>
        <Text style={styles.labelText}>{I18n.t('targetType')}</Text>
        <Text style={styles.dataText}>{targetType}</Text>
        <Text style={styles.labelText}>{I18n.t('chooseArrowsPerSet')}</Text>
        <Text style={styles.dataText}>{arrowsPerSet}</Text>
        <Text style={styles.labelText}>{I18n.t('comments')}</Text>
        <Text style={styles.dataText}>{note}</Text>
      </View>

    );
  }
}

SingleInfoView.propTypes = {
  training: PropTypes.object.isRequired,
};
