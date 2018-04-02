import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class TrainingListItem extends Component {
  constructor(props) {
    super(props);
    const { training } = this.props;
    this.state = {
      training,
    };
  }

  render() {
    const { training } = this.state;
    return (
      <View>
        <Text>{training.name}</Text>
      </View>
    );
  }
}

TrainingListItem.propTypes = {
  training: PropTypes.object.isRequired,
};
