import { Stack, Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler'


const onboardingSteps = [
    {
        icon: 'snowflake',
        title: 'Welcome #DEVember',
        description: ' Daily React Native Matathon during December!',
    },
    {
        icon: 'codepen',
        title: 'Learing everyday',
        description: 'Leanr by building 24 projects with React native and expo'
    },
    {
        icon: 'code',
        title: 'Lets Code',
        description: 'development is achieved with small efforts every day'
    },
];

export default function OnboardingScreen() {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1
        if (isLastScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex + 1);
        }
    };

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back()
    };

    const fling = Gesture.Fling()
    .direction(Directions.RIGHT | Directions.LEFT)
    .onBegin((event) => {
        console.log('FLING start', event.state)
    })
    .onEnd((event) => {
        console.log('Fling end', event.state);
        onContinue()
    });

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style='light' />

            <View style={styles.stepIndicatorContainer}>
                {onboardingSteps.map((step, index) => (
                    <View style={[
                        styles.stepIndicator,
                        { backgroundColor: index === screenIndex ? '#CEF202' : 'gray' }]} />
                ))}
            </View>
            <GestureDetector gesture={fling}>
                <View style={styles.pageContent}>
                    <FontAwesome5
                        style={styles.image}
                        name={data.icon}
                        size={100}
                        color="#CEF202"
                    />

                    <View style={styles.footer}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.description}>{data.description}</Text>

                        <View style={styles.buttonsRow}>
                            <Text onPress={endOnboarding} style={styles.buttonText}>Skip</Text>

                            <Pressable onPress={onContinue} style={styles.button}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </GestureDetector>

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
        marginTop: 70
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
    // steps

    stepIndicatorContainer: {
        flexDirection: 'row',
        gap: 5,
        marginVertical: 25
    },

    stepIndicator: {
        flex: 1,
        height: 3,
        backgroundColor: 'gray',

        borderRadius: 10
    }



})  