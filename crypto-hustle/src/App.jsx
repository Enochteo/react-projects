import { useEffect, useState } from 'react'
import './App.css'
import CoinInfo from './components/CoinInfo';


const APIKey = import.meta.env.VITE_APP_API_KEY
function App() {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  useEffect(() => {
    const fetchAllCoinData = async() => {
      const query = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${APIKey}`;
      try {
        const response = await fetch(query);
      const json = await response.json();
           const coinList = Object.entries(json.Data);
      const filteredList = coinList.filter(
        ([currency, coinData]) => coinData.IsTrading && coinData.Algorithm !== "N/A" && coinData.ProofType !== "N/A"
      );

      setList(filteredList);
    } catch (error) {
      console.error("Failed to fetch coin data:", error);
    }
  };

    fetchAllCoinData().catch(console.error);
  }, [])
  const searchItems = searchValue => {
    setSearchInput(searchValue)
    if (searchValue !== "") {
      const filteredData = list.filter(([symbol, coin]) =>
      coin.FullName.toLowerCase().includes(searchValue.toLowerCase()) ||
      symbol.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredResults(filteredData);
  } else {
    setFilteredResults(list);
    }
  }
  return (
      <div className='whole-page'>
        <h1>My crypto list</h1>
        <input type="text" placeholder="Search..." onChange={(inputString) => searchItems(inputString.target.value)} />
        {list ? (
  <ul>
    {(searchInput.length > 0 ? filteredResults : list).map(([symbol, coin]) => (
      <CoinInfo
        key={symbol}
        image={coin.ImageUrl}
        name={coin.FullName}
        symbol={coin.Symbol}
        algorithm={coin.Algorithm}
        proofType={coin.ProofType}
      />
    ))}
  </ul>
) : (
  <p>Loading...</p>
)}
      </div>
  )
}

export default App
