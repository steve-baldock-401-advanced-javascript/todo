import React from 'react';
import Header from './components/Header/header.js';
import ToDo from './components/todo/todo-connected.js' 
import Footer from './components/Footer/footer.js';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <ToDo />
    <Footer />
    </>
  );
}

export default App;
