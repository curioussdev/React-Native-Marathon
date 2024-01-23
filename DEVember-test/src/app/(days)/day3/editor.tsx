import { View, Text} from 'react-native';
import React from 'react';

import Markdown from 'react-native-markdown-display';

const copy = `# h1 Heading 8-)

**This is some bold text!**

This is normal text

`;

const EditorScreen = () => {
    return (
        <View>
            <Markdown>{copy}</Markdown>
        </View>
    );
};

export default EditorScreen;