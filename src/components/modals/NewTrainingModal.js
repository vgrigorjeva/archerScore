import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react/native';

import ModalHeader from '../items/ModalHeader';
import RealmService from '../../services/realmService';

@inject('trainingStore')
@observer
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
    const { trainingStore, navigation } = this.props;
    const training = RealmService.createTraining({
      name,
      distance,
      bowType,
    });
    this.setState({
      training,
    });
    console.log(this.props);
    navigation.navigate('Training');
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
              title="New training"
              onPress={() => togglePopup()}
              onPressDone={() => this.createTraining()}
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
  navigation: PropTypes.object.isRequired,
};
