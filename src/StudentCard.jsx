// This component shows the student info and toggles their bio.

import React from 'react';

// Function component with props - name, major, year, bio, imageUrl
function StudentCard(props) {
  // Destructing props
  const { name, major, year, bio, imageUrl } = props;
  // showBio is a handle, setShowBio is the one to be updated using useState hook
  const [showBio, setShowBio] = React.useState(false);

  // This is the toggle for the bio
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  // Student info rendering from here
  return (
    <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>
      <button onClick={toggleBio} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}

// Export the component
export default StudentCard;
