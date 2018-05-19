import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { VictoryPie } from 'victory-native';

export default class SingleStatsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: this.props.pointsArray,
      ones: 0,
      twos: 0,
      threes: 0,
      fours: 0,
      fives: 0,
      sixes: 0,
      sevens: 0,
      eights: 0,
      nines: 0,
      tens: 0,
    };
  }

  componentWillMount() {
    const { points } = this.state;
    points.forEach((point) => {
      if (point === 1) {
        this.setState({ ones: this.state.ones += 1 });
      }
      if (point === 2) {
        this.setState({ twos: this.state.twos += 1 });
      }
      if (point === 3) {
        this.setState({ threes: this.state.threes += 1 });
      }
      if (point === 4) {
        this.setState({ fours: this.state.fours += 1 });
      }
      if (point === 5) {
        this.setState({ fives: this.state.fives += 1 });
      }
      if (point === 6) {
        this.setState({ sixes: this.state.sixes += 1 });
      }
      if (point === 7) {
        this.setState({ sevens: this.state.sevens += 1 });
      }
      if (point === 8) {
        this.setState({ eights: this.state.eights += 1 });
      }
      if (point === 9) {
        this.setState({ nines: this.state.nines += 1 });
      }
      if (point === 10) {
        this.setState({ tens: this.state.tens += 1 });
      }
    });
  }

  render() {
    const {
      ones, twos, threes, fours, fives, sixes, sevens, eights, nines, tens,
    } = this.state;
    return (
      <View>
        <VictoryPie
          data={[
      { x: '1', y: ones },
      { x: '2', y: twos },
      { x: '3', y: threes },
      { x: '4', y: fours },
      { x: '5', y: fives },
      { x: '6', y: sixes },
      { x: '7', y: sevens },
      { x: '8', y: eights },
      { x: '9', y: nines },
      { x: '10', y: tens },
    ]}
          cornerRadius={10}
          padAngle={1}
          labels={d => `${d.x}: ${d.y}`}
          colorScale={["white", "black", "blue", "red", "yellow" ]}
          style={{
            labels: {
              fontSize: 25,
              fill: '#ff00ff',
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
