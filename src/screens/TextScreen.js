import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

export default class TextScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.name}
          onChangeText={newValue => this.setState({name: newValue})}
        />
        <Text>Whatever you type appears here: {this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
