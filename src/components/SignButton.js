import React from 'react';

const SignButton = ({ onSign }) => {
  return (
    <button className="sign-button" onClick={onSign}>
      Sign URL
    </button>
  );
};

export default SignButton;
