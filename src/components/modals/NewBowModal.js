import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Picker,
} from 'react-native';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react/native';

import styles from '../../styles/scenes/modals';
import ModalHeader from '../items/ModalHeader';
import RealmService from '../../services/realmService';
import I18n from '../../i18n/i18n';

@inject('bowStore')
@observer
export default class NewBowModal extends Component {
  constructor(props) {
    super(props);
    this.createBow = this.createBow.bind(this);
    this.state = {
      name: '',
      bowType: 'Compound',
      brand: '',
      size: 0,
      drawWeight: 0,
      tiller: 0,
      braceHeight: 0,
      limbs: '',
      nockingPoint: '',
      string: '',
      description: '',
    };
  }

  createBow() {
    const {
      name,
      bowType,
      brand,
      size,
      drawWeight,
      tiller,
      braceHeight,
      limbs,
      nockingPoint,
      string,
      description,
    } = this.state;
    const { bowStore, togglePopup } = this.props;
    const bow = RealmService.createBow({
      name,
      bowType,
      brand,
      size,
      drawWeight,
      tiller,
      braceHeight,
      limbs,
      nockingPoint,
      string,
      description,
    });
    this.setState({
      bow,
    });
    togglePopup();
    bowStore.setShowAddBowPopup(false);
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
              title={I18n.t('newBow')}
              onPress={() => togglePopup()}
              onPressDone={() => this.createBow()}
            />
            <KeyboardAvoidingView
              behavior="padding"
            >
              <ScrollView>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>{I18n.t('name')}</Text>
                  <TextInput
                    onChangeText={name => this.setState({ name })}
                    placeholder={I18n.t('name')}
                    style={styles.textInput}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>{I18n.t('bowType')}</Text>
                  <Picker
                    selectedValue={this.state.bowType}
                    onValueChange={bowType => this.setState({ bowType })}
                  >
                    <Picker.Item label="Barebow" value="Barebow" />
                    <Picker.Item label="Longbow" value="Longbow" />
                    <Picker.Item label="Compound" value="Compound" />
                    <Picker.Item label="Recurve" value="Recurve" />
                  </Picker>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>{I18n.t('brand')}</Text>
                  <TextInput
                    onChangeText={brand => this.setState({ brand })}
                    style={styles.textInput}
                    placeholder={I18n.t('brand')}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>{I18n.t('limbs')}</Text>
                  <TextInput
                    onChangeText={limbs => this.setState({ limbs })}
                    style={styles.textInput}
                    placeholder={I18n.t('limbs')}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>{I18n.t('nockingPoint')}</Text>
                  <TextInput
                    onChangeText={nockingPoint => this.setState({ nockingPoint })}
                    style={styles.textInput}
                    placeholder={I18n.t('nockingPoint')}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>{I18n.t('string')}</Text>
                  <TextInput
                    onChangeText={string => this.setState({ string })}
                    style={styles.textInput}
                    placeholder={I18n.t('string')}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>{I18n.t('description')}</Text>
                  <TextInput
                    onChangeText={description => this.setState({ description })}
                    style={styles.textInput}
                    placeholder={I18n.t('description')}
                  />
                </View>
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

