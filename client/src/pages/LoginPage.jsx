import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    alert('Logging in as ' + role + ' with email: ' + email);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Login</h2>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
            placeholder="Enter your email"
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
            placeholder="Enter your password"
          />
        </label>
        <label style={styles.label}>
          Role:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.select}
          >
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
            <option value="student">Student</option>
          </select>
        </label>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    width: 320,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginBottom: 24,
    color: '#333',
    textAlign: 'center',
  },
  label: {
    marginBottom: 16,
    color: '#555',
    fontSize: 14,
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginTop: 8,
    padding: 10,
    fontSize: 14,
    borderRadius: 4,
    border: '1px solid #ccc',
  },
  select: {
    marginTop: 8,
    padding: 10,
    fontSize: 14,
    borderRadius: 4,
    border: '1px solid #ccc',
  },
  button: {
    marginTop: 24,
    padding: 12,
    backgroundColor: '#667eea',
    color: '#fff',
    fontSize: 16,
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default LoginPage;
