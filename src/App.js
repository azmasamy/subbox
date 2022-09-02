import { Helmet } from 'react-helmet-async';
import Landing from './screens/Landing.jsx';
import React from 'react';

window.Buffer = window.Buffer || require('buffer').Buffer;

export default function App() {
  const account = window.walletConnection.account();

  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      </Helmet>
      <Landing account={account} />
    </>
  );
}
