export interface createArtist {
    artist_name: string;
    bio: string;
    country: string;
    genres: string;
    picture_urls: string;
    social_media_links: {
        facebook: string;
        instagram: string;
        sound_cloud: string;
        spotify: string;
        youtube: string;
        website: string;
    };
}
