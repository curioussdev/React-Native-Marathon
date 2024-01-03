import { View, Text} from 'react-native';
import React from 'react';
import { Stack } from 'expo-router'

const DayDetailsScreen = () => {
    return(
        <View>
            <Stack.Screen options={{ title: 'Day 1' }} />
            <Text style={{ fontFamily: 'AmaticBold', fontSize: 100}}>
                1 Projecto por dia, este é o objectivo!
            </Text>
        </View>
    )
}

export default DayDetailsScreen;