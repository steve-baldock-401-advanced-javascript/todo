import React from 'react';
import Header from './components/header.js';
import ToDo from './components/todo/todo.js';
import './App.css';
import './components/todo/todo.scss';
import ToDoProvider from './components/context/context';

function App() {
  return (
    <>
    <Header />
    <main>
      <ToDoProvider>
      <ToDo />
      </ToDoProvider>
    </main>
    </>
  );
}

export default App;
