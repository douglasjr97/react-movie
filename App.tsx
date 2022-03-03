import React from 'react';
import {
    useFonts,
    Lato_400Regular,
    Lato_700Bold
} from '@expo-google-fonts/lato';
import {
    Economica_400Regular,
    Economica_700Bold
} from '@expo-google-fonts/economica';

import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/theme';
import { AppRoutes } from './src/routes/App.routes';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationProvider } from './src/hooks/useNavigation';

export default function App() {
    let [fontsLoaded] = useFonts({
        Economica_400Regular,
        Economica_700Bold,
        Lato_400Regular,
        Lato_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <NavigationProvider>
                    <AppRoutes />
                </NavigationProvider>
            </NavigationContainer>
        </ThemeProvider>
    );
}
