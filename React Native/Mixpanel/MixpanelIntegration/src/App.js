import React, { useState } from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import Mixpanel from 'mixpanel-react-native';

const App = _props => {
    const initMixpanel = async () => {
        const mixpanel = await Mixpanel.init('f5cdb449a8d5e57579010b7da2749d99');
        mixpanel.optInTracking({'Name': 'Test'});
        mixpanel.identify('12345');
        mixpanel.track('TrackEvent', {'Status': 'Pending', 'Order': '123ABDC', 'Device':'Galaxy'});
        mixpanel.people.set('Plan', 'AAA');
    }

    useState(() => {
        initMixpanel();
    }, []);

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            <View>
                <Button title='Press'/>
            </View>
        </SafeAreaView>
    )
}

export default App;