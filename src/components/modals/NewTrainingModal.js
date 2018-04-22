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
import I18n from '../../i18n/i18n';

@inject('trainingStore')
@observer
export default class NewTrainingModal extends Component {
  constructor(props) {
    super(props);
    this.createTraining = this.createTraining.bind(this);
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
  createTraining() {
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
    const { trainingStore, togglePopup } = this.props;
    const training = RealmService.createTraining({
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
      training,
    });
    togglePopup();
    trainingStore.setShowAddTrainingPopup(false);
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
              title={I18n.t('newTraining')}
              onPress={() => togglePopup()}
              onPressDone={() => this.createTraining()}
            />
            <KeyboardAvoidingView>
              <ScrollView
                keyboardShouldPersistTaps="always"
              >
                <TextInput
                  onChangeText={name => this.setState({ name })}
                  placeholder="fuck"
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
                  <Picker.Item label={I18n.t('indoor')} value="indoor" />
                  <Picker.Item label={I18n.t('outdoor')} value="outdoor" />
                </Picker>
                {this.state.isOutdoors &&
                <Picker
                  onValueChange={environment => this.setState({ environment })}
                >
                  <Picker.Item label={I18n.t('indoor')} value="indoor" />
                  <Picker.Item label={I18n.t('outdoor')} value="outdoor" />
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
                  placeholder={I18n.t('comments')}
                />
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </Modal>
      </View>
    );
  }
}

NewTrainingModal.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};
