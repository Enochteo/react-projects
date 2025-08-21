import { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "./CoinInfo";

const APIKey = import.meta.env.VITE_APP_KEY;

function CoinDetail() {
  const { symbol } = useParams();
  const [coin, setCoin] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
      const fetchCoinData = async() => {
        const query = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${APIKey}`;
        try {
          const response = await fetch(query);
        const json = await response.json();

        const coinData = json.Data[symbol.toUpperCase()];
        if (!coinData) {
            console.warn('Symbol not found in coin list');
            return;
        }
  
        setCoin(coinData);
        const priceQuery = `https://min-api.cryptocompare.com/data/price?fsym=${symbol.toUpperCase()}&tsyms=USD,EUR,JPY&api_key=${APIKey}`;
        const priceResponse = await fetch(priceQuery);
        const priceData = await priceResponse.json();
        setPrice(priceData);
      } catch (error) {
        console.error("Failed to fetch coin data:", error);
      }
      } 
  
      fetchCoinData();
    }, [symbol]);
    if (!coin || !price) {
        return <p>Loading coin data...</p>
    }
  return (
    <div>
      <h1>{coin.FullName} ({symbol})</h1>
      <img src={`https://www.cryptocompare.com${coin.ImageUrl}`} alt={`${coin.FullName} icon`} width='50' />
    <p><strong>Algorithm:</strong> {coin.Algorithm}</p>
      <p><strong>Proof Type:</strong> {coin.ProofType}</p>
      <p><strong>Description:</strong> {coin.Description || "No description available."}</p>
      <h3>Current Prices:</h3>
      <ul>
        <li>USD: ${price.USD}</li>
        <li>EUR: €{price.EUR}</li>
        <li>JPY: ¥{price.JPY}</li>
      </ul>
    </div>
  );
}

export default CoinDetail;