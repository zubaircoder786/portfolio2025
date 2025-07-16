import React from 'react';

const projects = [
  { title: 'To-Do App', desc: 'A full-featured task manager in React.', link: '#' },
  { title: 'Portfolio Site', desc: 'Modern personal site using React & Vite.', link: '#' },
];

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.grid}>
        {projects.map((proj, idx) => (
          <div key={idx} style={styles.card}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <a href={proj.link} style={styles.link}>View</a>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 20px',
    backgroundColor: '#f8fafc',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    background: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  link: {
    marginTop: '10px',
    display: 'inline-block',
    color: '#0ea5e9',
    textDecoration: 'none',
  },
};
