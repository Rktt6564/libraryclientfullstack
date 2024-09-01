// src/pages/RulesPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import ButtonsRow from '../components/ButtonsRow';

const RulesPage = () => {
  return (
    <div>
      <Navbar />
      <ButtonsRow />
      <div
        className="container mt-0"
        style={{
          background: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
        }}
      >
        <div
          className="card p-4 rounded "
          style={{
            background: '#f8f9fa',
            transition: 'transform 0.3s ease',
            textAlign: 'left',
            color: 'black', // Set text color
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f8f9fa';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e2e6ea';
            e.currentTarget.style.transform = 'scale(1)';
            
          }}
        >
          <h1 style={{ color: '#991E20', fontWeight: 'bold' }}>Library Rules</h1>

          <p>
            <strong>SILENCE & CLEANLINESS:</strong> Should be strictly maintained in & around the Library & Information Centre.
          </p>
          <p>
            After obtaining the Institute Identity Card, all the Students are advised to apply for the Library Membership in a prescribed application form, which is available at the library Information Desk.
          </p>
          {/* Add more rules using similar <p> elements */}
          
          <p>
            Visit the Library & Information Centre website at <a href="http://www.library.cbit.ac.in">www.library.cbit.ac.in</a> & Library Blog at <a href="http://www.chaitanyavartha.blogspot.in/">www.chaitanyavartha.blogspot.in</a> for more information on Library Resources, Services, and Activities.
          </p>
          <p>
            Consult the Library Staff on Duty for any other Information or Clarification.
          </p>
          <p>
            Utmost Co-operation, Proper Communication, Discipline, and Conduct are always solicited.
          </p>
          <p>
            If you have any Suggestions and Problems in the Library & Information Centre, Please See the LIBRARIAN in person or send an E-mail to : <a href="mailto:librarian@cbit.ac.in">librarian@cbit.ac.in</a> or <a href="mailto:cbitlic@gmail.com">cbitlic@gmail.com</a>.
          </p>

          <p style={{ fontWeight: 'bold', marginTop: '20px', color: '#991E20' }}>
            GOOD LUCK & BEST WISHES
          </p>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
