import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default class ImageDetail extends React.Component{

render(){
    return(
        <View>
            <Text>{this.props.title}</Text>
        </View>

    );
}

}
const styles = StyleSheet.create({

});