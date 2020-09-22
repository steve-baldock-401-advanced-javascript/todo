import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
      <Container>
        <Row>
        <Col md={6}>
      <header>
          <Navbar bg="dark" variant="dark">
          <Nav>
            <Navbar.Brand>
            To Do List Manager ({list.filter(item => !item.complete).length})</Navbar.Brand>
          </Nav>
          </Navbar>
      </header>
        </Col>
        </Row>
      </Container>
      <section className="todo">
      <Row>
        <Col md={5}>
        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>
        </Col>
        <Col md={7}>
        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            />
        </div>
        </Col>
      </Row>
      </section>
    </>
  );
};

export default ToDo;
