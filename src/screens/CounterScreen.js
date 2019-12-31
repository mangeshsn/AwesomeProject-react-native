import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export default class CounterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <View>
        <Text>Counter Screen</Text>
        <Button
          title="Increase"
          onPress={() => this.setState({count: this.state.count + 1})}
        />
        <Button
          title="Decrease"
          onPress={() => this.setState({count: this.state.count - 1})}
        />
        <Text>Current Count: {this.state.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
