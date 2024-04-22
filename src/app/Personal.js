import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Personal = () => {
  return (
    <div className="static md:sticky top-12 min-w-12">
      <div className="md:text-left text-center">
        {/* NAME AND INTRODUCTION */}
        <div className="text-nowrap text-5xl font-semibold mt-10 mb-3">
          Amadeus Kang
        </div>
        <div className="text-xl font-medium mb-2">Software Engineer</div>
        <div className="text-lg mb-8 font-light">Washington D.C.</div>

        {/* HEADSHOT */}
        <div className="flex items-center justify-center mb-10 h-64 md:w-64 md:h-64 ">
          <Image
            className="rounded-lg object-contain"
            src="/headshot.jpg"
            alt="headshot"
            width={256}
            height={256}
          />
        </div>

        {/* ICON BAR */}
        <div className="flex items-center justify-center md:justify-start">
          <div className="flex space-x-4 flex-row">
            <a
              href="https://www.linkedin.com/in/amadeuskang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-4xl transition ease-in hover:scale-110" />
            </a>
            <a
              href="https://github.com/amadeuswolfkang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-4xl transition ease-in hover:scale-110" />
            </a>
            <a
              href="https://twitter.com/AmadeusKang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-4xl transition ease-in hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
