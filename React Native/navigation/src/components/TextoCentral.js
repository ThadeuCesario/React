import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default props => {
    const {children, bgColor, textColor} = props;

    const styles = StyleSheet.create({
        Container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: bgColor,
        },
        Text: {
            fontSize: 70,
            color: textColor,
        },
    });

    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>{children}</Text>
        </View>
    )
}

