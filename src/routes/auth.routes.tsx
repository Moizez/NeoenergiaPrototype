import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from '../styles/theme.json'

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Tour from '../screens/Tour';

const Stack = createStackNavigator()

type AuthRoutesProps = {
    initialRoute: boolean
}

const AuthRoutes = ({ initialRoute }: AuthRoutesProps) => {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={initialRoute ? 'SignIn' : 'Tour'}
        >
            <Stack.Screen name='Tour' component={Tour} />
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen
                name='SignUp'
                component={SignUp}
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