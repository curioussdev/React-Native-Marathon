import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
    return (
       <View>
            <LottieView
                autoPlay
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: "#000",
                    alignItems: 'center',
                    justifyContent: 'center'
                    
                }}
                source={require('@assets/lotie/netflix.json')}
            />

</View>
    );
};

export default AnimationScreen;