import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import ModalHeader from '../items/ModalHeader';
import RealmService from '../../services/realmService';

export default class NewTrainingModal extends Component {
  constructor(props) {
    super(props);
    this.createTraining = this.createTraining.bind(this);
    this.state = {
      name: '',
      training: '',
      distance: '',
      bowType: '',
    };
  }

  setName(name) {
    this.setState({ name });
  }
  setBowType(bowType) {
    this.setState({ bowType });
  }
  setDistance(distance) {
    this.setState({ distance });
  }

  createTraining() {
    const { name, distance, bowType } = this.state;
    const training = RealmService.createTraining({
      name,
      distance,
      bowType,
    });
    this.setState({
      training,
    });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          onRequestClose={() => this.props.togglePopup()}
        >
          <View>
            <ModalHeader
              title="New training"
              onPress={() => this.props.togglePopup()}
            />
            <Text>New training</Text>
            <KeyboardAvoidingView>
              <ScrollView>
                <TextInput
                  onChangeText={text => this.setName(text)}
                />
                <TextInput
                  onChangeText={text => this.setBowType(text)}
                />
                <TextInput
                  onChangeText={text => this.setDistance(text)}
                />
                <TouchableHighlight
                  onPress={() => this.createTraining()}
                >
                  <Text>Create training</Text>
                </TouchableHighlight>
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
