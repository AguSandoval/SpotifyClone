import { View, Text, StyleSheet, ScrollView, ViewStyle } from "react-native";
import React, { useEffect, useState } from "react";
import getRecommendedChannels from "../../services/getRecommendedChannels";
import { IRecommendedChannel } from "../../interfaces";
import Portrait from "../Portrait";

export interface IPortraitCarrouselProps {
    componentStyle?: ViewStyle;
    navigation: any;
}

const randomTitleCover = [
    "Es viernes!",
    "Para viajar",
    "Interesante",
    "Recomendados",
    "Nuevos",
    "Populares",
    "Top 100",
    "Exitos en Latinoamerica",
    "Exitos en el Mundo",
    "Exitos en España",
    "Los mas escuchados",
    "Infaltables",
]; // Estos textos en Spotify provienen de la actividad del usuario, aqui los generaremos al azar.

const PortraitCarrousel: React.FC<IPortraitCarrouselProps> = ({
    componentStyle, navigation
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

    // Es posible hacer un validación si esta cargando, renderizar un spinner, etc.
    return (
        <View style={componentStyle}>
            <Text style={style.containerTitle}>
                {randomTitleCover[Math.floor(Math.random() * 10)]}
            </Text>
            <ScrollView horizontal={true}>
                {recommendedChannels.map((channel, index) => {
                    return index > 4 ? null : (
                        <Portrait
                            key={channel.id}
                            channelId={channel.id}
                            title={channel.title}
                            image={channel.urls.logo_image.original}
                            navigation={navigation}
                        />
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
});

export default PortraitCarrousel;
