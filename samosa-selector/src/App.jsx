import './App.css'; 
import { useState } from 'react';


const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(c => c + multiplier);
  const buyPackage = (cost, factor) => {
    setCount(c => {
      if (c < cost) return c;
      setMultiplier(m => m * factor);
      return c - cost;
    });
  };
  return (
  <div className="App">
    <h1>Samosa Selector</h1>
    <h2>Count: {count}</h2>
    <img src="https://recipes.timesofindia.com/thumb/61050397.cms?width=1200&height=900" alt="Samosa" className='samosa' onClick={updateCount} />
  
    <div className='container'>
      <div className='upgrade'>
        <h3>Double Stuffed</h3>
        <p>2x per click</p>
        <button onClick={() => buyPackage(10, 2)}>10 samosas</button>
      </div>
      <div className='upgrade'>
        <h3>Party Pack</h3>
        <p>5x per click</p>
        <button onClick={() => buyPackage(100, 5)}>100 samosas</button>
      </div>
      <div className='upgrade'>
        <h3>Full Feast</h3>
        <p>10x per click</p>
        <button onClick={() => buyPackage(1000, 10)}>1000 samosas</button>
      </div>
    </div>
  </div> )
  }
  
export default App