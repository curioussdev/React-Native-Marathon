import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
    return (
        <View>
            <View>
                <Text>Netflix Animation Screen Test</Text>
            </View>
            <LottieView
                style={{ width: "100%", height: "100%", backgroundColor: "#000" }}
                autoPlay={true}
                loop={true}
                source={require('@assets/lotie/netflix.json')}
            />

            </View>
                );
};

                export default AnimationScreen;