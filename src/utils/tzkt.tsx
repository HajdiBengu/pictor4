import axios from "axios";

//TODO check if this function needs await
export const fetchStorage = async () => {
    try {
        const res = await axios.get("https://api.ghostnet.tzkt.io/v1/contracts/KT1DgbWd3pakHMzUpc83ANSMdAQHr8VAVhB9/storage");
        return res.data;
    } catch (error) {
        throw error;
    }
};