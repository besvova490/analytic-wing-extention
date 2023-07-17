import axios from "axios";

// helpers
import { getStorageItem } from "../helpers/storage";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" }
});

client.interceptors.request.use(async (config) => {
  const webApp = await getStorageItem("webApp");

  if (webApp.token) {
    config.headers.set("Web-App-Token", webApp.token);
  }

  return config;
});


export default client;
