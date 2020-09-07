import React from 'react';
import {View, Button} from 'react-native';
import TextoCentral from '../components/TextoCentral';

export default props => {
    /**
     * Temos acesso ao método navigation, porque em nosso arquivo Drawer estamos passando diretamente
     * a nossa tela para o componente. 
     * O proprio react navigation, será responsável por passar o props.navigation.
     */
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button title='Abrir' onPress={() => {
                    props.navigation.openDrawer();

                    setTimeout(() => {
                        props.navigation.closeDrawer();
                        setInterval(() => {
                            props.navigation.toggleDrawer();
                        }, 500)
                    }, 5000);
                }}/>
            </View>
            <View style={{flex: 1}}>
                <TextoCentral bgColor='#33fa72' textColor={'#000'}>
                    Tela D
                </TextoCentral>
            </View>
        </View>
    )
}