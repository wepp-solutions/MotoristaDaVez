import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

const StackRoute = createStackNavigator()

export const Routes = () => (
    <NavigationContainer >
        <StackRoute.Navigator>
            <StackRoute.Screen 
                name="Home" 
                options={{ headerShown: false }} 
                component={Home}
            />
            <StackRoute.Screen 
                name="Dashboard" 
                options={{ headerShown: false }} 
                component={Dashboard}
            />
        </StackRoute.Navigator>
    </NavigationContainer>
)