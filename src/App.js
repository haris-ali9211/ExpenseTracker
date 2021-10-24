import React from 'react';
import './App.css';

import { GloableProvider } from './context/GlobleState';

//importing components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTranscation } from './components/Addtransaction';

function App() {
  return (
    <GloableProvider>
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTranscation /> 
      </div>
    </GloableProvider>
  );
}

export default App;
