import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
    StyleSheet,
    ScrollView,
    Animated,
    View,
    Dimensions,
} from "react-native";
import PortraitCarrousel from "../../components/PortraitCarrousel";
import Welcome from "../../components/Welcome";
import TopBar from "../../components/TopBar";
import BottomBar from "../../components/BottomBar";

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
                        <Animated.View style={{ opacity }}>
                            <TopBar />
                        </Animated.View>
                        <Animated.View
                            style={{
                                opacity,
                                ...style.animatedView,
                            }}
                        >
                            {/* En Spotify se renderiza según la actividad del usuario, aquí sólo renderizaremos 5 */}
                            <PortraitCarrousel
                                componentStyle={style.portraitComponent}
                                navigation={navigation}
                            />
                            <PortraitCarrousel
                                componentStyle={style.portraitComponent}
                                navigation={navigation}
                            />
                            <PortraitCarrousel
                                componentStyle={style.portraitComponent}
                                navigation={navigation}
                            />
                            <PortraitCarrousel
                                componentStyle={style.portraitComponent}
                                navigation={navigation}
                            />
                            <PortraitCarrousel
                                componentStyle={style.portraitComponent}
                                navigation={navigation}
                            />
                        </Animated.View>
                    </ScrollView>
                    <Animated.View style={{ opacity }}>
                        <BottomBar />
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
        paddingBottom: 120,
    },
    portraitComponent: {
        marginLeft: 15,
        marginTop: 15,
    },
});

export default HomeScreen;
