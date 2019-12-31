import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

export default class ImageScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello text</Text>
        <ImageDetail title="Reusable component" />
        <ImageDetail title="Reusable component #1" />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
