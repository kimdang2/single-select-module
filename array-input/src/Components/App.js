import React from 'react';
import SingleSelect from './SingleSelect';
import sampleData from "../data/sampleData"
// import sampleLogo from "../data/sampleLogo"

import './App.css';

function App() {
  return (
    <div className="app">
      <h1>What is your favorite language?</h1>
        <SingleSelect options={sampleData}/>
    </div>
  );
}


export default App;
