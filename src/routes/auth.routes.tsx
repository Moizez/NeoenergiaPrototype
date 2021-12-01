import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from '../styles/theme.json'

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TourScreen from '../screens/TourScreen';

const Stack = createStackNavigator()

type AuthRoutesProps = {
    initialRoute: boolean
}

const AuthRoutes = ({ initialRoute }: AuthRoutesProps) => {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={initialRoute ? 'SignInScreen' : 'TourScreen'}
        >
            <Stack.Screen name='Tour' component={TourScreen} />
            <Stack.Screen name='SignInScreen' component={SignInScreen} />
            <Stack.Screen
                name='SignUpScreen'
                component={SignUpScreen}
                options={{
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: colors.light
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthRoutes