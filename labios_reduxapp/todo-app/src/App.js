import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from './store/taskSlice';

function App() {
  // This holds whatever the user types in the input box
  const [inputText, setInputText] = useState('');

  // Get the list of tasks from Redux store
  const tasks = useSelector((state) => state.tasks);

  // dispatch lets us send actions to the store
  const dispatch = useDispatch();

  // This runs when the user clicks "Add"
  const handleAdd = () => {
    if (inputText.trim() === '') return; // Don't add empty tasks
    dispatch(addTask(inputText));
    setInputText(''); // Clear the input after adding
  };

  // This runs when the user clicks "Delete" on a task
  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div style={styles.page}>

      <div style={styles.card}>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>📋 My To-Do List</h1>
          <p style={styles.subtitle}>Made By Jodel Labios</p>
        </div>

        {/* Input area */}
        <div style={styles.inputRow}>
          <input
            type="text"
            placeholder="Type a task here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleAdd} style={styles.addButton}>
            Add
          </button>
        </div>

        {/* Task count */}
        <p style={styles.countText}>
          {tasks.length === 0
            ? 'No tasks added yet.'
            : `You have ${tasks.length} task(s).`}
        </p>

        {/* Task list */}
        <ul style={styles.list}>
          {tasks.map((task) => (
            <li key={task.id} style={styles.listItem}>
              <span style={styles.taskText}>• {task.text}</span>
              <button
                onClick={() => handleDelete(task.id)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

// Simple inline styles — easier to read for beginners
const styles = {
  page: {
    backgroundColor: '#f0f4ff',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '60px',
  },
  card: {
    backgroundColor: '#ffffff',
    width: '480px',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  header: {
    backgroundColor: '#3b5bdb',
    margin: '-30px -30px 24px -30px',
    padding: '20px',
    borderRadius: '10px 10px 0 0',
    textAlign: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: '22px',
    margin: '0 0 4px 0',
  },
  subtitle: {
    color: '#bac8ff',
    fontSize: '13px',
    margin: 0,
  },
  inputRow: {
    display: 'flex',
    gap: '8px',
    marginBottom: '12px',
  },
  input: {
    flex: 1,
    padding: '10px 12px',
    fontSize: '14px',
    border: '1px solid #ced4da',
    borderRadius: '6px',
    outline: 'none',
  },
  addButton: {
    backgroundColor: '#3b5bdb',
    color: '#ffffff',
    border: 'none',
    padding: '10px 18px',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  countText: {
    fontSize: '13px',
    color: '#868e96',
    marginBottom: '16px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: '12px 14px',
    borderRadius: '6px',
    marginBottom: '8px',
    border: '1px solid #e9ecef',
  },
  taskText: {
    fontSize: '14px',
    color: '#343a40',
  },
  deleteButton: {
    backgroundColor: '#fa5252',
    color: '#ffffff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '5px',
    fontSize: '12px',
    cursor: 'pointer',
  },
};

export default App;
