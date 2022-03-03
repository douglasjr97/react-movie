import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from '../screens/Home';
import { InfoMovie } from '../screens/InfoMovie';
import { Login } from '../screens/Login';
import { SearchMovie } from '../screens/SearchMovie';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                orientation: 'portrait'
            }}
        >
            <Screen name="Login" component={Login} />

            <Screen name="Home" component={Home} />

            <Screen name="SearchMovie" component={SearchMovie} />

            <Screen name="InfoMovie" component={InfoMovie} />
        </Navigator>
    );
}
