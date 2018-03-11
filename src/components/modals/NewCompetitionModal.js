import React, { Component } from 'react';
import {
    Modal,
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    TextInput,
} from 'react-native';

import ModalHeader from '../items/ModalHeader';

export default class NewCompetitionModal extends Component {

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    onRequestClose={() => this.props.togglePopup()}
                >
                <View>
                <ModalHeader
                  title={'New competition'}
                  onPress={() => this.props.togglePopup()}
                />
                    <Text>New competition</Text>
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
