import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/setScene';
import Navbar from '../items/Navbar';
import PointButton from '../items/PointButton';
import NextButton from '../items/buttons/NextButton';
import I18n from '../../i18n/i18n';
import { tenTarget } from '../../shared';

let tempPointsArray = [];

export default class SetScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setTotal: 0,
      setPoints: [],
      disabledInput: false,
    };
  }

  restoreSet() {
    const { navigation } = this.props;
    const { addSet } = navigation.state.params;
    tempPointsArray = [];
    addSet();
    this.setState({
      setTotal: 0,
      setPoints: [],
      disabledInput: false,
    });
  }

  checkAmountOfPoints() {
    const { setPoints } = this.state;
    const { navigation } = this.props;
    const { setLength } = navigation.state.params;
    if (setPoints.length === setLength) {
      this.setState({ disabledInput: true });
    }
  }

  renderSetButtons(point) {
    const { navigation } = this.props;
    const { updateTotal } = navigation.state.params;
    tempPointsArray.push(point);
    updateTotal(point);
    this.setState({
      setTotal: this.state.setTotal += point,
      setPoints: tempPointsArray,
    });
    this.checkAmountOfPoints();
  }

  render() {
    const { navigation } = this.props;
    const { setTotal, setPoints, disabledInput } = this.state;
    return (
      <View style={generalStyles.sceneContainer}>
        <Navbar
          title={I18n.t('addSet')}
          navigation={navigation}
          goBack
        />
        <ScrollView
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.pointButtons}>
            {tenTarget.map(item => (
              <PointButton
                onPress={() => this.renderSetButtons(item.value)}
                number={item.value}
                large
                key={item.value}
                disabled={disabledInput}
              />
          ))}
          </View>
          <NextButton
            onPress={() => this.restoreSet()}
          />
          <View style={styles.setPoints}>
            {setPoints.map(point => (
              <PointButton
                number={point}
                large
                disabled
                key={point}
              />
            ))}
          </View>
          <View style={styles.totalTextContainer}>
            <Text style={styles.totalText}>{setTotal}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SetScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
