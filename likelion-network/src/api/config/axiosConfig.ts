import axios from 'axios';


export const http = axios.create({
    baseURL: "https://likelion-network-backend.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
})