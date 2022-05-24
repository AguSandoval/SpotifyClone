import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const BottomBar = ({navigation}: any) => {
    return (
        <LinearGradient
            colors={["rgba(0, 0, 0, 0.012)", "rgba(0, 0, 0, 0.9)", "#000"]}
            style={style.container}
        >
            <TouchableOpacity
                style={style.buttonContainer}
                onPress={() => {
                    navigation?.navigate("Home");
                }}
            >
                <Foundation name="home" size={30} color="white" />
                <Text style={style.buttonText}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonContainer}>
                <AntDesign name="search1" size={30} color="white" />
                <Text style={style.buttonText}>Buscar</Text>
            </TouchableOpacity>
        </LinearGradient>
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
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "500",
    },
});

export default BottomBar;
