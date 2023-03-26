import { coinAPI } from "../axiosInstance";

/**
 * 코인 리스트 조회
 * @returns 코인 리스트
 */
export const getCoinList = async () => {
  try {
    const response = await coinAPI.get("coins");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 비트코인 정보 조회
 * @returns 비트코인 정보
 */

export const getBtcInfo = async () => {
  try {
    const response = await coinAPI.get("coins/btc-bitcoin");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
