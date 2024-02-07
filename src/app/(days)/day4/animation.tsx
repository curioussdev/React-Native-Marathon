import React from "react";
import LottieView from "lottie-react-native";

function AnimationScreen() {
    return (
        <LottieView
            source={require("@assets/lotie/netflix.json")}
            style={{ width: "100%", height: "100%" }}
            autoPlay
            loop
                    />
    );
}

export default AnimationScreen;