import { BASIC_URL } from "./config/config.js";
import { getUsers } from "./dom.js";
import { getTable } from "../Admin/scripts.js";

const request = {
  async getData(params = "") {
    try {
      const { data } = await axios.get(`${BASIC_URL}${params}`);
      await Promise.all([getUsers(data), getTable(data)]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};


export const { getData } = request;