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

import ModalHeader from '../items/ModalHeader';

export default class NewArrowModal extends Component {
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          onRequestClose={() => this.props.togglePopup()}
        >
          <View>
            <ModalHeader
              title="Add arrow"
              onPress={() => this.props.togglePopup()}
            />
            <Text>New arrow</Text>
            <KeyboardAvoidingView>
              <ScrollView>
                <TextInput />
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </Modal>
      </View>
    );
  }
}

NewArrowModal.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};
