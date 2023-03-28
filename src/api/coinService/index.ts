import { coinAPI } from "../axiosInstance";

export default class CoinService {
  /**
   * 코인 리스트 조회
   * @returns 코인 리스트
   */
  static async getCoinList() {
    try {
      const response = await coinAPI.get("coins");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 비트코인 정보 조회
   * @returns 비트코인 정보
   */
  static async getBtcInfo() {
    try {
      const response = await coinAPI.get("coins/btc-bitcoin");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
