import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "localhost/api/",
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("accsess_token");
    
//     if (token) {
//       config.headers["Authorization"] = "Bearer " + token;
//     }

//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;