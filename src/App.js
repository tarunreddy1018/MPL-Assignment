import React from 'react';

import Android from './components/Image/Android/Android';
import Player from './components/Image/Player/Player';

import TextWrapper from './components/TextWrapper/TextWrapper';
import Coupon from './components/Coupon/Coupon';

import Footer from './components/Footer/Footer';



import './App.css';

function App() {
  let textWrapperContent = {
    userName: 'USERNAME12345',
    invitation: 'invited you to play Mobile Premier League'
  };

  let couponContent = {
    freeCashText: 'Get FREE Cash',
    amount: '₹20',
    referralCodeText: 'Use Referral Code',
    referralCode: 'ABCD12'
  };

  return (
    <div className="App">
      <div className="container">
        <div className="body">
            <TextWrapper textWrapperContent={textWrapperContent} />
            <Coupon couponContent={couponContent} />
            <Player />
        </div>
      </div>
      <Footer text="Install the MPL App & Get 20 MPL Tokens Free!" />
      <Android />
    </div>
  );
}

export default App;
