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

export default class NewBowModal extends Component {
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
              title="Add bow"
              onPress={() => togglePopup()}
              onPressDone={() => togglePopup()}
            />
            <Text>New bow</Text>
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

NewBowModal.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};

