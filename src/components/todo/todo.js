import React, { useEffect, useState } from 'react';
import TodoForm from '../useForm/form.js';
import TodoList from '../list.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';


import './todo.scss';

function ToDo() {

  const [list, setList] = useState([])

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let updatedList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(updatedList);
    }

  };

  useEffect(async() => {
      const response = await axios.get('http://localhost:3001/api/v1/todos');
      setList(response.data.results);
    }, []);

    return (
      <>
        <Row>
          <Col md={2}>
          </Col>
          <Col md={8}>
          <header class="mb-1">
            <Navbar bg="dark" variant="dark">
            <Nav>
              <Navbar.Brand>
              To Do List Manager ({list.filter(item => !item.complete).length})</Navbar.Brand>
            </Nav>
            </Navbar>
          </header>
          </Col>
          <Col md={2}>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
          </Col>
          <Col md={3}>
            <TodoForm handleSubmit={addItem} />
          </Col>
          <Col md={5}>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
              />
          </Col>
             <Col md={2}>
          </Col>
        </Row>
      </>
    );
}

export default ToDo;
