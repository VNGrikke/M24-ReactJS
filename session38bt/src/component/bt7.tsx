import React, { useState, useMemo } from 'react';

interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

export default function bt7() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (todoText: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, text: todoText, complete: false },
    ]);
  };

  const memoizedTodos = useMemo(() => {
    return todos.filter((todo) => !todo.complete);
  }, [todos]);

  return (
    <div>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add a new todo"/>
      <button onClick={() => addTodo(newTodo)}>Add Todo</button>
      <ul>
        {memoizedTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

