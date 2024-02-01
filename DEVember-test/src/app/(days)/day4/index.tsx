import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { MarkDownDisplay } from '@/components/day3/MarkDownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Netflix Animated Spalsh SCreen
`;

const Day3 = () => {
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: 'Day 4: Splsh Screen' }} />

            <MarkDownDisplay>{description}</MarkDownDisplay>

            <Link href="/day4/animation" asChild >
                <Button title="Ir para animação" />
            </Link>

        </SafeAreaView>
    )
}

export default Day3;