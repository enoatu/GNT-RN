import * as React from 'react';
import {Text, View, StyleSheet, ViewPropTypes } from 'react-native';
import { Constants } from 'expo';
import {
  Router,
  Scene,
  Drawer,
  Actions,
} from 'react-native-router-flux';
import Button from 'react-native-button';
import Home from './components/Home';
import Intro from './components/Intro';
import Setting from './components/Setting';
import SideMenu from './components/SideMenu';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Drawer
            key="drawer"
            drawerWidth={300}
            contentComponent={SideMenu}
            styles={{ backgroudColor: '#ff0' }}
          >
            <Scene key="home" title="home" component={Home} />
            <Scene key="setting" title="setting" component={Setting} />
          </Drawer>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'red',
  },
});
