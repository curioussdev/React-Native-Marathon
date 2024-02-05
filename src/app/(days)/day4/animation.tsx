import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
    return (
        <View>
            <LottieView
            source={require('../../../../assets/lotie/netflix.json')}
                autoPlay
                loop={true}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: "#eee",
                    
                }}
                
            />

        </View>
    );
};

export default AnimationScreen;