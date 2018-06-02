import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { VictoryPie } from 'victory-native';

import { tenTarget } from '../../../shared';
import { colors } from '../../../styles/general';

let totalArray = [];
let arrayToRender = [];

export default class SingleStatsView extends Component {
  componentWillMount() {
    totalArray = [];
    arrayToRender = [];
    tenTarget.forEach((e) => {
      totalArray.push({ key: e.key, value: 0 });
    });

    const { pointsArray } = this.props;
    pointsArray.forEach((point) => {
      const tenTargetElement = tenTarget.find(e => e.value === point);
      const foundIndex = totalArray.findIndex(x => x.key === tenTargetElement.key);
      totalArray[foundIndex].value += 1;
    });
    this.renderStatsGraph();
  }

  renderStatsGraph() {
    tenTarget.forEach((element) => {
      const foundIndex = totalArray.findIndex(x => x.key === element.key);
      if (totalArray[foundIndex].value !== 0) {
        arrayToRender.push({ x: element.value, y: totalArray[foundIndex].value });
      }
    });
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <VictoryPie
          data={arrayToRender}
          cornerRadius={10}
          padAngle={1}
          labelRadius={120}
          width={300}
          labels={d => `${d.x}: ${d.y}`}
          style={{
            labels: {
              fontSize: 20,
              fill: colors.black,
            },
          }}
        />
      </View>
    );
  }
}

SingleStatsView.propTypes = {
  pointsArray: PropTypes.array.isRequired,
};
