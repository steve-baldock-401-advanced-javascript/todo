import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


  const TodoList = (props) => {
    return (
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item 
            key={item._id}
          >
            <Button variant={ item.complete ? (('Complete'), "success" ) : (('Incomplete'), "danger")} onClick={() => props.handleComplete(item._id)}>Complete
            </Button>
            <span class="ml-5">{`${item.assignee}`}
            </span>
            <hr></hr>
            <span>{`${item.text}`}
            </span>
            <span>{`Difficulty: ${item.difficulty}`}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }

export default TodoList;
