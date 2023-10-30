import React from 'react';
import './App.css';
import sunIcon from './images/sun.png';

function TaskInputBar() {
  return (
    <form className='TaskInputForm'>
      <input className='TaskInputField' type="text" placeholder="Input your next task" />
    </form>
  )
};

function TaskCard({ task }) {
  return (
    <div className="TaskCard">
      <p> {task.text} </p>
      <button>Remove task</button>
      <button>Mark completed</button>
    </div>
  )
};

function TaskTable({ tasks }){
  return (
    <div className='TaskTable'>
      {tasks.map((task) => <TaskCard task={task} />)}
    </div>
  )
};

function PictureContainer({src}) {
  return (
    <div className='PictureContainer'>
      <img src={src} width="300px" />
      <button>Prev image</button>
      <button>Next image</button>
    </div>
  )
}

function WeatherContainer({icon, weatherAPI}){
  return (
    <div className='WeatherContainer'>
      <img src={icon} width="40px"/>
      <p>{weatherAPI} </p>
    </div>
  )
}

function QuoteContainer({quoteAPI}) {
  return(
    <div className='QuoteContainer'>
      <p>{quoteAPI.text}</p>
    </div>
  )
}

const TASKS = [
  {text: "Feed sourdoug", isCompleted: false},
  {text: "Get well", isCompleted: false},
  {text: "Complete portfolio project", isCompleted: false},
  {text: "Clean the oven", isCompleted: false},
  {text: "Go to the gym", isCompleted: false}, 
];

const IMG = [
  {src: "https://images.unsplash.com/photo-1698375962447-8aac6091e31b?auto=format&fit=crop&q=80&w=1665&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

const WEATHERICONS = [{
  sunny: sunIcon,
}]

const QUOTE = {
  text: "This is a quote",
  src: ""
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test header</h1>
        <TaskInputBar />
        <TaskTable tasks={TASKS} />
        <PictureContainer src={IMG[0].src} />
        <WeatherContainer icon={WEATHERICONS[0].sunny} weatherAPI={"It's sunny today"}/>
        <QuoteContainer quoteAPI={QUOTE} />
      </header>
    </div>
  );
}

export default App;
