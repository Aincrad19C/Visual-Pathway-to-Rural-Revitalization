import axios from "axios";

const request = axios.create({
    timeout: 2000,
})
export default request;
