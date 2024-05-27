'use client';

import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Personal = () => {
  const variants = {
    hidden: { opacity: 0, y: -10 }, // start from off the top of the viewport
    visible: { opacity: 1, y: 0 }, // end at the normal position
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: 'easeOut', duration: 0.5}}
    >
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
              src="/headshot.png"
              alt="headshot"
              width={256}
              height={256}
              unoptimized={true}
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
    </motion.div>
  );
};

export default Personal;
