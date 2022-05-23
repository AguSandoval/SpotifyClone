import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { EvilIcons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;

const TopBar = () => {
    return (
        <View style={style.topBar}>
            <LinearGradient
                colors={["rgb(29, 185, 84)", "transparent"]}
                style={style.topBarGradient}
            />
            <EvilIcons
                name="gear"
                size={40}
                color="white"
                style={{ marginRight: 10 }}
            />
        </View>
    );
};

const style = StyleSheet.create({
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
});

export default TopBar;
