import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getData = async (query, page) => {
    try {
        const response = await axios.get("/search/photos", {
            params: { query, page },
            headers: {
                Authorization: "Client-ID 5FXcKwr7FzRcFuK8b4uGWDOLnHGg58ANxNgPMst3RNc"
            }

    
        });
        return response.data.results;
    

    } catch (error) {
        throw new Error("Something went wrong. Please try again later.")
    }
};