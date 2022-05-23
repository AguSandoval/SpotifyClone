import axios from "axios";
import { IRecommendedChannel } from "../interfaces/interfaces";

const getCategories = async (): Promise<any> => {
    const url = "https://api.audioboom.com/categories";
    const { data } = await axios.get(url);
    return data;
};

export default getCategories;
