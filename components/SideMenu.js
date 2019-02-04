import * as React from 'react';
import {Text, View, StyleSheet, ViewPropTypes } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';
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
      <Container>
        <Button onPress={() => {Actions.home()}}>
          <Title>Home</Title>
        </Button>
        <Button onPress={() => {Actions.tmpTodo()}}>
          <Title>TODO</Title>
        </Button>
        <Button
          onPress={() => {Actions.daily()}}>
          <Title>Daily</Title>
        </Button>
        <Button
          onPress={() => {Actions.setting()}}>
          <Title>Setting</Title>
        </Button>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-width: 2;
  border-color: #000;
`;

const Title = styled.Text`
  font-weight: bold;
  margin: 20px;
`;
