import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
    return (
        <View>
            <View>
                <Text>Netflix Animation Screen Test</Text>
            </View>
            <LottieView

                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('@assets/lottie/netflix.json')}
            />

        </View>
    );
};

export default AnimationScreen;