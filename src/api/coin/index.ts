import { coinAPI } from "../axiosInstance";

export const getCoinList = async () => {
  const response = await coinAPI.get("coins");
  return response.data;
};
