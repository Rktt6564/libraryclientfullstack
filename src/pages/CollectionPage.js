// src/pages/CollectionPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import ButtonsRow from '../components/ButtonsRow';

const CollectionPage = () => {
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
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e2e6ea';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <h1 className="mb-4" style={{ color: '#991E20', fontWeight: 'bold' }}>
            Library Collection / Resources
          </h1>

          <p className="mb-4">
            <strong>As on 01 - November - 2023</strong>
          </p>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Total Collection</th>
                <th>Books</th>
                <th>Back Volumes</th>
                <th>Project Reports</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,20,140</td>
                <td>1,09,562</td>
                <td>02,217</td>
                <td>08,361</td>
              </tr>
            </tbody>
          </table>

          <p className="mb-4">
            <strong>Total no. of Titles: </strong>22,956
          </p>
          <p className="mb-4">
            <strong>Total no. of CD-ROMs: </strong>4,393
          </p>
          <p className="mb-4">
            <strong>Total no. of Journals: </strong>5,500+
          </p>

          <h2 className="mb-4" style={{ color: '#991E20', fontWeight: 'bold' }}>
            2023- E-Journals Subscription Packages
          </h2>

          <ol>
            <li>IEEE Xplore Digital Library (ASPP-POP)</li>
            <li>Springer - Electrical, Electronics & Comp.Science</li>
            <li>ASME E-journal Package</li>
            <li>ASCE E-Journal Package</li>
            <li>Mc-Graw Hill - Access Engg. Library</li>
            <li>J-Gate - Engg & Technology</li>
            <li>Elsevier - Science Direct</li>
            <li>Elsevier - SCOPUS</li>
            <li>J-Gate - Management Sciences</li>
            <li>EBSCO - Business elite E-journals</li>
            <li>Pro-Quest Management Collection E-journals</li>
            <li>E.Journals of The Institution of Engineers</li>
          </ol>

          <h2 className="mb-4" style={{ color: '#991E20', fontWeight: 'bold' }}>
            Open Access Journals
          </h2>

          <ol>
            <li>NISCAIR Publications / Journals</li>
            <li>Indian Academy of Science Publications / Journals</li>
            <li>Directory of Open Access Journals</li>
          </ol>

          <p className="mb-4">
            <strong>Note: </strong>In addition to the above resources, the library provides links to more than 4000 Open Access Journals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
