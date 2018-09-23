import React from 'react';

import { View, Text, TextInput, TouchableOpacity }  from 'react-native';

import styles from './styles';

const Welcome = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome</Text>
    <Text style={styles.text}>
      To continue, we need that you enter with username
    </Text>

    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Username"
        underlineColorAndroid="rgba(0, 0, 0, 0)"
      />

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Let`s do it!</Text>
      </TouchableOpacity>
    </View>
  </View>
);

Welcome.navigationOptions = {
  header: null,
};

export default Welcome;
