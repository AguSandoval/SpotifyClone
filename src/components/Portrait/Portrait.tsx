import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export interface IPortraitProps {
    title: string;
    image: string;
    channelId: number;
    navigation?: any;
}

const Portrait: React.FC<IPortraitProps> = ({
    title,
    image,
    channelId,
    navigation,
}) => {
    return (
        <View style={style.portraitContainer}>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                    navigation?.navigate("Channel", {
                        title,
                        image,
                        channelId,
                    });
                }}
            >
                <Image
                    style={style.portraitImage}
                    source={{
                        uri: image,
                    }}
                />
                <Text style={style.portraitText} numberOfLines={1}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    portraitContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
        width: 150,
        height: 180,
    },
    portraitImage: {
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
