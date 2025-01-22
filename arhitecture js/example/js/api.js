import { API_URL } from "../config/config_api.js";
import { get } from "./DOM.js";

const requests = {
    async getUsers(params = ""){
        try {
            const {data} = await axios.get(`${API_URL}${params}`);
            get(data);
        } catch (error) {
            console.error(error);
        }
    },
    async deleteUser(id) {
        try {
            await axios.delete(`${API_URL}/${id}`);
            getUsers();
        } catch (error) {
            console.error(error);
        }
    },
    async postUser(user){
       try {
        await axios.post(API_URL, user);
        getUsers();
       } catch (error) {
        console.error(error);
       }
    },
    async putUser(user){
        try {
         await axios.put(`${API_URL}/${user.id}`, user);
         getUsers();
        } catch (error) {
         console.error(error);
        }
     },
}

export const {getUsers, deleteUser, postUser, putUser} = requests;