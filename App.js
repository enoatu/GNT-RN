import * as React from 'react';
import PropTypes from 'prop-types'
import {Text, View, StyleSheet, ViewPropTypes } from 'react-native';
import { Constants } from 'expo';
import {
  Router,
  Scene,
  Drawer,
  DrawerContent,
  Actions,
} from 'react-native-router-flux';
import Button from 'react-native-button';
import Home from './components/Home.js';
import Intro from './components/Intro.js';

const propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string,
  };

const ontextTypes = {
    drawer: PropTypes.object,
  };
export default class App extends React.Component {  
  onRenderDrawerContent() {
    return (
      <View>
        <Button onPress={() => {Actions.home()}}>
          <Text>home</Text>
        </Button>
        <Button
          onPress={() => {Actions.intro()}}>
          <Text>next</Text>
        </Button>
      </View>
    );
  }
  onRenderRouter() {
    return (
      <Router>
        <Scene key="root" hideNavBar={false}>
          <Drawer
            key="drawer"
            drawerWidth={300}
            contentComponent={this.onRenderDrawerContent()}
            styles={{ backgroudColor: '#ff0' }}>
            <Scene key="home" title="home" component={Home} />
            <Scene key="intro" title="intro" component={Intro} />
          </Drawer>
        </Scene>
      </Router>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.onRenderRouter()}
        <Text>Homee</Text>
      </View>
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
