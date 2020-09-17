import React from 'react';
import './App.css'
import SingleSelect from './SingleSelect';
import sampleData from "../data/sampleData"

function App() {
  return (
    <div className="app">
      <h1>What is your favorite language?</h1>
        <SingleSelect options={sampleData}/>
    </div>
  );
}


export default App;
