import React from 'react';

function Hero() {
  return (
    <section style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Hello! I'm Thameya D. Borinaga</h1>
      <p>Welcome to my portfolio website.</p>
      <div style={{ marginTop: '20px' }}>
        <img
          src="/profile.jpg"
          alt="Profile"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #5C6B54'
          }}
        />
      </div>
    </section>
  );
}

export default Hero;