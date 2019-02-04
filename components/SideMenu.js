import * as React from 'react';
import {Text, View, StyleSheet, ViewPropTypes } from 'react-native';
import {
  Router,
  Scene,
  Drawer,
  Actions,
} from 'react-native-router-flux';
import Button from 'react-native-button';

export default class SideMenu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => {Actions.home()}}>
          <Text>home</Text>
        </Button>
        <Button
          onPress={() => {Actions.setting()}}>
          <Text>next</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
  },
});
