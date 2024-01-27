import { View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import React, { Children, useState } from 'react';

import Markdown from 'react-native-markdown-display';
import { MarkDownDisplay } from '@/components/day3/MarkDownDisplay';

const template = `# Markdown Editor

Hello **World**!

`;

const EditorScreen = () => {
    const [content, setContent ] = useState(template)
    return (
        <View style={styles.page}>
            <TextInput value={content} multiline />

            {/*<MarkDownDisplay>{content}</MarkDownDisplay>*/}
        </View>
    );
};


const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
        paddingBottom: 10,
    }
});

export default EditorScreen;