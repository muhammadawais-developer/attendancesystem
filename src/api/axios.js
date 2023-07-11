import axios from "axios";

export default axios.create({
    baseURL: 'https://crm.businesswayz.com/public/api',
    withCredentials: true
});