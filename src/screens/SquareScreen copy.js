import React, {useReducer} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return {
        ...state,
        red: state.red + action.amount,
      };
      break;
    case 'green':
      return {
        ...state,
        green: state.green + action.amount,
      };
      break;
    case 'blue':
      return {
        ...state,
        blue: state.blue + action.amount,
      };
      break;
    default:
      return state;
  }
};
const [state, dispatch] = useReducer(reducer, {
  red: 0,
  blue: 0,
  green: 0,
});

export default class SquareScreen extends React.Component {
  render() {
    return (
      <View>
        <ColorCounter
          onIncrease={() =>
            dispatch({
              colorToChange: 'red',
              amount: COLOR_INCREMENT,
            })
          }
          onDecrease={() =>
            dispatch({
              colorToChange: 'red',
              amount: -1 * COLOR_INCREMENT,
            })
          }
          color="Red"
        />
        <ColorCounter
          onIncrease={() =>
            dispatch({
              colorToChange: 'green',
              amount: COLOR_INCREMENT,
            })
          }
          onDecrease={() =>
            dispatch({
              colorToChange: 'green',
              amount: -1 * COLOR_INCREMENT,
            })
          }
          color="Green"
        />
        <ColorCounter
          onIncrease={() =>
            dispatch({
              colorToChange: 'blue',
              amount: COLOR_INCREMENT,
            })
          }
          onDecrease={() =>
            dispatch({
              colorToChange: 'blue',
              amount: -1 * COLOR_INCREMENT,
            })
          }
          color="Blue"
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
          }}
        />{' '}
        <Text>
          `rgb({state.red}, {state.green}, {state.blue})`{' '}
        </Text>{' '}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
