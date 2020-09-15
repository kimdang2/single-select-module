import React from 'react';
import SingleSelect from './SingleSelect';
import data from "../data/data"

function App() {
  return (
    <div className="App">
      <h1>What is your favorite language?</h1>
        <SingleSelect options={data}/>
    </div>
  );
}


export default App;
