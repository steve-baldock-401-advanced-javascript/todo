import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { todoContext } from '../components/context/context';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TodoList = (props) => {
  const ctx = useContext(todoContext)
  let list = props.list.filter(item => {
    if(ctx.showComplete){
      if(item.complete){
        return null
      } else {
        return item
      } 
      } else {
        return item
      }
  })
  list = list.sort((a,b) => a[ctx.sortBy] - b[ctx.sortBy] ? -1 : 1)
  return (
    <ListGroup>
      {list.map((item, i) => {
        if(i < ctx.showItems){
          return(
        <ListGroup.Item 
          key={item._id}>
         <Row>
            <Col md={3}>
            <Button size="sm" className="rounded-pill" variant={item.complete ? "success" : "danger"} onClick={() => props.toggleComplete(item._id)}>{item.complete ? "Complete" : "Pending"}
            </Button>
            </Col>
            <Col md={4}>
            <span className="ml-5">{`${item.assignee}`}
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
            <Col md={7}>
            <span className="ml-2">{`${item.text}`}
            </span>
            </Col>
            <span className="ml-5">{`Difficulty: ${item.difficult}`}
            </span>
            </Row>
        </ListGroup.Item>
    )}})}
    </ListGroup>
  );
}

export default TodoList;
            // <Button size='sm' variant={item.complete ? "success" : "danger"} onClick={() => props.toggleComplete(item._id)}>{item.complete ? "Complete" : "Pending"}
            // </Button>