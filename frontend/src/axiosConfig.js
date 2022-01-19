import axios from "axios";

const instance = axios.create({
    baseURL: "https://tender-clone-343.herokuapp.com/",
});

export default instance;