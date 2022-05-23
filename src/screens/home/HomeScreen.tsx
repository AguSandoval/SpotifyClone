import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
    StyleSheet,
    ScrollView,
    Text,
    Animated,
    View,
    Dimensions,
} from "react-native";
import PortraitCarrousel from "../../components/PortraitCarrousel";
import Welcome from "../../components/Welcome";

const { width } = Dimensions.get("window");

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(true),
        opacity = useState(new Animated.Value(0))[0];

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    !isVisible && fadeIn(); // Se dispara cuando el componente Welcome termino su animacion.

    return (
        <View style={style.container}>
            {isVisible ? (
                <Welcome callToAction={setIsVisible} />
            ) : (
                <>
                    <ScrollView contentContainerStyle={style.contentContainer}>
                        <Animated.View style={style.topBar}>
                            <LinearGradient
                                colors={["rgb(29, 185, 84)", "transparent"]}
                                style={style.topBarGradient}
                            />
                            <Text style={{ color: "white", fontSize: 20 }}>
                                TopBar
                            </Text>
                        </Animated.View>
                        <Animated.View
                            style={{
                                opacity,
                                ...style.animatedView,
                            }}
                        >
                            <PortraitCarrousel
                                componentStyle={style.portraitComponent}
                            />
                            <PortraitCarrousel
                                componentStyle={style.portraitComponent}
                            />
                            <PortraitCarrousel
                                componentStyle={style.portraitComponent}
                            />
                            <PortraitCarrousel
                                componentStyle={style.portraitComponent}
                            />
                            <PortraitCarrousel
                                componentStyle={style.portraitComponent}
                            />
                        </Animated.View>
                    </ScrollView>
                    <Animated.View style={{ opacity }}>
                        <LinearGradient
                            colors={[
                                "rgba(0, 0, 0, 0.012)",
                                "rgba(0, 0, 0, 0.9)",
                                "#000",
                            ]}
                            style={style.navigationBar}
                        >
                            <Text style={{ color: "white" }}>Inicio</Text>
                            <Text style={{ color: "white" }}>Buscar</Text>
                        </LinearGradient>
                    </Animated.View>
                </>
            )}
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#131313",
    },
    contentContainer: {
        width: width,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    animatedView: {
        flex: 1,
        width: width,
        justifyContent: "center",
    },
    navigationBar: {
        // backgroundColor: "rgb(29, 185, 84)",
        position: "absolute",
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        width: width,
        height: 90,
        justifyContent: "space-around",
        alignItems: "center",
    },
    topBar: {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        width: width,
        height: 120,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        position: "relative",
        top: -20,
    },
    topBarGradient: {
        width: width,
        height: 120,
        position: "absolute",
        backgroundColor: "transparent",
    },
    portraitComponent: {
        marginLeft: 15,
        marginTop: 15,
    },
});

export default HomeScreen;
