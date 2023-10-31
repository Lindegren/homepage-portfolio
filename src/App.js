import React from 'react';
import './App.css';
import Image from './features/image/Image';
import Quote from './features/quote/Quote';
import Weather from './features/weather/Weather';
import Goals from './features/goals/Goals';
import NewGoalForm from './components/NewGoalForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test header</h1>
        <NewGoalForm />
        <Goals />
        <Image />
        <Weather />
        <Quote />
      </header>
    </div>
  );
}

export default App;
