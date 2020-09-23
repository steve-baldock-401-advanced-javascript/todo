import React, { useEffect, useState } from 'react';
import TodoForm from '../useForm/form.js';
import TodoList from '../list.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import axios from 'axios';

import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = () => {

  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item.due = new Date();
    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(savedItem => {
        setList([...list, savedItem])
      })
      .catch(console.error);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      fetch(url, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => setList(data.results))
      .catch(console.error);
  };

  useEffect(_getTodoItems, []);

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
          <TodoForm handleSubmit={_addItem} />
        </Col>
        <Col md={5}>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            />
        </Col>
           <Col md={2}>
        </Col>
      </Row>
    </>
  );
};

export default ToDo;
