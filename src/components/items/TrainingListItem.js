import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

@inject('projectStore')
@observer
export default class TrainingListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      training: this.props.training,
    };
  }

  render() {
    const { training } = this.state;
    return (
      <View >
        <Text>{training.name}</Text>
      </View>
    );
  }
}

TrainingListItem.propTypes = {
  training: PropTypes.object.isRequired,
};
