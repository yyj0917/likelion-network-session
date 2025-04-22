import { http } from "./config/axiosConfig"

// Get all restaurants
export const getRestaurantAll = async () => {
    try {
        const res = await http.get("/restaurant");
        return res.data;
    } catch (error) {
        console.error("Error fetching all restaurants:", error);
        throw error;
    }
}

// Get restaurant by id
export const getRestaurantOne = async (id: string) => {
    try {
        const res = await http.get(`/restaurant/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching restaurant:", error);
        throw error;
    }
}