import { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
} from "react-native";

const Welcome: React.FC<{ callToAction: (isVisible: boolean) => void }> = ({
    callToAction,
}) => {
    const opacity = useState(new Animated.Value(1))[0];

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            callToAction(false);
        });
    };

    return (
        <Animated.View
            style={{
                opacity,
                ...style.container,
            }}
        >
            <Image
                style={style.logo}
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Spotify.png/768px-Spotify.png",
                }}
            />
            <Text style={style.title}>Bienvenido a Spotify</Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style={style.continueButton}
                onPress={fadeOut}
            >
                <Text style={style.continueButtonText}>Continuar</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 50,
    },
    title: {
        fontSize: 30,
        color: "rgb(29, 185, 84)",
        fontWeight: "bold",
    },
    continueButton: {
        backgroundColor: "rgb(29, 185, 84)",
        borderRadius: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        paddingHorizontal: 30,
        marginVertical: 40,
    },
    continueButtonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 18,
    },
});

export default Welcome;
