import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('dynamically updates number', async () => {
  render(<App />);
  const input = screen.getByTestId('num');
  const h1 = screen.getByTestId('output');
  fireEvent.change(input, { target: { value: 1234 } });
  expect(h1).toHaveTextContent('1234')
})

it('should render.....', async () => {

  const people = {
    "Luke Skywalker": "http://swapi.dev/api/people/1/",
    "Darth Vader": "http://swapi.dev/api/people/4/",
  }
  render(<Results loading={false} results={results} />);
  // screen.debug();
  // Starting point for a testing approach
  const items = screen.getByText('count: ');
  expect(count).toHaveTextContent('82');
  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(2);
  expect(items[0]).toHaveTextContent('Luke Skywalker');
  expect(items[0]).toContainHTML('<a href="http://swapi.dev/api/people/1/">');
  expect(items[1]).toHaveTextContent('Darth Vader');
  expect(items[1]).toContainHTML('<a href="http://swapi.dev/api/people/4/">');

});

describe('app', () => {

  it('loads the home page', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('homelink'));
    expect(screen.getByRole('document')).toHaveTextContent('Home Page!')
  })

  it('loads the list page using the classic router', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('classiclink'));
    const list = screen.getByLabelText('list');
    expect(list.children[0]).toHaveTextContent('water')
  })

  it('loads the list page using the render() router', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('renderlink'));
    const list = screen.getByLabelText('list');
    expect(list.children[0]).toHaveTextContent('water')
  })

})
