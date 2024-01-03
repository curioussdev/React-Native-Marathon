import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import {
    useFonts,
    Inter_900Black,
    Inter_600SemiBold,
    Inter_400Regular
} from '@expo-google-fonts/inter';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {

    const [fontsLoaded, fontError] = useFonts({
        InterSemi: Inter_600SemiBold,
        InterBold: Inter_900Black,
        Inter: Inter_400Regular,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1}}>
            <Stack screenOptions={{ headerStyle: { backgroundColor: '#e8d3c2' } }}>
                <Stack.Screen name='index' options={{ title: '100 DIAS DE REACT NATIVE' }} />
            </Stack>
        </GestureHandlerRootView>
    )
};