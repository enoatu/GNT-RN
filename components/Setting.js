import * as React from 'react';
import {Text, View, StyleSheet, AsyncStrage, Alert} from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import Button from 'react-native-button';

export default class SideMenu extends React.Component {
  delete() {
    const answer = this.question('ちょっとあつくね?', 'はい');
    async() => {
      answer && await AsyncStorage.clear();
    }
  }
  question(title, msg) {
    Alert.alert(
      title,
      msg,
      [
        {text: 'OK', onPress: () => {return true}},
        {
          text: 'Cancel',
          onPress: () => {return false},
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }
  render() {
    return (
      <InLineBox>
      <TitleBox>
        <Title>all data </Title>
      </TitleBox>
      <Button onPress={() => this.delete()}>delete</Button>
      </InLineBox>
    );
  }
}
const Title = styled.Text`
  font-size: 20;
`;
const TitleBox = styled.View`
  justify-content: center;
  align-items: center;
  width: 250;
`;
const Btn = styled.Button`
  width: 50;
`;
const InLineBox = styled.View`
  flex-direction: row;
  width: 300;
`;
