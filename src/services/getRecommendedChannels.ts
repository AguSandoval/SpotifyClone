import axios from "axios";
import { IRecommendedChannel } from "../interfaces/interfaces";

const getRecommendedChannels = async (): Promise<IRecommendedChannel[]> => {
    const url = "https://api.audioboom.com/channels/recommended";
    const { data } = await axios.get(url);
    const { body } = data;
    return await body;
};

export default getRecommendedChannels;
