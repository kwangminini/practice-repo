import axios from "axios";

const COIN_BASE_URL = "https://api.coinranking.com/v2/";

const axiosInstance = (url: string, options?: object) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  });
  return instance;
};

export const coinAPI = axiosInstance(COIN_BASE_URL);
