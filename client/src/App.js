import React from 'react';
import './App.css';

function App () {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  async function load () {
    console.log("hello");
    const response = await fetch('/test', options);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <button onClick={load}>
        testing fetch
      </button>
      jin woo kim's 3 macbooks
    </div>
  );
}

export default App;