import React from 'react';
import ReactDOM from 'react-dom/client';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Elements stripe={stripePromise} 
    //@ts-ignore
    style = {{color:'#A259FF!important'}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Elements>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
