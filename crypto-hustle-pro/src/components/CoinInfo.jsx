import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const APIKey = import.meta.env.VITE_APP_API_KEY

const CoinInfo = ({image, name, symbol}) => {
    const [price, setPrice] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            const query = `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD,JPY,EUR&api_key=${APIKey}`;
            try {
                const response = await fetch(query);
                const json = await response.json();
                setPrice(json);
            }
            catch (error) {
                console.error("Failed to fetch coin data:", error);
            }
        }
    fetchData().catch(console.error)
    }, [symbol])
    return (
        <div> 
            <Link
  style={{ color: "White" }}
  to={`/coin/${symbol}`}
  key={symbol}
>
            {price && (<li className="main-list" key={symbol}><img src={`https://www.cryptocompare.com${image}`} alt={`Small icon for ${name} crypto coin`}/>{name} <span className="tab">${price.USD} USD</span></li>)}
        </Link>
         </div>
        
    )
};

export default CoinInfo;
