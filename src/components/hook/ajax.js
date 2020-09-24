import { useEffect, useState } from 'react';
import axios from 'axios';

const useAjax = (url) => {

// State
const [list, setList] = useState([])

const addItem = async (item) => {
  item.difficult = parseInt(item.difficult) || 1;
  item.complete = false;
  const response = await axios.post(url,item)
  setList([...list, response.data]);
};

const deleteItem = async (id) => {
   await axios.delete(`${url}/${id}`)
   const newList = list.filter(item => {
     if(item._id !== id)
      return item;
   })
   setList(newList)
}

const toggleComplete = async (id) => {
  let item = await axios.get(`${url}/${id}`)
  item = item.data;
  if (item._id) {
    item.complete = !item.complete;
    let updatedList = list.map(listItem => listItem._id === item._id ? item : listItem);
    axios.patch(`${url}/${id}`, item);
    setList(updatedList);
  }
  
};
  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      setList(response.data.results);
    }
    fetchData();
    }, [url]);

    return {
      list,
      addItem,
      deleteItem,
      toggleComplete,
    }

}

export default useAjax;

