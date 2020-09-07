import React from 'react';
import {View, Text, StyleSheet, Button, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default props => {
    const {children, avancar, navigation, voltar} = props;

    const styles = StyleSheet.create({
        Container: {
            flex: 1,
        },
        ContainerButton: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        ButtonAction: {
            width: windowWidth / 2,
        },
        BottomView: {
            flex: 1,
        },
    });

    return (
        <View style={styles.Container}>
            <View style={styles.ContainerButton}>
                {
                    voltar ? <Button style={styles.ButtonAction} title={'Voltar'} onPress={() => {
                        navigation.goBack()
                    }}/> : false
                }
                {
                    avancar ? <Button style={styles.ButtonAction} title={'Avançar'} onPress={() => {
                        navigation.navigate(avancar)
                    }}/> : false
                }
                {
                /*
                    avancar ? <Button style={styles.ButtonAction} title={'Avançar'} onPress={() => {
                        navigation.push(avancar)
                    }}/> : false
                */    
                }
            </View>
            <View style={styles.BottomView}>
                {children}
            </View>
        </View>
    )
}

