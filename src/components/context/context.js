import React, { useState } from 'react';
export const todoContext = React.createContext();

const ToDoProvider = (props) => {

  const [showComplete, setShowComplete] = useState(true);
  const [showItems, setShowItems] = useState(5);
  const [sortItems, setSortItems] = useState('difficulty');

  const toggleComplete = () => { setShowComplete(!showComplete) }

  const displayItems = (num) => {
    setShowItems(num)
  }

  const sortThem = (str) => {
    setSortItems(str)
  }

  const state = {
    showComplete,
    showItems,
    sortItems,
    toggleComplete,
    displayItems,
    sortThem
  };

  return(
    <todoContext.Provider value={state} >
      {props.children}
    </todoContext.Provider>
  )

}

export default ToDoProvider