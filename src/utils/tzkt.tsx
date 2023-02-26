import axios from "axios";

//TODO check if this function needs await
export const fetch = async () => {
    try {
        const res = axios.get("https://api.ghostnet.tzkt.io/v1/contracts/KT1SXvgcy4jUQpJK8Q2dA8cNZs8bLxTj1E2r/storage");
        return res.data;
    } catch (error) {
        throw error;
    }
};