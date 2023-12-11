import { Stack } from 'expo-router';


export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: '#e8d3c2' }
            }}
        >

            <Stack.Screen name='index' options={{ title: 'DEVember' }}/>
        </Stack>
    )
}