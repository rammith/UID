// src/TodoApp.js
import React, { useState, useEffect } from 'react';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  const [input, setInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false, priority, dueDate: '' }]);
      setInput('');
      setPriority('Medium');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index].text);
    setPriority(todos[index].priority);
  };

  const saveEdit = (index) => {
    const newTodos = [...todos];
    newTodos[index].text = editingText;
    newTodos[index].priority = priority;
    setTodos(newTodos);
    setEditingIndex(null);
    setEditingText('');
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return todo.completed;
    if (filter === 'Pending') return !todo.completed;
    return todo.priority === filter;
  });

  return (
    <div className="todo-app">
      <h1 className="title">To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="priority-select">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={addTodo} className="add-button">Add</button>
      </div>
      <div className="filter-container">
        <button onClick={() => setFilter('All')} className="filter-button">All</button>
        <button onClick={() => setFilter('Completed')} className="filter-button">Completed</button>
        <button onClick={() => setFilter('Pending')} className="filter-button">Pending</button>
        <button onClick={() => setFilter('High')} className="filter-button">High Priority</button>
      </div>
      <ul className="list">
        {filteredTodos.map((todo, index) => (
          <li
            key={index}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="edit-input"
                />
                <select value={priority} onChange={(e) => setPriority(e.target.value)} className="priority-select">
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                <button onClick={() => saveEdit(index)} className="save-button">Save</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleTodo(index)} className="text">
                  {todo.text} - {todo.priority} Priority
                </span>
                <button onClick={() => editTodo(index)} className="edit-button">Edit</button>
                <button onClick={() => deleteTodo(index)} className="delete-button">Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
