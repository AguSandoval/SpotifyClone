import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";
import React, { useState } from "react";
import BottomBar from "../../components/BottomBar";
import TopBar from "../../components/TopBar";
import Portrait from "../../components/Portrait";
import PlayerButton from "../../components/PlayerButton";
import getAudioClip from "../../services/getAudioClip";

const PlayScreen: React.FC<{ navigation: any }> = ({
    navigation,
    route,
}: any) => {
    const [audioFile, setAudioFile] = useState<any>();
    const { audio } = route.params;
    // console.log(audio);
    // setAudioFile(getAudioClip(audio.urls.high_mp3));
    getAudioClip(audio.urls.high_mp3);
    return (
        <View style={{ backgroundColor: "#131313", flex: 1 }}>
            <TopBar isBackable navigation={navigation} />
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                    marginBottom: 40,
                    padding: 20,
                }}
            >
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        style={{
                            height: 320,
                            width: 320,
                        }}
                        source={{
                            uri: audio.channel.urls.logo_image.original,
                        }}
                    />
                </View>
                <View>
                    <Text style={style.title} numberOfLines={1}>
                        {audio.title}
                    </Text>
                    <Text
                        style={{
                            ...style.title,
                            ...style.author,
                        }}
                        numberOfLines={1}
                    >
                        {(audio.user.username ?? audio.channel.title).replace(
                            "_",
                            " "
                        )}
                    </Text>
                </View>
                <View style={style.ButtonsContainer}>
                    <PlayerButton type="previous" />
                    <PlayerButton />
                    <PlayerButton type="next" />
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: "800",
        color: "white",
        marginTop: 60,
        textAlign: "left",
    },
    author: {
        fontSize: 16,
        fontWeight: "700",
        marginTop: 8,
    },
    ButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 80,
        width: "80%",
    },
});

export default PlayScreen;
