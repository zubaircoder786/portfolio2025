import React from 'react';

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.text}>You can reach me at <a href="mailto:devzubair@email.com" style={styles.link}>devzubair@email.com</a></p>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#e2e8f0',
    padding: '60px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.1rem',
    color: '#334155',
  },
  link: {
    color: '#0ea5e9',
    textDecoration: 'none',
  },
};
