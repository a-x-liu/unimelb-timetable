import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function App () {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  async function load () {
    const response = await fetch('/test', options);
    const data = await response.json();
    console.log(data);
    window.localStorage.setItem('test', "hoping this shit works");
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={load}>
        testing fetch
      </Button>
      jin woo kim's 3
    </div>
  );
}

export default App;