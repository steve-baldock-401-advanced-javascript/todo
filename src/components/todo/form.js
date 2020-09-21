import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TodoForm = (props) =>{
  const [item, setItem] = useState({});

  const handleInputChange = e => {
  setItem({...item, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({});
  }

    return (
      <Card>
        <h3>Add Item</h3>
        <Form onSubmit={ handleSubmit }>
          <Form.Group>

          <Form.Label>
            To Do Item
          </Form.Label>
            <Form.Control
              name="text"
              placeholder="Add To Do List Item"
              onChange={ handleInputChange }
            />
            </Form.Group>
            <Form.Group>
          <Form.Label>
            Difficulty Rating
          </Form.Label>
            <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={ handleInputChange } />
          <Form.Label>
            Assigned To
          </Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={ handleInputChange } />
          <Button variant='primary'>Add Item</Button>
          </Form.Group>
        </Form>
      </Card>
    );
}

export default TodoForm;
