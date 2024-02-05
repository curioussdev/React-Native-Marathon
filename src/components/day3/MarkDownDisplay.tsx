import { View, Text, StyleSheet, ScrollView} from 'react-native';
import React, { PropsWithChildren } from 'react';

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

- To add an image: ![Alt text](https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=1024x1024&w=is&k=20&c=JHHxZ25gIwgBtYyFxziTFrOuilyogTzs5KQKBhsaZhE=)
- to create a link '[Linkedin](https://www.linkedin.com/)'


## Code

\`\`\`javascript
// JavaScript party trick
function partyTime() {
    console.log("Let's dance 💃🕺!");
}
\`\`\`


This is a paragraph of text in *italics* and **bold**. You can also have inline code like 'print("Hello, World!")'.

## Lists

### Ordered List

1. First item
2. Second item
3. Third item


`;

export const MarkDownDisplay = ({ children }: PropsWithChildren) => {
    return (
        <ScrollView style={styles.page}
            contentInsetAdjustmentBehavior='automatic'
        >
        <Markdown style={markDownStyles}>{children}</Markdown>
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

        
    },
    body: {
        fontSize: 16,
        fontFamily: 'Inter',
        lineHeight: 24,
        paddingBottom: 10
    }
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
        paddingBottom: 10,
        borderRadius: 10,
    }
});

