import { View, Text } from "react-native";
import React from "react";
import axios from "axios";

const getAudioClip = async (url: string) => {
    const response = await axios.get(url);
    const mp3 = new Blob([response.data], { type: "audio/mp3" });
    const file = URL.createObjectURL(mp3);

    // const audio = new Audio(file);
    console.log(file);
};

export default getAudioClip;
