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
import TmpTodo from './components/TmpTodo';
import Intro from './components/Intro';
import Setting from './components/Setting';
import SideMenu from './components/SideMenu';
import Daily from './components/Daily';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root"
          hideNavBar={true}
        >
          <Drawer
            key="drawer"
            drawerWidth={300}
            contentComponent={SideMenu}
            swipeEnabled={true}
            styles={{backgroudColor: '#ff0'}}
          >
            <Scene
              key="home"
              title="home"
              component={Home}
              titleStyle={styles.drawerTitle}
            />
            <Scene
              key="tmpTodo"
              title="tmpTodo"
              initial
              component={TmpTodo}
              titleStyle={styles.drawerTitle}
            />
            <Scene
              key="daily"
              title="daily"
              component={Daily}
              titleStyle={styles.drawerTitle}
            />
            <Scene
              key="setting"
              title="setting"
              component={Setting}
              titleStyle={styles.drawerTitle}
            />
          </Drawer>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  drawerTitle: {
    margin: 100,
    fontSize:10,
    color: '#0f0',
  },
});
