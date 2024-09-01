// src/pages/CatalogueOPACPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import ButtonsRow from '../components/ButtonsRow';

const CatalogueOPACPage = () => {
  return (
    <div>
      <Navbar />
      <ButtonsRow />

      <div
        className="container mt-0"
        style={{
          marginTop: '20px',
          padding: '20px',
          textAlign: 'center',
          background: '#ffffff',
        }}
      >
        <div
          className="card p-4 rounded"
          style={{
            background: '#ffffff',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f8f9fa';

            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e2e6ea';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <h2 style={{ color: '#991E20', fontWeight: 'bold' }}>Library OPAC: Online Public Access Catalogue</h2>
          <div className="text-left">
            
            <p className="line-height-1_6">
              <strong>OPAC provides access to the CBIT Library database.</strong>
            </p>
            <p className="line-height-1_6">
              <strong>OPAC allows users to know the library collection and the status of Library Resources.</strong>
            </p>
            <p className="line-height-1_6">
              <strong>OPAC allows users to search the database by Title, Author, Call Number, Accession Number of the document/book.</strong>
            </p>
            <p className="line-height-1_6">
              <strong>Users can access CBIT Online Public Access Catalogue from any computer connected to the CBIT-LAN.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogueOPACPage;
