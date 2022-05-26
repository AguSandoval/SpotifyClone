import axios from "axios";

const getChannelPlaylist = async (channelId: number): Promise<any> => {
    const url = `https://api.audioboom.com/channels/${channelId}/audio_clips`;
    const { data } = await axios.get(url);
    return data.body.audio_clips.splice(0, 15);
    // Esto se puede manejar de muchas maneras, vamos a obtener sólo 15 audios por código.
};

export default getChannelPlaylist;
