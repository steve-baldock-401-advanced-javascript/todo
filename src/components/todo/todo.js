import React, {useContext } from 'react';
import TodoForm from '../Form/form.js';
import TodoList from '../list.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import useAjax from '../hook/ajax';
import './todo.scss';
import Button from 'react-bootstrap/Button';
import { todoContext } from '../context/context';

function ToDo() {
  const ctx = useContext(todoContext)

  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    links: {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    item: {
      marginRight: '1em',
    },
  };

  // State
  const {list, addItem, deleteItem, toggleComplete} = useAjax('http://localhost:3001/api/v1/todos')

    return (
      <Container>
        <Row>
          <Col md={2}>
          </Col>
          <Col md={7}>
          <header className="mb-3 mt-3">
            <Navbar bg="dark" variant="dark">
            <Nav style={styles.nav}>
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
          <Col md={4}>
            <TodoList
              list={list}
              toggleComplete={toggleComplete}
              deleteItem={deleteItem}
              />
            <Row>
              <Col md={10}></Col>
              <Col>
            <Button variant="dark" onClick={ctx.toggleComplete}>{ctx.showComplete ? 'Show complete' : 'Hide Complete'}
            </Button>
            </Col>
            </Row>
          </Col>
             <Col md={2}>
          </Col>
        </Row>
      </Container>
    );
}

export default ToDo;
