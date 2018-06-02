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

import styles from '../../styles/scenes/modals';
import ModalHeader from '../items/ModalHeader';
import RealmService from '../../services/realmService';
import I18n from '../../i18n/i18n';

@inject('arrowStore')
@observer
export default class NewArrowModal extends Component {
  constructor(props) {
    super(props);
    this.createArrow = this.createArrow.bind(this);
    this.state = {
      name: '',
      length: '',
      material: '',
      weight: '',
      description: '',
    };
  }

  createArrow() {
    const {
      name,
      length,
      material,
      weight,
      description,
    } = this.state;
    const { arrowStore, togglePopup } = this.props;
    const arrow = RealmService.createArrow({
      name,
      length,
      material,
      weight,
      description,
    });
    this.setState({
      arrow,
    });
    togglePopup();
    arrowStore.setShowAddArrowPopup(false);
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
              title={I18n.t('newArrow')}
              onPress={() => togglePopup()}
              onPressDone={() => this.createArrow()}

            />
            <KeyboardAvoidingView
              behavior="padding"
            >
              <ScrollView>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>{I18n.t('name')}</Text>
                  <TextInput
                    onChangeText={name => this.setState({ name })}
                    style={styles.textInput}
                    placeholder={I18n.t('name')}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>{I18n.t('length')}</Text>
                  <TextInput
                    onChangeText={length => this.setState({ length })}
                    style={styles.textInput}
                    placeholder={I18n.t('length')}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>{I18n.t('material')}</Text>
                  <TextInput
                    onChangeText={material => this.setState({ material })}
                    style={styles.textInput}
                    placeholder={I18n.t('material')}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>{I18n.t('weight')}</Text>
                  <TextInput
                    onChangeText={weight => this.setState({ weight })}
                    style={styles.textInput}
                    placeholder={I18n.t('weight')}
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

NewArrowModal.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};
