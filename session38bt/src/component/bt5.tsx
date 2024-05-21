import React, { useState, useCallback } from 'react';

interface Todo {
  id: number;
  name: string;
}

const initialTodos: Todo[] = [
  { id: 1, name: 'mai nghỉ học'  },
  { id: 2, name: 'mai không nghỉ học'  },
];

export default function bt5() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = useCallback(() => {
    if (newTodo.trim()) {
      const newId = todos.length + 1;
      setTodos((prevTodos) => [...prevTodos, { id: newId, name: newTodo}]);
      setNewTodo('');
    }
  }, [newTodo, todos]);

  return (
    <div>
      <h2>Todo List</h2>
      <input type="name" placeholder="Enter a new task" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
      <button onClick={addTodo}>Thêm</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

