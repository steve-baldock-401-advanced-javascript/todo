import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/header.js';
import ToDo from './components/todo/todo.js' 
// import Footer from './components/Footer/footer.js';
// import HooksCounter from './components/HooksCounter/hooks-counter.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      <ToDo />
      {/* <HooksCounter /> */}
    </div>
    {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
