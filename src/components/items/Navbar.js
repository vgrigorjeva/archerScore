import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles/items/navbar';
import MenuButton from '../items/buttons/MenuButton';

const Navbar = ({ title, navigation }) => (
  <View style={styles.container}>
    <MenuButton onPress={() => navigation.navigate('DrawerOpen')} />
    <Text style={styles.text}>{title}</Text>
  </View>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Navbar;
