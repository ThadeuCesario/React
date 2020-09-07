import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default props => {
    const {children, avancar, navigation} = props;

    const styles = StyleSheet.create({
        Container: {
            flex: 1,
        },
        BottomView: {
            flex: 1,
        },
    });

    return (
        <View style={styles.Container}>
            <View>
                {
                    avancar ? <Button title={'Avançar'} onPress={() => {
                        navigation.navigate(avancar)
                    }}/> : false
                }
            </View>
            <View style={styles.BottomView}>
                {children}
            </View>
        </View>
    )
}

