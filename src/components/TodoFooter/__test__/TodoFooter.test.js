import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ x }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={x} />
    </BrowserRouter>
  );
};

test('alalal', async () => {
  render(<MockTodoFooter x={5} />);

  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});
