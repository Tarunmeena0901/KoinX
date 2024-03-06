import React from 'react';

const GradientLine = () => {
  return (
    <div className="container w-full h-2 relative">
      <div className="line absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 animate-gradient rounded-lg"></div>
    </div>
  );
};

export default GradientLine;
