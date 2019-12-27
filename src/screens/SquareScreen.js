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

COLOR_INCREMENT = 15;

setColor = (color, change) => {
    switch (color) {
        case 'red':
            this.props.red + this.COLOR_INCREMENT > 255 || this.props.red < 0 ? null : this.setState({ red: this.state.red + change });
            break;
        case 'green':
            this.props.green + this.COLOR_INCREMENT > 255 || this.props.green < 0 ? null : this.setState({ green: this.state.green + change });
            break;
        case 'blue':
            this.props.blue + this.COLOR_INCREMENT > 255 || this.props.blue < 0 ? null : this.setState({ blue: this.state.blue + change });
            break;
    
        default:
            break;
    }

    
};
    render(){
        return(
            <View>
                <Text> Square screen {this.props.red}</Text>

                < ColorCounter 
                        onIncrease={() => this.setColor('red', this.COLOR_INCREMENT)}
                        onDecrease={() => this.setColor('red', -1 * this.COLOR_INCREMENT)}
                        color="Red" / >
                < ColorCounter
                        onIncrease={() => this.setColor('green', this.COLOR_INCREMENT)}
                        onDecrease={() => this.setColor('green', -1 * this.COLOR_INCREMENT)}
                        
                    color="Green"/ >
                < ColorCounter 
                        onIncrease={() => this.setColor('blue', this.COLOR_INCREMENT)}
                        onDecrease={() => this.setColor('blue', -1 * this.COLOR_INCREMENT)}
                        color="Blue"/ >

                < View style = {
                    {
                        height: 100,
                        width: 100,
                        backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
                    }
                }
                />
                       <Text>
                           `rgb({this.state.red}, {this.state.green}, {this.state.blue})`
                        </Text>     
            </View >

        );
    }
}

const styles = StyleSheet.create({

});