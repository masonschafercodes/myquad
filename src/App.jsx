import React from 'react';
import './App.css';
import MailchimpForm from './components/MailchimpForm/MailchimpForm';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <img src="https://i.ibb.co/4Tyb7ys/logo.png" id="landing-img" alt="logo-option-2" />
      <p id="describer">The App that Reimagines Social Life on Campus and Beyond.</p>
      <h1 id="capture">Subscribe below for Updates!</h1>
      <MailchimpForm />
      <Footer />
    </div>
  );
}

export default App;
