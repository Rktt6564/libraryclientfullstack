// src/pages/UsefulLinks.js
import React from 'react';
import Navbar from '../components/Navbar';
import ButtonsRow from '../components/ButtonsRow';

const UsefulLinks = () => {
  const cardStyle = {
    background: '#f8f9fa',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    marginTop: '20px',
    padding: '20px',
    borderRadius: '15px',
    color: '#212529',
    margin: 'auto',
    width: '50%', // Adjust the width as needed
    textAlign:'center'
  };

  return (
    <div>
      <Navbar />
      <ButtonsRow />

      <div style={{ paddingTop: '120px', textAlign: 'center' }}>
        {/* Add content for the Sections page */}
      </div>

      <div style={cardStyle} onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f8f9fa';
        e.currentTarget.style.transform = 'scale(1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#e2e6ea';
        e.currentTarget.style.transform = 'scale(1)';
      }}>
        <h2 style={{ color: '#991E20', fontWeight: 'bold' }}>USEFUL INTERNET LINKS</h2>

        <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'left' }}>
          <li style={{textAlign:'center'}}><a href="http://www.indiascience.in/">India.Science.Com Website</a></li>
          <li style={{textAlign:'center'}}><a href="http://shodhganga.inflibnet.ac.in/">Indian Theses Reservoir: SHODH GANGA</a></li>
          <li style={{textAlign:'center'}}><a href="http://www.ndltd.org/">Networked Digital Library of Theses and Dissertations - NDLTD</a></li>
          <li style={{textAlign:'center'}}><a href="https://blogging.com/cite-online-sources">How to cite Online Sources - Blog</a></li>
          {/* ... rest of the links ... */}
        </ul>

        {/* ... rest of the content ... */}

      </div>
    </div>
  );
};

export default UsefulLinks;
