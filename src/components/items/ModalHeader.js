import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles/items/modalHeader';
import DoneButton from '../items/buttons/DoneButton';
import BackButton from '../items/buttons/BackButton';

export default class ModalHeader extends Component {

    render() {
        const { title, onPress } = this.props;
        console.log(this.props);
        console.log("working gfdgf")
        return (
            <View style={styles.container}>
                <BackButton onPress={onPress} />
                <Text style={styles.text}>{title}</Text>
                <DoneButton />
            </View>
        );
    }
}

ModalHeader.propTypes = {
    title: PropTypes.string.isRequired,
};
