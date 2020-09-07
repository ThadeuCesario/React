import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './Stack';


export default props => {
    return (
        <SafeAreaView style={styles.Container}>
            <NavigationContainer>
                <Stack />
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    }
});