import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Picker,
  Slider,
} from 'react-native';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react/native';

import ModalHeader from '../items/ModalHeader';
import RealmService from '../../services/realmService';

@inject('competitionStore')
@observer
export default class NewCompetitionModal extends Component {
  constructor(props) {
    super(props);
    this.createCompetition = this.createCompetition.bind(this);
    this.state = {
      name: '',
      targetType: '',
      bow: '',
      distance: 18,
      arrowsPerSet: 3,
      environment: '',
      note: '',
      arrow: '',
      isOutdoors: false,
    };
  }

  createCompetition() {
    const {
      name,
      targetType,
      bow,
      distance,
      arrowsPerSet,
      environment,
      note,
      arrow,
    } = this.state;
    const { competitionStore, togglePopup } = this.props;
    const competition = RealmService.createCompetition({
      name,
      targetType,
      bow,
      distance,
      arrowsPerSet,
      environment,
      note,
      arrow,
    });
    this.setState({
      competition,
    });
    togglePopup();
    competitionStore.setShowAddCompetitionPopup(false);
  }

  render() {
    const { togglePopup } = this.props;
    return (
      <View>
        <Modal
          animationType="slide"
          onRequestClose={() => togglePopup()}
        >
          <View>
            <ModalHeader
              title="New competition"
              onPress={() => togglePopup()}
              onPressDone={() => this.createCompetition()}
            />
            <Text>New competition</Text>
            <KeyboardAvoidingView>
              <ScrollView>
                <TextInput
                  onChangeText={name => this.setState({ name })}
                  placeholder="Name"
                />
                <Picker
                  onValueChange={targetType => this.setState({ targetType })}
                >
                  <Picker.Item label="Barebow" value="barebow" />
                  <Picker.Item label="Compound" value="compound" />
                </Picker>
                <Picker
                  selectedValue={this.state.environment}
                  onValueChange={environment => this.setState({ environment, isOutdoors: true })}
                >
                  <Picker.Item label="Indoor" value="indoor" />
                  <Picker.Item label="Outdoor" value="outdoor" />
                </Picker>
                {this.state.isOutdoors &&
                <Picker
                  onValueChange={environment => this.setState({ environment })}
                >
                  <Picker.Item label="Indoor" value="indoor" />
                  <Picker.Item label="Outdoor" value="outdoor" />
                </Picker>
                }
                <Slider
                  value={this.state.distance}
                  minimumValue={1}
                  maximumValue={70}
                  step={1}
                  onValueChange={distance => this.setState({ distance })}
                />
                <Text>{this.state.distance}</Text>
                <Slider
                  value={this.state.arrowsPerSet}
                  minimumValue={1}
                  maximumValue={24}
                  step={1}
                  onValueChange={arrowsPerSet => this.setState({ arrowsPerSet })}
                />
                <Text>{this.state.arrowsPerSet}</Text>
                <TextInput
                  onChangeText={note => this.setState({ note })}
                  placeholder="Comments"
                />
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </Modal>
      </View>
    );
  }
}

NewCompetitionModal.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};
