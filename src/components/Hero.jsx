import React from 'react';

export default function Hero() {
  return (
    <section style={styles.hero} id="hero">
      <h1 style={styles.heading}>Hi, I’m <span style={styles.highlight}>Dev Zubair</span></h1>
      <p style={styles.subheading}>
        🚀 Full-Stack Developer | React Specialist | Based in Pakistan
      </p>
      <a href="#projects" style={styles.cta}>View Projects</a>
    </section>
  );
}

const styles = {
  hero: {
    padding: '80px 20px',
    textAlign: 'center',
    background: 'linear-gradient(to right, #f1f5f9, #e2e8f0)',
  },
  heading: {
    fontSize: '2.8rem',
    marginBottom: '10px',
  },
  highlight: {
    color: '#0ea5e9',
  },
  subheading: {
    fontSize: '1.2rem',
    color: '#475569',
    maxWidth: '600px',
    margin: '0 auto 30px',
  },
  cta: {
    padding: '12px 24px',
    backgroundColor: '#0ea5e9',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 500,
  },
};
