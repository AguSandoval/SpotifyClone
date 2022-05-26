import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import getChannelPlaylist from "../../services/getChannelPlaylist";
import TopBar from "../../components/TopBar";
import BottomBar from "../../components/BottomBar";
import Portrait from "../../components/Portrait";

interface IAudioClip {
    id: number;
    title: string;
    description: string;
    urls: IAudioClipURLS;
    user: any;
}

interface IAudioClipURLS {
    detail: string;
    high_mp3: string;
    image: string;
}

const ChannelScreen: React.FC<{ route: any; navigation: any }> = ({
    route,
    navigation,
}) => {
    const [playlist, setPlaylist] = useState<IAudioClip[]>([]);
    const { title, image, channelId } = route.params;

    const fetchData = async () => {
        const data = await getChannelPlaylist(channelId);
        setPlaylist(data);
        console.log(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={{ backgroundColor: "#131313", flex: 1 }}>
            <ScrollView>
                <TopBar />
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 40,
                    }}
                >
                    <Portrait
                        title={title}
                        image={image}
                        channelId={channelId}
                    />
                </View>
                <View style={{ paddingHorizontal: 10, paddingBottom: 100 }}>
                    {playlist.map((audio, index) => (
                        <TouchableOpacity
                            key={audio.id}
                            style={style.audioSelectorContainer}
                            onPress={() => {
                                navigation.navigate("Player", {
                                    audio,
                                });
                            }}
                        >
                            <Text style={style.audioIndex}>{index + 1}</Text>
                            <View style={{ width: "100%" }}>
                                <Text
                                    style={style.audioTitle}
                                    numberOfLines={1}
                                >
                                    {audio.title}
                                </Text>
                                {audio.user.username && (
                                    <Text
                                        style={style.audioAuthor}
                                        numberOfLines={1}
                                    >
                                        {audio.user.username.replace("_", " ")}
                                    </Text>
                                )}
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <BottomBar navigation={navigation} />
        </View>
    );
};

const style = StyleSheet.create({
    audioSelectorContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 12,
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 18,
    },
    audioIndex: {
        color: "#ffffffcc",
        fontWeight: "600",
        marginRight: 20,
        fontSize: 16,
    },
    audioTitle: {
        fontWeight: "500",
        color: "white",
        fontSize: 16,
        width: "95%",
    },
    audioAuthor: {
        fontWeight: "500",
        color: "#ffffffcc",
        width: "95%",
    },
});

export default ChannelScreen;
