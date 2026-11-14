import axios from "axios";
const api =axios.create(
    {baseURL:'https://eventsphere-server-mfdb.onrender.com'}
);
api.interceptors.request.use((request)=>(request),(err)=>{})
api.interceptors.response.use((response)=>(response.data.data),(err)=>{})
export default api;