import { Restaurant } from "../types/restaurant";
import { http } from "./config/axiosConfig";


export const createRestaurant = async (data: Restaurant) => {
    try {
        await http.post("/restaurant", data);
    } catch (error) {
        console.error("Error creating restaurant:", error);
        throw error;
    }
}