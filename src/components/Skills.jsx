import React from 'react';

const skills = ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Git', 'Vite'];

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>My Skills</h2>
      <ul style={styles.grid}>
        {skills.map((skill, index) => (
          <li key={index} style={styles.skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 20px',
    backgroundColor: '#f1f5f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '30px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
    listStyle: 'none',
    padding: 0,
  },
  skill: {
    backgroundColor: '#0ea5e9',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 500,
  },
};
