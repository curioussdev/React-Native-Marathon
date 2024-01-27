import { View, Text, StyleSheet, ScrollView, TextInput, Pressable} from 'react-native';
import React, { Children, useState } from 'react';

import Markdown from 'react-native-markdown-display';
import { MarkDownDisplay } from '@/components/day3/MarkDownDisplay';

const template = `# Markdown Editor

Hello **World**!

`;

const EditorScreen = () => {
    const [content, setContent ] = useState(template);
    const [ tab, setTab] = useState('edit');
    return (
        <View style={styles.page}>
            <View style={styles.tabsContainer}>

                <Pressable onPress={() => setTab('edit')} 
                style={[styles.tab, { backgroundColor: tab === 'edit' ? 'gray' : 'white'}, ]}>
                    <Text style={styles.tabText}>Edit</Text>
                </Pressable>
                
                <Pressable onPress={() => setTab('preview')}
                style={[styles.tab, { backgroundColor: tab === 'preview' ? 'gray' : 'white'}]}>
                    <Text style={styles.tabText}>Preview</Text>
                </Pressable>
            </View>

            { tab === 'edit' ? (
                <TextInput 
                value={content} 
                multiline 
                numberOfLines={50}
                style={styles.input}
                onChangeText={setContent}
                />
            ) : (<MarkDownDisplay>{content}</MarkDownDisplay>) }

            

            {/**/}
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