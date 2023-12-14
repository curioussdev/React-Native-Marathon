import { Stack } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function OnboardingScreen() {
    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />

            <View >


                <FontAwesome5
                    style={styles.image}
                    name="people-arrows"
                    size={70}
                    color="#CEF202"
                />

                <View style={styles.footer}>
                    <Text style={styles.title}>Track Every Transaction</Text>
                    <Text style={styles.description}>
                        Monitor your spending and see how we help you
                        manage your day-to-day family expenses!
                    </Text>
                </View>
            </View>

        </SafeAreaView>
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
    image: {
        alignSelf: 'center',
        margin: 20,
        letterSpacing: 1.3,
    },
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
    },
    footer: {
        marginTop: 'auto'
    }
})