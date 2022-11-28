import './App.css';
import { React, useEffect, useState} from 'react';

const API_URL = 'https://api.chucknorris.io/jokes/random'

function App() {

  const [joke, setJoke] = useState('')

  const generateJoke = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value))
  }

  useEffect(() => {
    generateJoke();
  }, [])


  return (
    <div className='app'> 
      <h2>Chuck Norris Joke Generator</h2>
      <p>{joke}</p>
      <button onClick={generateJoke}>Get new joke 😂</button>
    </div>
  );
}

export default App;
