// src/pages/HiPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import ButtonsRow from '../components/ButtonsRow';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const HiPage = () => {
  return (
    <div>
      <Navbar />
      <ButtonsRow />
      <div className="container mt-0" style={{ background: 'white'}}>
        {/* Section 1 */}
        <div
          className="mb-4 p-4 rounded"
          style={{
            background: '#f8f9fa',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            marginTop: '20px',
            
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
          <h2 className="mb-4" style={{color:'#991E20',fontWeight:'bold'}}>Welcome to Our Library</h2>
          <p className="line-height-1_6">
            Located in an Independent Building with an <strong>area of 18,500 sq. ft.</strong> spread over two floors (Ground & First).
          </p>
          <p className="line-height-1_6">
            Ground Floor accommodates <strong>Book Circulation Section</strong>, <strong>News Papers</strong>, <strong>Back Volumes of Periodicals</strong>, and <strong>Reprography / Photocopy</strong>.
          </p>
          <p className="line-height-1_6">
            First Floor accommodates <strong>Reference Books</strong>, <strong>Current Periodicals</strong>, <strong>E-learning Resource Centre</strong>, <strong>Digital Library</strong>, and <strong>Discussion Rooms</strong> etc.
          </p>
          <p className="line-height-1_6">Equipped with Modern infrastructure, with a reading capacity for <strong>350 Users</strong>.</p>
          <p className="line-height-1_6">Having a collection of more than <strong>1,00,000 (One Lakh) Volumes</strong>.</p>
          {/* <p className="line-height-1_6">Subscribing more than <strong>5000+ Online E-Journals</strong> through <strong>AICTE - INDEST Consortia</strong>.</p>
          <p className="line-height-1_6">Subscribing more than <strong>140+ Print Journals & Magazines</strong>.</p> */}
          <p className="line-height-1_6">
            Automated Library House Keeping operations by using <strong>NewGenLib Library integrated Software</strong>.
          </p>
        </div>

        {/* Section 2 */}
        <div
          className="mb-4 p-4 rounded"
          style={{
            background: '#f8f9fa',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            marginTop: '20px',
            
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
          <h2 className=" mb-4" style={{color:'#991E20',fontWeight:'bold'}}>Library Facilities</h2>
          <p className="line-height-1_6">
            Automated Library House Keeping operations by using <strong>NewGenLib Library integrated Software</strong>.
          </p>
          <p className="line-height-1_6">
            First Library which has got the AICTE Project on <strong>“Modernization and Networking of Library & Information Centre”</strong> under the <strong>MODROBS</strong>.
          </p>
          <p className="line-height-1_6">
            Well-established <strong>E-Learning Resource Centre</strong> with Latest i7 HP Multimedia Computers with 21 inch. Monitors for Online Learning ex. NPTEL, Swayam.
          </p>
          <p className="line-height-1_6">
            A Team of <strong>10 professionally qualified and trained staff</strong> aided by <strong>6 supporting staff</strong> manage the Library.
          </p>
          <p className="line-height-1_6">Subscribing more than <strong>5000+ Online E-Journals</strong> through <strong>AICTE - INDEST Consortia</strong>.</p>
          <p className="line-height-1_6">Subscribing more than <strong>140+ Print Journals & Magazines</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default HiPage;
