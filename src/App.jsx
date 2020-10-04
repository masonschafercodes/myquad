import React from 'react';
import './App.css';
import MailchimpForm from './components/MailchimpForm/MailchimpForm';

const App = () => {
  return (
    <div className="App">
      <img src="https://i.ibb.co/TDf0NTJ/logo-option-2exports.png" alt="logo-option-2" />
      <p>The App that Reimagines Social Life on Campus.</p>
      <h1>Subscribe below for Updates!</h1>
      <MailchimpForm />
    </div>
  );
}

export default App;
