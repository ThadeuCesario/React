import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import TextoCentral from './components/TextoCentral';

export default props => {
    return (
        <SafeAreaView style={styles.Container}>
            <TextoCentral>Texto Central</TextoCentral>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    }
});
