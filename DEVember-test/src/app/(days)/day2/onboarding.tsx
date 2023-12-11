import { Stack } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function OnboardingScreen() {
    return (
        <View style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />

            <FontAwesome5 name="people-arrows" size={24} color="#FFDA11" />


            <Text style={styles.title}>Track Every Transaction</Text>
            <Text style={styles.description}>
            Monitor your spending and see how we help you 
            manage your day-to-day family expenses!
                </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    page: {
        // alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#15141a',

        padding: 20
    },
    image: {},
    title: {
        color: '#fdfdfd',
        fontSize: 26,
        fontFamily: 'InterBold',
        letterSpacing: 1.3,
    },
    description: {
        color: 'gray',
        fontSize: 18,
        fontFamily: 'Inter',
    }
})