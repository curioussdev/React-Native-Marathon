import { View, Text, StyleSheet} from 'react-native';
import React from 'react';

import Markdown from 'react-native-markdown-display';

const copy = `# h1 Heading 8-)

**This is some bold text!**

This is normal text

`;

const EditorScreen = () => {
    return (
        <View style={styles.page}>
            <Markdown>{copy}</Markdown>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
})

export default EditorScreen;