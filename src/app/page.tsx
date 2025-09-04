'use client';

import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold mb-4">Taskify</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
          placeholder="Add a task"
          data-testid="todo-input"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          data-testid="add-button"
        >
          Add
        </button>
      </div>
      <ul className="list-disc">
        {todos.map((todo, index) => (
          <li key={index} className="text-lg" data-testid="todo-item">
            {todo}
          </li>
        ))}
      </ul>
    </main>
  );
}