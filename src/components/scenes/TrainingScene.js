import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

import generalStyles from '../../styles/general';
import styles from '../../styles/scenes/addTraining';
import NavBar from '../items/Navbar';
import PointButton from '../items/PointButton';

@inject('trainingStore')
@observer
export default class TrainingScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  updateTotal(number) {
    const prevTotal = this.state.total;
    this.setState({
      total: prevTotal + number,
    });
  }

  render() {
    const { navigation } = this.props;
    const { training } = navigation.state.params;
    return (
      <View style={generalStyles.sceneContainer}>
        <NavBar
          title={training.name}
          navigation={navigation}
          goBack
        />
        <View style={{ flexDirection: 'row' }}>
          <PointButton
            onPress={() => this.updateTotal(1)}
            number={1}
          />
          <PointButton
            onPress={() => this.updateTotal(2)}
            number={2}
          />
          <PointButton
            onPress={() => this.updateTotal(3)}
            number={3}
          />
          <PointButton
            onPress={() => this.updateTotal(4)}
            number={4}
          />
          <PointButton
            onPress={() => this.updateTotal(5)}
            number={5}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <PointButton
            onPress={() => this.updateTotal(6)}
            number={6}
          />
          <PointButton
            onPress={() => this.updateTotal(7)}
            number={7}
          />
          <PointButton
            onPress={() => this.updateTotal(8)}
            number={8}
          />
          <PointButton
            onPress={() => this.updateTotal(9)}
            number={9}
          />
          <PointButton
            onPress={() => this.updateTotal(10)}
            number={10}
          />
        </View>
        <Text>{this.state.total}</Text>
      </View>
    );
  }
}

TrainingScene.propTypes = {
  navigation: PropTypes.object.isRequired,
};
