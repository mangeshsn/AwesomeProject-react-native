import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';


export default class SquareScreen extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        red: 0,
        green: 0,
        blue: 0
    };
}

    render(){
        return(
            <View>
                <Text> Square screen {this.props.red}</Text>

                < ColorCounter 
                        onIncrease={() => this.setState({ red: this.state.red + 10 })}
                        onDecrease={() => this.setState({ red: this.state.red - 10 })}
                        color="Red" / >
                < ColorCounter
                        onIncrease={() => this.setState({ green: this.state.green + 10 })}
                        onDecrease={() => this.setState({ green: this.state.green - 10 })}
                        
                    color="Green"/ >
                < ColorCounter 
                        onIncrease={() => this.setState({ blue: this.state.blue + 10 })}
                        onDecrease={() => this.setState({ blue: this.state.blue - 10 })}
                        color="Blue"/ >

                < View style = {
                    {
                        height: 100,
                        width: 100,
                        backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
                    }
                }
                />
                            
            </View >
        );
    }
}

const styles = StyleSheet.create({

});