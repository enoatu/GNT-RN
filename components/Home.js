import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import Button from 'react-native-button';

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Text>Home</Text>
      </Container>
    );
  }
}

const Container = styled.View`
  margin: 10px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
