import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export interface IPortraitProps {
    title: string;
    image: string;
}

const Portrait: React.FC<IPortraitProps> = ({ title, image }) => {
    return (
        <View style={style.portraitContainer}>
            <Image
                style={style.portraitLogo}
                source={{
                    uri: image,
                }}
            />
            <Text style={style.portraitText} numberOfLines={1}>
                {title}
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    containerTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 25,
        marginBottom: 15,
    },
    portraitContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
        width: 150,
        height: 180,
    },
    portraitLogo: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    portraitText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        width: 150,
        height: 20,
    },
});

export default Portrait;
