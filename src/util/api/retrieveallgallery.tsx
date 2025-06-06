import { API_ENDPOINT } from "../endpoint";

export const retrieveAllGalleryService = async (key: string) => {
    try {
        const response = await fetch(`${API_ENDPOINT}/public/gallery`, {
            method: 'GET',
            headers: {
                'Authorization': `APIKey ${key}`,
                'Content-Type': 'application/json'
            },
        });
        const res = await response.json();
        if (!response.ok) {
            console.error('Error:', res);
            throw new Error(res.message);
        }
        return res.data;
    } catch (error) {
        console.error('API fetch error:', error);
        throw error;
    }
};
