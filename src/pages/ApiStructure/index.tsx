import React, { useEffect, useState } from "react";
import { getBtcInfo, getCoinList } from "@/api/coin";

export default function ApiStructure() {
  const [coinList, setCoinList] = useState([]);
  const [btcInfo, setBtcInfo] = useState({});
  useEffect(() => {
    (async function () {
      const coinList = await getCoinList();
      const _btcInfo = await getBtcInfo();
      setCoinList(coinList.slice(1, 10));
      setBtcInfo(_btcInfo);
    })();
  }, []);

  return (
    <>
      <h1>Api Structure Page</h1>
      {coinList && coinList.map((coin) => <p key={coin.id}>{coin.name}</p>)}
      <h1>BitCoin</h1>
      <p>{JSON.stringify(btcInfo)}</p>
    </>
  );
}
