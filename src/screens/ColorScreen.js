import React from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
import {Avatar} from '@material-ui/core';

export default class ColorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomRgb: ['rgb(140, 255, 0)'],
    };
  }

  rgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return [...this.state.randomRgb, `rgb(${red}, ${green}, ${blue})`];
  };
  render() {
    return (
      <View>
        <Text>Color Screen</Text>

        <Button
          title="Add a Color"
          onPress={() => this.setState({randomRgb: this.rgb()})}
        />

        <FlatList
          keyExtractor={item => item}
          data={this.state.randomRgb}
          renderItem={({item}) => {
            return (
              <View style={{height: 100, width: 100, backgroundColor: item}} />
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
