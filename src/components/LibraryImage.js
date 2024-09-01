import React from 'react';

const LibraryImage = () => {
  const containerStyles = {
    width: '100%',
    height: '73vh',
    overflow: 'hidden',
  };

  const imageStyles = {
    width: '100%',
    height: 'auto',
  };

  const textContainerStyles = {
    textAlign: 'center',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.8)',
  };

  const headingStyles = {
    fontWeight: 'bold',
  };

  return (
    <div>
      <div style={containerStyles}>
        <img
          src="https://i.pinimg.com/736x/ee/7b/85/ee7b853d736f0411eca4ada79a28358d.jpg"
          alt="Library"
          style={imageStyles}
        />
      </div>
      <div style={textContainerStyles}>
        <h2 style={headingStyles}>Welcome to Our Library</h2>
        <p>Explore the world of knowledge with our vast collection of books and resources.</p>
        <p>Libraries are invaluable repositories of knowledge, housing a vast collection of books, periodicals, and multimedia resources.</p>
        <p>They serve as quiet havens for study and research, providing a conducive environment for intellectual exploration and learning.</p>
        <p>Librarians play a crucial role in guiding patrons through the wealth of information, offering expertise in research strategies and resource utilization.</p>
        <p>Modern libraries have evolved to include digital archives and online databases, ensuring accessibility to information in the digital age.</p>
        <p>These communal spaces foster a sense of community, where individuals can gather to share ideas, collaborate on projects, and engage in the pursuit of knowledge.</p>
      </div>
    </div>
  );
};

export default LibraryImage;
