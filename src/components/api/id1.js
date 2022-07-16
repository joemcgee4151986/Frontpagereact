
import axios from "axios";
const mainAxios = axios.create({
    baseURL: "https://desolate-sea-33600.herokuapp.com/virus/1"
  });

  const profileAxios = axios.create({
    baseURL: "https://desolate-sea-33600.herokuapp.com/virus/2"
  });

  export { mainAxios, profileAxios };