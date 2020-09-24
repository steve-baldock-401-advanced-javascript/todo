import React from 'react';
import Header from './components/header.js';
import ToDo from './components/todo/todo.js';
import './components/todo/todo.scss';
import { ToDoProvider } from './components/context/context';



function App() {
  return (
    <>
    <Header />
      <ToDoProvider>
      <ToDo />
      </ToDoProvider>
    </>
  );
}

export default App;
