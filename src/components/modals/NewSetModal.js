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
import PointButton from '../items/PointButton';

@inject('setStore')
@observer
export default class NewSetModal extends Component {
  render() {
    const { togglePopup, setStore } = this.props;
    return (
      <View>
        <Modal
          animationType="slide"
          onRequestClose={() => togglePopup()}
        >
          <View>
            <ModalHeader
              title={I18n.t('newSet')}
              onPress={() => togglePopup()}
              onPressDone={() => this.createTraining()}
            />
            <KeyboardAvoidingView>
              <ScrollView
                keyboardShouldPersistTaps="always"
              >
                <View style={{ flexDirection: 'row' }}>
                  <PointButton
                    onPress={() => this.updateTotal(1)}
                    number={1}
                  />
                  <PointButton
                    onPress={() => this.updateTotal(2)}
                    number={2}
                  />
                  <PointButton
                    onPress={() => this.updateTotal(3)}
                    number={3}
                  />
                  <PointButton
                    onPress={() => this.updateTotal(4)}
                    number={4}
                  />
                  <PointButton
                    onPress={() => this.updateTotal(5)}
                    number={5}
                  />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <PointButton
                    onPress={() => this.updateTotal(6)}
                    number={6}
                  />
                  <PointButton
                    onPress={() => this.updateTotal(7)}
                    number={7}
                  />
                  <PointButton
                    onPress={() => this.updateTotal(8)}
                    number={8}
                  />
                  <PointButton
                    onPress={() => this.updateTotal(9)}
                    number={9}
                  />
                  <PointButton
                    onPress={() => this.addSet()}
                    number={10}
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

NewSetModal.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};
