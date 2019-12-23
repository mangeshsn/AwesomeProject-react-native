import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
} from 'react-native';

function Separator() {
    return <View style={styles.separator} />;
}

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Button
                    title="Goto Home"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
                <Separator />
                <Button
                    title="Flat Lists"
                    onPress={() => this.props.navigation.navigate('List')}
                />
                <Separator />
                <Button
                    title="Reusable Component"
                    onPress={() => this.props.navigation.navigate('ImageScreen')}
                />
                <Separator />
                <Button
                    title="Counter"
                    onPress={() => this.props.navigation.navigate('Counter')}
                />
                <Separator />
                <Button
                    title="Add Color"
                    onPress={() => this.props.navigation.navigate('AddColor')}
                />
            </View>
        );
    }

    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
