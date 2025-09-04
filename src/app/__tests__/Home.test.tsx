import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../page';

describe('Home', () => {
  it('renders the input and button', () => {
    render(<Home />);
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
  });

  it('adds a todo item when button is clicked', () => {
    render(<Home />);
    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'Test Task' } });
    fireEvent.click(button);

    expect(screen.getByTestId('todo-item')).toHaveTextContent('Test Task');
  });
});