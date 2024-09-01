import React, { useState } from 'react';

const ContentB = () => {
  const [currentImage, setCurrentImage] = useState(1);

  const goToNextImage = () => {
    setCurrentImage((prev) => (prev < 3 ? prev + 1 : 1));
  };

  const goToPrevImage = () => {
    setCurrentImage((prev) => (prev > 1 ? prev - 1 : 3));
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
       


      <div
        style={{
          display: 'flex',
          width: '50%', // Adjusted width to accommodate three images
          transform: `translateX(-${(currentImage - 1) * 100}%)`,
          transition: 'transform 1s ease-in-out',
        }}
      >
        <img
          style={{ width: '100%' }}
          src="https://www.library.cbit.ac.in/images/2021-Lib.Phots/LibFront.jpg" // Replace with your first image URL
          alt={`Slide ${currentImage}`}
        />
        
        <img
          style={{ width: '100%' }}
          src="https://www.library.cbit.ac.in/images/2021-Lib.Phots/LibraryTean.jpg" // Replace with your third image URL
          alt={`Slide ${currentImage + 1}`}
        />
        <img
          style={{ width: '100%' }}
          src="https://www.library.cbit.ac.in/images/2021-Lib.Phots/Foyer.jpg" // Replace with your third image URL
          alt={`Slide ${currentImage + 2}`}
        />
        <img
          style={{ width: '100%' }}
          src="https://www.library.cbit.ac.in/images/2021-Lib.Phots/FoyerReading.jpg" // Replace with your third image URL
          alt={`Slide ${currentImage + 3}`}
        />
      </div>
      <button style={{ position: 'absolute', top: '50%', left: '10px', zIndex: '1' }} onClick={goToPrevImage}>
        &#10094;
      </button>
      <button style={{ position: 'absolute', top: '50%', right: '10px', zIndex: '1' }} onClick={goToNextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default ContentB;
