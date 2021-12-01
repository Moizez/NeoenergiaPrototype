import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import MainTab from './tab.routes';

const Stack = createStackNavigator()

const AppRoutes = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='MainTab'>
            <Stack.Screen name='MainTab' component={MainTab} />
        </Stack.Navigator>
    )
}

export default AppRoutes