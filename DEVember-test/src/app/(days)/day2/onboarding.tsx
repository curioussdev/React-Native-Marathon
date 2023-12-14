import { Stack } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function OnboardingScreen() {
    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.pageContent}>


                <FontAwesome5
                    style={styles.image}
                    name="people-arrows"
                    size={100}
                    color="#CEF202"
                />

                <View style={styles.footer}>
                    <Text style={styles.title}>Track Every Transaction</Text>
                    <Text style={styles.description}>
                        Monitor your spending and see how we help you
                        manage your day-to-day family expenses!
                    </Text>

                    <View style={styles.buttonsRow}>
                        <Text style={styles.buttonText}>Skip</Text>

                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </Pressable>
                    </View>
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
    pageContent: {
        padding: 20,
        flex: 1,

    },
    image: {
        alignSelf: 'center',
        margin: 20,
        letterSpacing: 1.3,
    },
    title: {
        color: '#fdfdfd',
        fontSize: 40,
        fontFamily: 'InterBold',
        letterSpacing: 1.3,
        marginVertical: 10,
    },
    description: {
        color: 'gray',
        fontSize: 19,
        fontFamily: 'Inter',
        lineHeight: 28
    },
    footer: {
        marginTop: 'auto'
    },

    buttonsRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    button: {
        backgroundColor: '#302E38',
        //padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        flex: 1,

    },
    buttonText: {
        color: '#FDFDFD',
        fontFamily: 'InterSemi',
        fontSize: 16,
        
        padding: 15,
        paddingHorizontal: 25

    },

})  