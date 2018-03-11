import React, { Component } from 'react';
import {
    Modal,
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    StatusBar,
    TextInput
} from 'react-native';

import ModalHeader from '../items/ModalHeader';

export default class NewTrainingModal extends Component {

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    onRequestClose={() => this.props.togglePopup()}
                >
                <View>
                <ModalHeader
                  title={'New training'}
                  onPress={() => this.props.togglePopup()}
                />
                    <Text>New training</Text>
                    <KeyboardAvoidingView>
                        <ScrollView>
                            <TextInput></TextInput>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    </View>
                </Modal>
            </View>
        );
    }
}
