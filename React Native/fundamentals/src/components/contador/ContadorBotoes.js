import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

export default props => {
    
    const {inc, dec} = props;

    console.warn(inc);
    
    return(
        <React.Fragment>
            <View style={style.ContainerButton}>
                <Button title="+" onPress={inc} style={style.StyleButton}/>
                <Button title="-" onPress={dec} style={style.StyleButton}/>
            </View>
        </React.Fragment>
    );
}

const style = StyleSheet.create({
    ContainerButton:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 30
    },
})