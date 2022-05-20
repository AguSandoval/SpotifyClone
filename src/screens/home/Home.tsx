import { useEffect, useState } from "react";
import {
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    Animated,
} from "react-native";
import Welcome from "../../components/Welcome/Welcome";

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(true),
        opacity = useState(new Animated.Value(0))[0];

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    !isVisible && fadeIn();

    return (
        <ScrollView
            style={style.container}
            contentContainerStyle={style.contentContainer}
        >
            {isVisible && <Welcome callToAction={setIsVisible} />}

            <Animated.View
                style={{
                    opacity,
                }}
            >
                <Text style={style.title}>Hola</Text>
            </Animated.View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#131313",
    },
    contentContainer: {
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

export default Home;
