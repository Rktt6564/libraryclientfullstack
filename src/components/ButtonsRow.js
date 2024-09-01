// src/components/ButtonsRow.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faInfoCircle,
  faClipboardList,
  faLayerGroup,
  faLink,
  faBook,
  faBookOpen,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const ButtonsRow = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease, color 0.3s ease',
  };

  return (
    <div className="container" style={{ padding: '10px', width: '100%', boxSizing: 'border-box', overflow: 'hidden' ,minWidth:'100%'}}>
    <div className="buttons-row" style={{ display: 'flex', gap: '90px', margin: '0 -15px' }}>
    <Link
          to="/"
          style={{
            ...buttonStyle,
            transform: activeButton === 'home' ? 'scale(1.05)' : 'scale(1)',
            color: location.pathname === '/' ? '#FF0000' : 'white',
          }}
          onClick={() => handleButtonClick('home')}
        >
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link
          to="/hi"
          style={{
            ...buttonStyle,
            transform: activeButton === 'about' ? 'scale(1.05)' : 'scale(1)',
            color: location.pathname === '/hi' ? '#FF0000' : 'white',
          }}
          onClick={() => handleButtonClick('about')}
        >
          <FontAwesomeIcon icon={faInfoCircle} /> About
        </Link>
        <Link
          to="/rules"
          style={{
            ...buttonStyle,
            transform: activeButton === 'rules' ? 'scale(1.05)' : 'scale(1)',
            color: location.pathname === '/rules' ? '#FF0000' : 'white',
          }}
          onClick={() => handleButtonClick('rules')}
        >
          <FontAwesomeIcon icon={faClipboardList} /> Rules
        </Link>
        <Link
          to="/collection"
          style={{
            ...buttonStyle,
            transform: activeButton === 'collection' ? 'scale(1.05)' : 'scale(1)',
            color: location.pathname === '/collection' ? '#FF0000' : 'white',
          }}
          onClick={() => handleButtonClick('collection')}
        >
          <FontAwesomeIcon icon={faLayerGroup} /> Collection
        </Link>
        <Link
          to="/links"
          style={{
            ...buttonStyle,
            transform: activeButton === 'links' ? 'scale(1.05)' : 'scale(1)',
            color: location.pathname === '/links' ? '#FF0000' : 'white',
          }}
          onClick={() => handleButtonClick('links')}
        >
          <FontAwesomeIcon icon={faLink} /> Links
        </Link>
        <Link
          to="/membership"
          style={{
            ...buttonStyle,
            transform: activeButton === 'membership' ? 'scale(1.05)' : 'scale(1)',
            color: location.pathname === '/membership' ? '#FF0000' : 'white',
          }}
          onClick={() => handleButtonClick('membership')}
        >
          <FontAwesomeIcon icon={faBook} /> Membership
        </Link>
        <Link
          to="/catalogue-opac"
          style={{
            ...buttonStyle,
            transform: activeButton === 'catalogue-opac' ? 'scale(1.05)' : 'scale(1)',
            color: location.pathname === '/catalogue-opac' ? '#FF0000' : 'white',
          }}
          onClick={() => handleButtonClick('catalogue-opac')}
        >
          <FontAwesomeIcon icon={faBookOpen} /> Catalogue-OPAC
        </Link>
        <Link
          to="/contact-us"
          style={{
            ...buttonStyle,
            transform: activeButton === 'contact-us' ? 'scale(1.05)' : 'scale(1)',
            color: location.pathname === '/contact-us' ? '#FF0000' : 'white',
          }}
          onClick={() => handleButtonClick('contact-us')}
        >
          <FontAwesomeIcon icon={faEnvelope} /> Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ButtonsRow;
