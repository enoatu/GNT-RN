import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Intro extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Intro</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});