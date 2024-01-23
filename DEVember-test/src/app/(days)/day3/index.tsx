import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router'

const Day3 = () => {
    return (
        <View>
            <Stack.Screen options={{ title: 'Day 3: Markdown' }} />
            <Text>Day 3</Text>

            <Link href="/day3/editor" asChild >
                <Button title="Go To Editor" />
            </Link>

        </View>
    )
}

export default Day3;