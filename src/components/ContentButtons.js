import React, { useState, useRef } from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { FaClock, FaImage, FaUsers, FaBook, FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'; // Import Font Awesome icons
import ContentA from './ContentA';
import ContentB from './ContentB';
import ContentC from './ContentC';
import ContentD from './ContentD';
import RecentAddedBooks from './RecentAddedBooks';

const links = [
  { text: 'Library Blog', url: 'https://chaitanyavartha.blogspot.com/' },
  { text: 'Academic Calendar', url: 'https://www.cbit.ac.in/current_students/acedamic-calendar/' },
  { text: 'Syllabus', url: 'https://www.cbit.ac.in/current_students/ug-and-pg-syllabus-structure/' },
  { text: 'Subject wise -Book Purchase Requisition Form-2023', url: 'https://www.library.cbit.ac.in/2023-CBIT-LIB%20-%20Subject-%20Book%20Requisation%20Form.xlsx' },
  { text: 'Open Educational Resources-AICTE', url: 'https://www.library.cbit.ac.in/OER-AICTE.pdf' },
  { text: 'Guidelines for Fair Use of E.Resources', url: 'https://www.library.cbit.ac.in/CBIT%20Guidelines%20for%20Fair%20Use%20of%20E.Resources%202020.pdf' },
  { text: 'Open Library', url: 'https://openlibrary.org/' },
  { text: 'CBIT-Journal Subscription Requisition Form', url: 'https://www.library.cbit.ac.in/2022-23-REF-Journal%20Requisition%20Form.pdf' },
  { text: 'National Digital Library of India', url: 'https://ndl.iitkgp.ac.in/' },
  { text: 'Browse Journals A-Z', url: 'http://jgateplus.com/search/journalFinder/' },
  { text: 'UGC Regulations on Ragging', url: 'https://www.library.cbit.ac.in/Documents/UGC-Ragging.pdf' },
  { text: 'How to reach CBIT', url: 'https://www.library.cbit.ac.in/First%20Year%20information.htm' },
  { text: 'Access Engineering - McGraw Hill', url: 'http://accessengineeringlibrary.com/' },
];

const ContentButtons = () => {
  const [content, setContent] = useState(null);
  const contentRef = useRef(null);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    let newContent = null;

    switch (button) {
      case 'A':
        newContent = <ContentA />;
        break;
      case 'B':
        newContent = <ContentB />;
        break;
      case 'C':
        newContent = <ContentC />;
        break;
      case 'D':
        newContent = <ContentD />;
        break;
      default:
        newContent = null;
    }

    setContent(newContent);
    setActiveButton(button);

    // Scroll to the content
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div>
      <p></p>
      {/* Add your 4 content buttons here */}
      <h4 style={{ textAlign: 'center', font: 'strong' }}><strong>Other Information</strong></h4>
      <div className="content-buttons">
        <button
          style={{ fontWeight: 'bold', fontSize: '16px', color: activeButton === 'A' ? 'red' : 'black' }}
          onClick={() => handleButtonClick('A')}
        >
          <FaClock /> <br /> Working hours
        </button>
        <button
          style={{ fontWeight: 'bold', fontSize: '16px', color: activeButton === 'B' ? 'red' : 'black' }}
          onClick={() => handleButtonClick('B')}
        >
          <FaImage /> <br /> Gallery
        </button>
        <button
          style={{ fontWeight: 'bold', fontSize: '16px', color: activeButton === 'C' ? 'red' : 'black' }}
          onClick={() => handleButtonClick('C')}
        >
          <FaUsers /> <br /> Staff
        </button>
        <button
          style={{ fontWeight: 'bold', fontSize: '16px', color: activeButton === 'D' ? 'red' : 'black' }}
          onClick={() => handleButtonClick('D')}
        >
          <FaBook /> <br /> E.Resources-OA
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} ref={contentRef}>
        {content}
      </div>

      <div style={{ marginTop: '10px' }}>
        <RecentAddedBooks />
      </div>

      

      <MDBFooter  className='text-white text-center text-lg-left' style={{ maxWidth: '100%', overflowX: 'hidden' ,backgroundColor:'#385728'}}>
        <MDBRow className='mt-2'>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>
              <img
                src="https://www.cbit.ac.in/wp-content/uploads/2023/04/CBIT-LOGO-2023.png"
                alt="Library Logo"
                height={100}
                width={300}
              />
            </h5>
            <p>
              College Contact Info
              Gandipet, Hyderabad, 
              <br />
              Telangana,
              PIN: 500075
              <br />
              Phone: 040-24193276
              Mobile: 8466997201
              <br />
              For Admissions Enquiry: 8466997216
              Email: principal@cbit.ac.in
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              {links.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a href={link.url} className='text-white'>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled'>
              {links.slice(4, 8).map((link, index) => (
                <li key={index}>
                  <a href={link.url} className='text-white'>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </MDBCol>
        </MDBRow>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-white' href='/'>
            S Y A G S A  
          </a>
        </div>
      </MDBFooter>
    
    </div>
  );
};

export default ContentButtons;
