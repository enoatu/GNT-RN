import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';
import Button from 'react-native-button';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todo: [
       { title: '掃除' },
       { title: '英語勉強' },
      ]
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    this.state.todo.push({
      title: this.state.input
    });
    this.setState({
      input: '',
      todo : this.state.todo,
    });
  }

  deleteTodo(index) {
    this.state.todo.splice(index, 1);
    this.setState({
      todo : this.state.todo
    });
  }

  onRenderTodo() {
    return (
      <ScrollView contentContainerStyle={ScrollStyle}>
        <ScrollContainer>
          {this.state.todo.map((todo, i) => (
             <Li key={i}>
               <TitleBox>
                 <Title>{todo.title}</Title>
               </TitleBox>
               <DelBtn onPress={() => this.deleteTodo(i)} title='x' />
              </Li>
          ))}
          </ScrollContainer>
      </ScrollView>
    );
  }

  render() {
    return (
      <Container>
        {this.onRenderTodo()}
        <InputBox>
          <Input onChangeText={(text) => this.setState({input:text})} value={this.state.input}/>
          <AddBtn onPress={() => this.state.input && this.addTodo()} title='追加' />
        </InputBox>
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
const ScrollStyle = css`
  background-color: blue;
`;
const ScrollContainer = styled.View`
  flex: 1;
  align-self: stretch;
`;
const Title = styled.Text`
  font-size: 20;
`;
const TitleBox = styled.View`
  justify-content: center;
  align-items: center;
  width: 250;
`;
const DelBtn = styled.Button`
  width: 50;
`;
const H1 = styled.Text`
  font-size: 30px;
`;
const Li = styled.View`
  flex-direction: row;
  width: 300;
`;
const Input = styled.TextInput`
  border-color: #000;
  border-width: 2;
  width: 300;
  height: 40;
`;
const AddBtn = styled.Button`
  width: 50;
  border-color: blue;
`;
const InputBox = styled.View`
  display: flex;
  bottom: 40;
  width: 300;
`;
