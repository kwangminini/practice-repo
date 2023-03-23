import axios, { AxiosRequestConfig } from "axios";

const COIN_BASE_URL = "https://api.coinpaprika.com/v1/";

const axiosInstance = (url: string, options?: AxiosRequestConfig) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  });
  return instance;
};

export const coinAPI = axiosInstance(COIN_BASE_URL);
