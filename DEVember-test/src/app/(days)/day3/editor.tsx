import { View, Text, StyleSheet, FlatList} from 'react-native';
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
        <View style={styles.page}>
            <Markdown style={markDownStyles}>{copy}</Markdown>
        </View>
    );
};

const markDownStyles = StyleSheet.create({
    heading1: {
        fontSize: 40,
        fontFamily: 'InterBlack'
        
    },
    heading2: {
        fontFamily: 'InterBold',
        color: 'gray'
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