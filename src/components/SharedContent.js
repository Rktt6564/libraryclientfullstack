// src/components/SharedContent.js
import React from 'react';
import Navbar from './Navbar';
import ButtonsRow from './ButtonsRow';
import LibraryImage from './LibraryImage';
import ContentButtons from './ContentButtons';

const SharedContent = () => {
  return (
    <div>
      <Navbar />
      <ButtonsRow />
      <LibraryImage />
      <ContentButtons />
    </div>
  );
};

export default SharedContent;
