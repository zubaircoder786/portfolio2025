import React from 'react';
import reactpic from '../images/reactpic.png'; // ← Corrected path

export default function Profile() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.card}>
        <img src={reactpic} alt="Dev Zubair" style={styles.avatar} />
        <h2 style={styles.name}>Dev Zubair</h2>
        <p style={styles.bio}>
          💻 React Developer • 🚀 Building Smart UIs • 📍 Based in Pakistan
        </p>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    background: '#fff',
    padding: '60px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    textAlign: 'center',
    maxWidth: '400px',
  },
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    border: '4px solid #0ea5e9',
  },
  name: {
    fontSize: '1.6rem',
    marginBottom: '10px',
  },
  bio: {
    fontSize: '1rem',
    color: '#475569',
  },
};
