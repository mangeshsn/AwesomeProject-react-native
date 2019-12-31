import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class BoxScreen extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    //parent properties
    //alignItems: 'flex-start', values: center, strech etc.
    //flexDirection: 'column',  values: column, row etc
    //justifyContent: 'center', values: space-between, space-around
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'flex-end',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 1,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
});
