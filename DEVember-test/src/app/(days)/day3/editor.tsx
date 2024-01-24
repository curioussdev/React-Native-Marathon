import { View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import Markdown from 'react-native-markdown-display';

const copy = `# Simple Markdown Content

This is a paragraph of text in *italics* and **bold**. You can also have inline code like 'print("Hello, World!")'.

## Lists

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- Apple
- Banana
- Orange

## Links

Visit [Google](https://www.google.com) for searching.

## Images

![Alt text](https://placekitten.com/300/200 "A cute kitten")

## Code


`;

const EditorScreen = () => {
    return (
        <ScrollView style={styles.page}>
        <Markdown style={markDownStyles}>{copy}</Markdown>
        </ScrollView>
    );
};

const markDownStyles = StyleSheet.create({
    heading1: {
        fontFamily: 'InterSemi',
        color: '#404040',
        marginTop: 15,
        marginBottom: 10,

        lineHeight: 40,
    },
    heading2: {
        fontFamily: 'InterBold',
        color: '#404040',
        marginTop: 10,
        marginBottom: 5,

        lineHeight: 20, 
    },
    body: {
        fontSize: 16,
        fontFamily: 'Inter',
        lineHeight: 24,
    }
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10
    }
})

export default EditorScreen;