import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles/items/navbar';
import MenuButton from '../items/buttons/MenuButton';

export default class Navbar extends Component {
    render() {
        const { title, navigation } = this.props;
        console.log(this.props);
        return (
            <View style={styles.container}>
                <MenuButton onPress={() => navigation.navigate('DrawerOpen')} />
                <Text style={styles.text}>{title}</Text>
            </View>
        );
    }
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
};
