import React, { useEffect } from 'react';
import { httpClient } from './core/apiService/httpClient';
import WeatherGame from './view/pages/weatherGame';
import './App.css';

function App() {

  return (
      <div className="App">
        <WeatherGame />
      </div>
  );
}

export default App;
