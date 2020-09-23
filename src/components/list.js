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
            key={item._id}
          >
            <Button className="rounded-pill" variant={ item.complete ? (('Complete'), "success" ) : (('Incomplete'), "danger")} onClick={() => props.handleComplete(item._id)}>Complete
            </Button>
            <span class="ml-5">{`${item.assignee}`}
            </span>
            <hr></hr>
            <Row>
            <span class="ml-3">{`${item.text}`}
            </span>
            </Row>
            <Row>
            <Col md={9}>
            </Col>
            <span>{`Difficulty: ${item.difficulty}`}
            </span>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }

export default TodoList;
