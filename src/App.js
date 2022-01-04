import React from 'react';
import Spinner from 'react-spinkit';

function App() {

  return (
    <div className="app">
      <h4>Add a loading spinner in React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h4>
      <div className="spinner-outer">
        <Spinner name="double-bounce" />
        <Spinner name="circle" />
        <Spinner name="cube-grid" />
        <Spinner name="line-scale" color="steelblue" />
      </div>
    </div>
  );
}

export default App;