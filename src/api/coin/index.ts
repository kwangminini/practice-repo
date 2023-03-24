import { coinAPI } from "../axiosInstance";

/**
 * 코인 리스트 조회
 * @returns 코인 리스트
 */
export const getCoinList = async () => {
  const response = await coinAPI.get("coins");
  return response.data;
};
