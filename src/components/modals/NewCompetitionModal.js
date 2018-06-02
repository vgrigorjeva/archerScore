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

import styles from '../../styles/scenes/modals';
import ModalHeader from '../items/ModalHeader';
import RealmService from '../../services/realmService';
import I18n from '../../i18n/i18n';

@inject('competitionStore')
@observer
export default class NewCompetitionModal extends Component {
  constructor(props) {
    super(props);
    this.createCompetition = this.createCompetition.bind(this);
    this.state = {
      name: '',
      targetType: 'wa10',
      bow: '',
      distance: 18,
      arrowsPerSet: 3,
      environment: 'outdoor',
      note: '',
      arrow: '',
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
              title={I18n.t('newCompetition')}
              onPress={() => togglePopup()}
              onPressDone={() => this.createCompetition()}
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
                  <Text style={styles.labelText}>{I18n.t('targetType')}</Text>
                  <Picker
                    selectedValue={this.state.targetType}
                    onValueChange={targetType => this.setState({ targetType })}
                  >
                    <Picker.Item label="WA Full 1-10" value="wa10" />
                  </Picker>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>{I18n.t('chooseEnvironment')}</Text>
                  <Picker
                    selectedValue={this.state.environment}
                    onValueChange={environment => this.setState({ environment })}
                  >
                    <Picker.Item label={I18n.t('indoor')} value="indoor" />
                    <Picker.Item label={I18n.t('outdoor')} value="outdoor" />
                  </Picker>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>{I18n.t('chooseDistance')}</Text>
                  <View style={styles.sliderRow}>
                    <View style={styles.sliderContainer}>
                      <Slider
                        value={this.state.distance}
                        minimumValue={1}
                        maximumValue={70}
                        step={1}
                        onValueChange={distance => this.setState({ distance })}
                      />
                    </View>
                    <View style={styles.sliderValueContainer}>
                      <Text style={styles.sliderValue}>{this.state.distance}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>{I18n.t('chooseArrowsPerSet')}</Text>
                  <View style={styles.sliderRow}>
                    <View style={styles.sliderContainer}>
                      <Slider
                        value={this.state.arrowsPerSet}
                        minimumValue={1}
                        maximumValue={24}
                        step={1}
                        onValueChange={arrowsPerSet => this.setState({ arrowsPerSet })}
                      />
                    </View>
                    <View style={styles.sliderValueContainer}>
                      <Text style={styles.sliderValue}>{this.state.arrowsPerSet}</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.labelText}>{I18n.t('comments')}</Text>
                <TextInput
                  onChangeText={note => this.setState({ note })}
                  placeholder={I18n.t('comments')}
                  style={styles.textInput}
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
