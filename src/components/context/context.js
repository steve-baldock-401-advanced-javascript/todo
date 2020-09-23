// provide context to components that need access to state

import React, { useState} from 'react';
export const todoContext = React.createContext();

function toDoProvider(props) {
  // Context will be responsible for providing state, no longer at todo
  const [list, setList] = useState('raw');

  const state = {
    item,
  };
  
  return(

  )

}