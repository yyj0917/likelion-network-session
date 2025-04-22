import { http } from "./config/axiosConfig";


export const deleteRestaurant = async (id: string) => {
    try {
        await http.delete(`/restaurant/${id}`);
    } catch (error) {
        console.error("Error deleting restaurant:", error);
        throw error;
    }
}