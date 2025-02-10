import { BASIC_URL, API_KEY } from "../config/config.js";
import { get } from "./DOM.js";

const requests = {
    async getUsers(params = "") {
        try {
            const { data } = await axios.get(`${BASIC_URL}?q=${params}&appid=${API_KEY}`);
            get(data);
        } catch (error) {
            console.error("Ошибка при выполнении запроса:", error);
        }
    },
};

export const { getUsers } = requests;