import React from 'react';

const ContentD = () => {
  const imageCardStyle = {
    width: '48%', // Adjusted width to display two images in a row
    margin: '0 1%', // Added margin for spacing
    overflow: 'hidden',
    position: 'relative',
    height:'350px'
  };

  const imageStyle = {
    width: '100%',
    transition: 'transform 0.3s ease-in-out',
    height:'350px'

  };

  const textContainerStyle = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '10px',
    boxSizing: 'border-box',
    transition: 'transform 0.3s ease-in-out',
    transform: 'translateY(100%)',
  };

  const handleHover = (event) => {
    event.currentTarget.querySelector('.text-container').style.transform = 'translateY(0)';
  };

  const handleHoverOut = (event) => {
    event.currentTarget.querySelector('.text-container').style.transform = 'translateY(100%)';
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', flexWrap: 'wrap' }}>
      <div
        style={{ ...imageCardStyle }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <img
          src="https://www.library.cbit.ac.in/images/2021-Lib.Phots/InfoDesk.jpg"
          alt="man"
          style={{ ...imageStyle }}
          className="image"
        />
        <div style={{ ...textContainerStyle }} className="text-container">
          <strong>Information Desk:</strong> The main function is to provide information about the library operation and services to the students. Enrollment of Students, faculty and staff members, Maintaining Old Records and Registers, and Issue of No-Due Certificate. General inquiries.
        </div>
      </div>
      <div
        style={{ ...imageCardStyle }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <img
          src="https://www.library.cbit.ac.in/images/2021-Lib.Phots/Circulation.jpg"
          alt="Image3"
          style={{ ...imageStyle }}
          className="image"
        />
        <div style={{ ...textContainerStyle }} className="text-container">
          <strong>Circulation:</strong> The Main function of the Circulation Section is lending library books to the users of the library. Library Circulation includes checking out library materials to library users, checking in materials returned, checking the materials for damage at the time of return, if found damaged then giving that to responsible staff for repair and when repair is not possible then replacement, receiving payment of fines for damaged and overdue materials, maintaining order in the stacks by re-shelving the library materials by the call number given by the classification system. The image of the library depends upon the functions of the Circulation Section because a majority of the users in academic libraries interact with the staff of this Circulation Section. For library transactions (i.e., for the issue and return of documents), the Library Circulation Counter is open between 9 AM and 4.15 PM on all working days.
        </div>
      </div>
      <div
        style={{ ...imageCardStyle }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <img
          src="https://www.library.cbit.ac.in/images/2021-Lib.Phots/Acq.jpg"
          alt="Image2"
          style={{ ...imageStyle }}
          className="image"
        />
        <div style={{ ...textContainerStyle }} className="text-container">
         <strong>Acquisition</strong>  Section procures library documents - books and non-book material to build the collection or add stock to the library. Acquisition functions include selection of documents as well as suppliers, verification, placing purchase orders, receiving, accessioning, and providing information to indenters regarding the status of ordered documents, and processing bills for payment. Technical Processing i.e., Classification and Cataloguing makes a bridge between Acquisition of documents and their Circulation. It also plays a vital role in the functioning of library services smoothly and effectively. Classification is a process for assigning a Call Number to a document, which fixes its position in the rack among the titles on the same subject. Call Number consists of three parts, Class Number, Book number, and Collection Number. CBIT follows AACR-II for Cataloguing of Books/ AACR-II provides complete guidelines for the cataloguing of the library materials. The library Online Public Access Catalogue is updated in the LMS system.
        </div>
      </div>
      <div
        style={{ ...imageCardStyle }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <img
          src="https://www.library.cbit.ac.in/images/2021-Lib.Phots/Reference1.jpg"
          alt="Image4"
          style={{ ...imageStyle }}
          className="image"
        />
        <div style={{ ...textContainerStyle }} className="text-container">
        <strong>Reference section:</strong>   The reference section is the hub of all referral and reference services of a library. It will provide answers to the queries of the users. But in a broader sense, it may have to provide a variety of services and perform functions necessary to help the users including providing information service on-demand and in anticipation, providing instruction in the use of the library, selection of documents, organization of reference materials, etc. This section is on the First Floor having all the services at the Reference Desk and the Reading Hall for serious readers. The Reference section of this library has a very rich collection of encyclopedias and competitive books to cater to the demands of readers effectively. There are more than 10,000 title books in this section.
        </div>
      </div>
      {/* Add more pairs of images and text containers as needed */}
    </div>
  );
};

export default ContentD;
