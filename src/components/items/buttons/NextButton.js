import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../../styles/general';
import styles from '../../../styles/items/buttons';
import I18n from '../../../i18n/i18n';

const NextButton = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={colors.underlayColor}
    style={styles.nextButton}
  >
    <Text style={styles.nextButtonText}>{I18n.t('save')}</Text>
  </TouchableHighlight>
);

NextButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default NextButton;
