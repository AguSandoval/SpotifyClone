import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    ViewStyle,
} from "react-native";
import React, { useEffect, useState } from "react";
import getRecommendedChannels from "../../services/getRecommendedChannels";
import { IRecommendedChannel } from "../../interfaces/interfaces";
import Portrait from "../Portrait";

export interface IPortraitCarrouselProps {
    componentStyle?: ViewStyle;
}

const PortraitCarrousel: React.FC<IPortraitCarrouselProps> = ({
    componentStyle,
}) => {
    const [recommendedChannels, setRecommendedChannels] = useState<
        IRecommendedChannel[]
    >([]);

    const fetchData = async () => {
        const response = await getRecommendedChannels();
        setRecommendedChannels(response);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={componentStyle}>
            <Text style={style.containerTitle}>Hola test</Text>
            <ScrollView horizontal={true}>
                {recommendedChannels.map((channel, index) => {
                    return index > 4 ? null : (
                        Portrait
                    );
                })}
            </ScrollView>
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

export default PortraitCarrousel;
