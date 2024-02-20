import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// import {  ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Use environment variables for the API key and secret key
// const apiKey = process.env.VITE_APP_THIRDWEB_API_KEY;
// const secretKey = process.env.VITE_APP_THIRDWEB_SECRET_KEY;


root.render(
  <ThirdwebProvider activeChain={ Sepolia }
  clientId="cec65c7471a1f2331698f3a875545a62"> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)