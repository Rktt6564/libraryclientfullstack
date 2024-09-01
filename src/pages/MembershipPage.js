// src/pages/MembershipPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import ButtonsRow from '../components/ButtonsRow';

const MembershipPage = () => {
  return (
    <div>
      <Navbar />
      <ButtonsRow />

      <div className="container mt-0" style={{ background: 'white' }}>
        <div
          className="mb-4 p-4 rounded"
          style={{
            background: '#f8f9fa',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            marginTop: '20px',
            textAlign: 'center', // Center the text
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
          <h2 className="mb-4" style={{ color: '#991E20', fontWeight: 'bold' }}>
            Membership
          </h2>
          <p className="line-height-1_6">
            All the Bonafide Students and Staff members of <strong>CBIT</strong> are eligible for membership and use the services of Library & Information Centre.
          </p>
          <p className="line-height-1_6">
            Application for membership should be made on the prescribed form which can be had from the Library's Information Desk.
          </p>
          <p className="line-height-1_6">All the registered members are called the users of Library.</p>
          <p className="line-height-1_6">
            The Library is primarily for the use of Faculty, Research Scholars, Students, and Non-Teaching employees of the Institute.
          </p>
          <p className="line-height-1_6">
            On special request, outsiders (Students, Faculty, Research scholars of other Colleges) are also permitted for a shorter period for research with written
            permission from the Librarian on the basis of a letter from the concerned Department / Institute.
          </p>
          <p className="line-height-1_6">The privilege of borrowing books from the library is restricted to <strong>CBIT Staff & Students</strong> only.</p>
          <p className="line-height-1_6">An overdue charge will be collected for returning the books after the due date.</p>
          <p className="line-height-1_6">Present Library Membership:</p>
          <p className="line-height-1_6">
            Students: <strong>5000+</strong>
          </p>
          <p className="line-height-1_6">
            Staff: <strong>350+</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
