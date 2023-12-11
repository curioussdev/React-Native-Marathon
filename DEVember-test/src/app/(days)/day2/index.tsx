import { View, Text} from 'react-native';
import React from 'react';
import { Stack } from 'expo-router'

const Day2 = () => {
    return(
        <View>
            <Stack.Screen options={{ title: 'Day 2' }} />
            <Text>Day 2</Text>
        </View>
    )
}

export default Day2;