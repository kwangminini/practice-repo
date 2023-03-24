import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getCoinList } from "@/api/coin";

export default function ApiStructure() {
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    (async function () {
      const coinList = await getCoinList();
      setCoinList(coinList.slice(1, 10));
    })();
  }, []);

  return (
    <>
      <h1>Api Structure Page</h1>
      {coinList && coinList.map((coin) => <p key={coin.id}>{coin.name}</p>)}
    </>
  );
}
