import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/details';
import Navbar from '../items/Navbar';
import I18n from '../../i18n/i18n';

export default class BowDetailScene extends Component {
  render() {
    const { navigation } = this.props;
    const { bow } = navigation.state.params;
    return (
      <View style={generalStyles.sceneContainer}>
        <Navbar
          title={bow.name}
          navigation={navigation}
          goBack
        />
        <View style={styles.viewContainer}>
       {bow.bowType &&
        <View>
         <Text style={styles.labelText}>{I18n.t('bowType')}</Text>
         <Text style={styles.dataText}>{bow.bowType}</Text>
        </View>
        }
         {bow.brand !== '' &&
        <View>
         <Text style={styles.labelText}>{I18n.t('brand')}</Text>
        <Text style={styles.dataText}>{bow.brand}</Text>
        </View>
        }
         {bow.limbs !== '' &&
        <View>
         <Text style={styles.labelText}>{I18n.t('limbs')}</Text>
        <Text style={styles.dataText}>{bow.limbs}</Text>
        </View>
        }
         {bow.nockingPoint !== '' &&
        <View>
         <Text style={styles.labelText}>{I18n.t('nockingPoint')}</Text>
        <Text style={styles.dataText}>{bow.nockingPoint}</Text>
        </View>
        }
         {bow.string !== '' &&
        <View>
         <Text style={styles.labelText}>{I18n.t('string')}</Text>
        <Text style={styles.dataText}>{bow.string}</Text>
        </View>
        }
         {bow.description !== '' &&
        <View>
         <Text style={styles.labelText}>{I18n.t('description')}</Text>
        <Text style={styles.dataText}>{bow.description}</Text>
        </View>
        }
      </View>
      </View>
    );
  }
}

BowDetailScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
