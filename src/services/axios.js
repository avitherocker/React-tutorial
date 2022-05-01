import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dummy.restapiexample.com/api/v1'
});

instance.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);



export default instance;