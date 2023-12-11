import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router'

const Day2 = () => {
    return (
        <View>
            <Stack.Screen options={{ title: 'Day 2' }} />
            <Text>Day 2</Text>

            <Link href="/day2/onboarding" asChild >
                <Button title="Go To Onoarding" />
            </Link>

        </View>
    )
}

export default Day2;