import React from "react";
import "./static/wave.css";
import ConnectForm from "./components/ConnectForm";

const App = () => {
  return (
    <div className="pattern">
      <div className="flex flex-col items-center text-white">
        <img
          src="https://i.ibb.co/7NSFLfV/transparent-logoexports.png"
          alt="myquad app transparent logo"
          className="w-1/4 mt-2"
        />
        <p className="font-display font-medium text-3xl pb-4">MyQuad</p>
        <p className="font-display text-xl">
          The App that Reimagines Social Life on Campus and Beyond.
        </p>
      </div>
      <ConnectForm />
    </div>
  );
};

export default App;
