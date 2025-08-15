import { useState } from 'react';
import './App.css';
import BaristaForm from './components/BaristaForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Barista</h1>
      <p>So you think you can barista? Lets put that to the test</p>
    </div>  
    <BaristaForm />
    </>
  )
}

export default App
