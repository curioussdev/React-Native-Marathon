import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
    return (
        <View>
            <LottieView
                autoPlay
                style= {{
                    width: 200,
                    height: 200,
                    backgroundColor: "#eee",
                    alignSelf: 'center',
                    marginTop: 20,
                }}
                source={}
            >
                Netflix Animation Screen Test
            
            </LottieView>
        </View>
    );
};

export default AnimationScreen;