import React from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { extendTheme, NativeBaseProvider } from 'native-base';
import {
    useFonts,
    Barlow_400Regular,
    Barlow_400Regular_Italic,
    Barlow_700Bold,
    Barlow_700Bold_Italic,
} from '@expo-google-fonts/barlow';

// Screens

import LoginScreen from './authentication/LoginScreen';

const theme = extendTheme({
    fontConfig: {
        Barlow: {
            400: {
                normal: 'Barlow_400Regular',
                italic: 'Barlow_400Regular_Italic',
            },
            700: {
                normal: 'Barlow_700Bold',
                italic: 'Barlow_700Bold_Italic',
            },
        },
    },

    fonts: {
        heading: 'Barlow',
        body: 'Barlow',
        mono: 'Barlow',
    },
});

const App = function () {
    const [loaded] = useFonts({ Barlow_400Regular, Barlow_400Regular_Italic, Barlow_700Bold, Barlow_700Bold_Italic });

    const handleLayout = () => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    };

    if (!loaded) {
        return null;
    }

    return (
        <View style={{ flex: 1 }} onLayout={handleLayout}>
            <NativeBaseProvider config={{ strictMode: 'error' }} theme={theme}>
                <LoginScreen />
                <StatusBar style="auto" />
            </NativeBaseProvider>
        </View>
    );
};

export default App;
