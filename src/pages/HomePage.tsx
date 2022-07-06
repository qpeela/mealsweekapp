import React from 'react';

const HomePage = () => {
  return (
    <div>
      homepage
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        logout
      </button>
    </div>
  );
};

export default HomePage;
