import React from 'react';
import Header from './components/Header/header.js';
import ToDo from './components/todo/todo-connected.js' 
import Footer from './components/Footer/footer.js';
import './App.css';
import './components/todo/todo.scss';

function App() {
  return (
    <>
    <Header />
    <main>
      <ToDo />
    </main>
    <Footer />
    </>
  );
}

export default App;
