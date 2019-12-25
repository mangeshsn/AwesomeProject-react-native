import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default class ColorCounter extends React.Component{



render(){
    return(
        <View>
            <Text>{this.props.color}</Text>
            <Button onPress={()=> this.props.onIncrease()} title={`Increase ${this.props.color}`}></Button>
            <Button onPress={()=> this.props.onDecrease()} title={`Decrease ${this.props.color}`}></Button>

        </View>

    );
}

}
const styles = StyleSheet.create({

});