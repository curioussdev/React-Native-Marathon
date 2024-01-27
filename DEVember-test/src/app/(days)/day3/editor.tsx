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
            <View style={styles.tabsContainer}>

                <View style={styles.tab}>
                    <Text style={styles.tabText}>Edit</Text>
                </View>
                
                <View style={styles.tab}>
                    <Text style={styles.tabText}>Preview</Text>
                </View>
            </View>

            <TextInput 
                value={content} 
                multiline 
                numberOfLines={50}
                style={styles.input}
                onChangeText={setContent}
                />

            {/*<MarkDownDisplay>{content}</MarkDownDisplay>*/}
        </View>
    );
};


const styles = StyleSheet.create({
    page: {
        backgroundColor: 'whitesmoke',
        flex: 1,
        padding: 10,
        
    },

    input: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
        borderRadius: 10,
        fontSize: 16
    },
    tabsContainer: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 10,
    },
    tab: {
        flex: 1,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center'
    },
    tabText: {
        fontFamily: 'InterBold',
    },
});

export default EditorScreen;