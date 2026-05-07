import React, { useEffect, useState } from 'react';

import API from './services/api';

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [page, setPage] = useState('dashboard');

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await API.get('/tasks');

      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async () => {
    try {
      await API.post('/tasks', {
        title: `Task ${tasks.length + 1}`,
        status: 'Pending',
        priority: 'High',
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const completeTask = async (id) => {
    try {
      await API.put(`/tasks/${id}`, {
        status: 'Completed',
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  if (page === 'login') {
    return <Login />;
  }

  if (page === 'register') {
    return <Register />;
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f1f5f9',
        padding: '40px',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '30px',
        }}
      >
        <h1
          style={{
            fontSize: '42px',
          }}
        >
          Team Task Manager App 🚀
        </h1>

        <div>
          <button
            onClick={() => setPage('login')}
            style={navButton}
          >
            Login
          </button>

          <button
            onClick={() => setPage('register')}
            style={navButton}
          >
            Register
          </button>
        </div>
      </div>

      <button
        onClick={addTask}
        style={{
          padding: '12px 20px',
          background: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          marginBottom: '30px',
          cursor: 'pointer',
        }}
      >
        Add Task
      </button>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}
      >
        <Card title='Projects' value='12' />

        <Card title='Tasks' value={tasks.length} />

        <Card
          title='Completed'
          value={
            tasks.filter(
              (t) => t.status === 'Completed'
            ).length
          }
        />

        <Card
          title='Pending'
          value={
            tasks.filter(
              (t) => t.status === 'Pending'
            ).length
          }
        />
      </div>

      <div
        style={{
          marginTop: '40px',
          background: 'white',
          padding: '30px',
          borderRadius: '12px',
        }}
      >
        <h2>Recent Tasks</h2>

        <table
          style={{
            width: '100%',
            marginTop: '20px',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Task</th>

              <th style={thStyle}>Status</th>

              <th style={thStyle}>Priority</th>

              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td style={tdStyle}>
                  {task.title}
                </td>

                <td style={tdStyle}>
                  {task.status}
                </td>

                <td style={tdStyle}>
                  {task.priority}
                </td>

                <td style={tdStyle}>
                  <button
                    onClick={() =>
                      completeTask(task._id)
                    }
                    style={completeBtn}
                  >
                    Complete
                  </button>

                  <button
                    onClick={() =>
                      deleteTask(task._id)
                    }
                    style={deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        background: 'white',
        padding: '30px',
        borderRadius: '12px',
      }}
    >
      <h2>{title}</h2>

      <p
        style={{
          fontSize: '40px',
          marginTop: '10px',
        }}
      >
        {value}
      </p>
    </div>
  );
}

const navButton = {
  padding: '10px 18px',
  marginLeft: '10px',
  background: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
};

const completeBtn = {
  padding: '8px 12px',
  background: 'green',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  marginRight: '10px',
  cursor: 'pointer',
};

const deleteBtn = {
  padding: '8px 12px',
  background: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

const thStyle = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #ddd',
};

const tdStyle = {
  padding: '12px',
  borderBottom: '1px solid #eee',
};

export default App;