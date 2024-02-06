import { View, Text, requireNativeComponent } from "react-native";
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
    return (
        <View>
            <LottieView
            
                autoPlay
             
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#000',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('@assets/lotie/animation.json')}
            />
        </View>
    );
};

export default AnimationScreen;