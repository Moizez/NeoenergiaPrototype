import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { colors } from '../styles/theme.json'

import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator()

const MainTab: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.light,
                tabBarStyle: {
                    backgroundColor: colors.dark,
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='home' color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen
                name='Services'
                component={ServicesScreen}
                options={{
                    tabBarLabel: 'Desafio',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='calendar-check' color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen
                name='Settings'
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Mais',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='dots-vertical' color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTab;