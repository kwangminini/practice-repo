import React, { useEffect, useState } from "react";
import CoinService from "@/api/coinService";

export default function ApiStructureByClass() {
  const [coinList, setCoinList] = useState([]);
  const [btcInfo, setBtcInfo] = useState({});
  useEffect(() => {
    (async function () {
      const coinList = await CoinService.getCoinList();
      const _btcInfo = await CoinService.getBtcInfo();
      setCoinList(coinList.slice(1, 10));
      setBtcInfo(_btcInfo);
    })();
  }, []);

  return (
    <>
      <h1>Api Structure By Class Page</h1>
      {coinList && coinList.map((coin) => <p key={coin.id}>{coin.name}</p>)}
      <h1>BitCoin</h1>
      <p>{JSON.stringify(btcInfo)}</p>
    </>
  );
}
