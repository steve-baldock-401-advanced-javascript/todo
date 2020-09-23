import React from 'react';
import Header from './components/header.js';
import ToDo from './components/todo/todo-connected.js' 
// import ToDo from './components/todo/todo.js';
// import Footer from './components/footer.js';
import './App.css';
import './components/todo/todo.scss';

function App() {
  return (
    <>
    <Header />
    <main>
      <ToDo />
    </main>
    {/* <Footer /> */}
    </>
  );
}

export default App;
