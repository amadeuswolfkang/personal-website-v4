import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="text-center">
      {/* Your component JSX goes here */}
      <div className="flex space-x-3 flex-row justify-center">
        <FaLinkedin className="text-4xl" />
        <FaGithub className="text-4xl" />
        <FaTwitter className="text-4xl" />
      </div>
    </div>
  );
};

export default Contact;
