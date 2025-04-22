import { Restaurant } from "../types/restaurant";
import { http } from "./config/axiosConfig";


export const updateRestaurant = async (id: string, data: Restaurant) => {
    try {
        const res = await http.patch(`/restaurant/${id}`, data);
        return res.data;
    } catch (error) {
        console.error("Error updating restaurant:", error);
        throw error;
    }
}