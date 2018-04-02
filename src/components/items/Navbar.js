import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles/items/navbar';
import MenuButton from '../items/buttons/MenuButton';
import BackButton from '../items/buttons/BackButton';

const Navbar = ({ title, navigation, goBack }) => (
  <View style={styles.container}>
    {goBack ? <BackButton onPress={() => navigation.goBack()} /> :
    <MenuButton onPress={() => navigation.navigate('DrawerOpen')} />
  }
    <Text style={styles.text}>{title}</Text>
  </View>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  goBack: PropTypes.bool.isRequired,
};

export default Navbar;
