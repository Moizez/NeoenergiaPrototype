import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home';

const Stack = createStackNavigator()

const AppRoutes = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    )
}

export default AppRoutes