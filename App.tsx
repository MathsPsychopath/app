import React from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import {
    useFonts,
    Barlow_400Regular,
    Barlow_400Regular_Italic,
    Barlow_500Medium,
    Barlow_500Medium_Italic,
    Barlow_700Bold,
    Barlow_700Bold_Italic,
} from '@expo-google-fonts/barlow';

import theme from './ui/theme';
import LoginScreen from './authentication/LoginScreen';

const App = function () {
    const [loaded] = useFonts({
        Barlow_400Regular,
        Barlow_400Regular_Italic,
        Barlow_500Medium,
        Barlow_500Medium_Italic,
        Barlow_700Bold,
        Barlow_700Bold_Italic,
    });

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
