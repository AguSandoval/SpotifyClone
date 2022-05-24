import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const width = Dimensions.get("window").width;

const TopBar: React.FC<{ navigation?: any; isBackable?: boolean }> = ({
    navigation,
    isBackable,
}) => {
    const justifyContent = isBackable ? "flex-start" : "flex-end";
    return (
        <View style={{ ...style.topBar, justifyContent }}>
            <LinearGradient
                colors={[
                    isBackable
                        ? "#" +
                          Math.floor(Math.random() * 16777215).toString(16) // Generando color random
                        : "rgb(29, 185, 84)",
                    "transparent",
                ]}
                style={style.topBarGradient}
            />
            <TouchableOpacity
                style={{ marginHorizontal: 20 }}
                onPress={() => {
                    isBackable
                        ? navigation.goBack()
                        : navigation?.navigate("Home");
                }}
            >
                {!isBackable ? (
                    <EvilIcons name="gear" size={40} color="white" />
                ) : (
                    <AntDesign name="down" size={30} color="white" />
                )}
            </TouchableOpacity>
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
