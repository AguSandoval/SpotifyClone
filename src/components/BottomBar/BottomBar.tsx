import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const BottomBar = () => {
    return (
        <View>
            <LinearGradient
                colors={["rgba(0, 0, 0, 0.012)", "rgba(0, 0, 0, 0.9)", "#000"]}
                style={style.container}
            >
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Foundation name="home" size={35} color="white" />
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "500",
                        }}
                    >
                        Inicio
                    </Text>
                </View>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <AntDesign name="search1" size={35} color="white" />
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "500",
                        }}
                    >
                        Buscar
                    </Text>
                </View>
            </LinearGradient>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        width: width,
        height: 90,
        justifyContent: "space-around",
        alignItems: "center",
    },
});

export default BottomBar;
