import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { MarkDownDisplay } from '@/components/day3/MarkDownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Markdown

Integrate Markdown Content in **React Native**

📚 Today's Agenda:
- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
`;

const Day3 = () => {
    return (
        <SafeAreaView edges={['bottom']}  style={{ flex: 1}}>
            <Stack.Screen options={{ title: 'Day 3: Markdown' }} />
 
            <MarkDownDisplay>{description}</MarkDownDisplay>

            <Link href="/day3/editor" asChild >
                <Button title="Go To Editor" />
            </Link>

        </SafeAreaView>
    )
}

export default Day3;