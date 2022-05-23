export interface IRecommendedChannel {
    id: number;
    title: string;
    description: string;
    formatted_description: string;
    urls: IUrl;
    type: string;
    channel_style: string;
    parent_channel_id: number;
    recommendation: IRecommendation;
    created_at: string;
    updated_at: string;
}

export interface IUrl {
    banner_image: { original: string };
    logo_image: { original: string };
    web_url: string;
}

export interface IRecommendation {
    category_id: number;
    default_follow: Boolean;
    position: number;
}
