import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import List from './src/screens/List';
import ImageScreen from './src/screens/ImageScreen';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('List')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.navigate('ImageScreen')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  List: List,
  ImageScreen: ImageScreen,
});

export default createAppContainer(RootStack);