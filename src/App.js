import React, { useState, useEffect } from 'react';
import ParameterForm from './components/ParameterForm';
import UrlDisplay from './components/UrlDisplay';
import SignButton from './components/SignButton';
import './App.css';

const paramConfig = {
  apiKey: { type: 'string', readOnly: true },
  defaultCurrencyCode: { type: 'string' },
  walletAddress: { type: 'string' },
  baseCurrencyCode: { type: 'string' },
  baseCurrencyAmount: { type: 'number' },
  paymentMethod: { type: 'string' },
  redirectURL: { type: 'string' },
  theme: { type: 'string' }
};

// The API Key - only for development, need to pass through as a var in prod
const API_KEY = 'Enter API Key Here';

function App() {
  const [params, setParams] = useState({
    apiKey: API_KEY,
    defaultCurrencyCode: '',
    walletAddress: '',
    baseCurrencyCode: '',
    baseCurrencyAmount: '',
    paymentMethod: '',
    redirectURL: '',
    theme: ''
  });

  const [url, setUrl] = useState('');
  const [signedUrl, setSignedUrl] = useState('');

  const constructUrl = (params) => {
    const baseUrl = 'https://buy.moonpay.com/?';
    const queryParams = Object.entries(params)
      .filter(([_, value]) => value !== '')
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    return baseUrl + queryParams;
  };

  useEffect(() => {
    const constructedUrl = constructUrl(params);
    setUrl(constructedUrl);
  }, [params]);

  const handleParamChange = (name, value) => {
    setParams(prevParams => ({ ...prevParams, [name]: value }));
  };

  const handleSign = async () => {
    try {
      const response = await fetch(`http://localhost:5000/sign-url?url=${encodeURIComponent(url)}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const signature = await response.text();
      setSignedUrl(`${url}&signature=${encodeURIComponent(signature)}`);
    } catch (error) {
      console.error('Error signing URL:', error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>MoonPay URL Builder</h1>
      </header>
      <main>
        <div className="container">
          <div className="left-column">
            <ParameterForm 
              params={params} 
              paramConfig={paramConfig} 
              onParamChange={handleParamChange} 
              apiKey={API_KEY}
            />
            <SignButton onSign={handleSign} />
          </div>
          <UrlDisplay url={url} signedUrl={signedUrl} />
        </div>
      </main>
      <footer>
        <p>&copy; 2024 MoonPay LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
