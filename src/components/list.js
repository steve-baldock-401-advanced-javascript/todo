import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


  const TodoList = (props) => {
    return (
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item 
            key={item._id}>
            <Row>
            <Col md={3}>
            <Button className="rounded-pill" variant={item.complete ? "success" : "danger"} onClick={() => props.toggleComplete(item._id)}>{item.complete ? "Complete" : "Pending"}
            </Button>
            </Col>
            <Col md={4}>
            <span className="ml-3">{`${item.assignee}`}
            </span>
            </Col>
            <Col md={3}> 
            </Col>
            <Col>
            <span onClick={() => props.deleteItem(item._id)}>X
            </span>
            </Col>
            </Row>
            <hr></hr>
            <Row>
            <span className="ml-3">{`${item.text}`}
            </span>
            </Row>
            <Row>
            <Col md={7}>
            </Col>
            <span className="ml-5">{`Difficulty: ${item.difficult}`}
            </span>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }

export default TodoList;
