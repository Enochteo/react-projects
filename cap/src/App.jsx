import { useState } from 'react'
import './App.css'
import APIForm from './components/APIForm';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY

function App() {
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: ""
  });
  const reset = () => {
    setInputs({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: ""
  });
  setCurrentImage(null);
  setError("");
  }
  const [error, setError] = useState("");
  const [currentImage, setCurrentImage] = useState();
  const callAPI = async (query) => {
    try {
      const response = await fetch(query);
      if (!response.ok) {
        alert("An error occurred while making the API call.");
        return;
      }
      const json = await response.json();
      if (!json.url) {
        alert("A proper screenshot could not be taken");
        return;
      }
      setCurrentImage(json.url);
    } catch (error) {
      console.error("API call failed:", error);
      alert("Something went wrong. Please try again.")
    }
  }
  const submitForm = () => {
    let defaultValues = {
      format: "jpeg",
      no_ads: "true",
      no_cookie_banners: "true",
      width: "1920",
      height: "1080",
    };
    if(!inputs.url){
      setError("Please enter a URL before submitting");
      return;
    }
    setError("");
    const finalInputs = {
    ...defaultValues,
    ...inputs,
  };

  const query = `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&url=https://${finalInputs.url}&format=${finalInputs.format}&no_ads=${finalInputs.no_ads}&no_cookie_banners=${finalInputs.no_cookie_banners}&width=${finalInputs.width}&height=${finalInputs.height}`;
  callAPI(query).catch(console.error);
    };
  return (  
    <div className='whole-page'>
      <h1>Build your own Screenshot</h1>

      <APIForm inputs={inputs}
      handleChange={(e) =>
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value.trim(),
        }))
      }
      onSubmit={submitForm}
      />
      {currentImage ? (
        <img src={currentImage} alt="Screenshot returned" className='screenshot' />

      ) : (
        <div>No Pic yet</div>
      )}
      <br />
      <div className='container'>  
              <h3> Current Query Status: </h3>
        <p>
          https://api.apiflash.com/v1/urltoimage?access_key=ACCESS_KEY
          <br></br>
          &url={inputs.url} <br></br>
          &format={inputs.format} <br></br>
          &width={inputs.width}
          <br></br>
          &height={inputs.height}
          <br></br>
          &no_cookie_banners={inputs.no_cookie_banners}
          <br></br>
          &no_ads={inputs.no_ads}
          <br></br>
      </p> </div>
      <br></br>
    </div>
  )
};

export default App
