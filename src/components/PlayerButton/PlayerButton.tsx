import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const BUTTON_TYPE = (type?: string) => {
    switch (type) {
        case "play":
            return "play";
        case "pause":
            return "pause";
        case "next":
            return "step-forward";
        case "previous":
            return "step-backward";
        default:
            return "play";
    }
};

const PlayerButton: React.FC<{ type?: string }> = ({ type }) => {
    const button = BUTTON_TYPE(type),
        isPlayPause = button.includes("step") ? true : false,
        buttonSize = isPlayPause ? 50 : 100,
        buttonColor = isPlayPause ? "transparent" : "#fff",
        iconColor = isPlayPause ? "#fff" : "#000";

    return (
        <TouchableOpacity
            style={{
                ...style.playButton,
                width: buttonSize,
                height: buttonSize,
                backgroundColor: buttonColor,
            }}
        >
            <FontAwesome name={button} size={30} color={iconColor} />
        </TouchableOpacity>
    );
};
const style = StyleSheet.create({
    playButton: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default PlayerButton;
