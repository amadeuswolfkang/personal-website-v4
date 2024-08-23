'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Resume = () => {
  const variants = {
    hidden: { opacity: 0, y: -10 }, // start from off the top of the viewport
    visible: { opacity: 1, y: 0 }, // end at the normal position
  };

  return (
    <motion.div
      className="flex flex-col text-left"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: 'easeOut', duration: 0.5, delay: 0.5}}
    >
      <div className="flex flex-col text-left">
        {/* RESUME CARDS */}
        <div className="flex flex-col mt-10">
          {/* EDUCATION */}
          <h2 class="text-2xl font-bold dark:text-white mb-4">Education</h2>
          <div className="block max-w-md mb-8">
            <h5 className="text-md font-bold text-gray-900 dark:text-white">
              James Madison University
            </h5>
            <h5 className="mb-2 text-md text-gray-900 dark:text-white">
              B.S. Computer Science
            </h5>
          </div>

          <h2 class="text-2xl font-bold dark:text-white mb-4">Experience</h2>

          {/* CONSERVATON INTERNATIONAL */}
          <div className="mb-8">
            <a
              href="https://www.conservation.org/"
              target="_blank"
              className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="text-md font-bold text-gray-900 dark:text-white">
                Conservation International
              </h5>
              <h5 className="mb-2 text-md text-gray-900 dark:text-white">
                IT Coordinator
              </h5>
              <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
                Scripted in PowerShell. Managed IT asset inventory. Supported
                audio-video systems for board meetings. Configured 50+ PCs and
                MacBooks. Resolved 500+ tickets.
              </p>
              <div className="flex flex-wrap">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                  PowerShell
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                  Jamf
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                  Microsoft 365 Administration
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                  Active Directory
                </span>
              </div>
            </a>
          </div>

          {/* GAME GYM */}
          <div className="mb-8">
            <a
              href="https://gamegym.com/"
              target="_blank"
              className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="text-md font-bold text-gray-900 dark:text-white">
                Game Gym
              </h5>
              <h5 className="mb-2 text-md text-gray-900 dark:text-white">
                Web Development Intern
              </h5>
              <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
                Developed 60+ video pages for Game Gym&apos;s website which
                receives 10k+ monthly visits. Managed content in Wordpress and
                edited web page themes in Divi.
              </p>
              <div className="flex flex-wrap">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                  JavaScript
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                  HTML
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                  CSS
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* PROJECTS */}
        <h2 class="text-2xl font-bold dark:text-white mb-4">Projects</h2>
        {/* PROJECT CARDS */}
        {/* LEAGUE RANKER */}
        <div className="mb-8">
          <a
            href="https://leagueranker.netlify.app/"
            target="_blank"
            class="flex flex-col items-center max-w-md bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg p-4"
              src="/leagueranker-thumbnail.png"
              alt=""
              width={500} // Add the width property
              height={300} // Add the height property
            />

            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                League Ranker
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Fetches ranked player stats for the video game League of
                Legends.
              </p>
              <div className="flex flex-wrap">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                  React
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                  Vite
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                  TypeScript
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                  Chakra UI
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Nuclear Inventory Graph */}
        <div className="mb-8">
          <a
            href="/nuke-stats-d3-bounce.gif"
            target="_blank"
            class="flex flex-col max-w-md items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg p-4"
              src="/nukes-d3-graph.png"
              alt=""
              width={500} // Add the width property
              height={300} // Add the height property
            />

            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Nuclear Inventory Data Visualization
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Dynamic bar graph tracking nuclear warheads by country.
              </p>
              <div className="flex flex-wrap">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                  JavaScript
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                  D3.js
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                  react-flags
                </span>
              </div>
            </div>
          </a>
        </div>

        <h2 class="text-2xl font-bold dark:text-white mb-4">About</h2>
        <div className="block max-w-md mb-48">
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-400">
            The first time I touched a computer, I was 6 years old in my
            dad&apos;s room. I was clicking buttons and links before I could
            even read. I became fascinated with the progressiveness of modern
            technology. By the time I was 10, I was already cruising forums and
            talking to people across the globe.
          </p>
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-400">
            I followed destiny and now I work in technology!
          </p>
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-400">
            In my free time, I tinker with coding projects. I&apos;m an avid reader and I study whatever piques my curiosity. I read everything from statistics to philosophy. I&apos;m also a fan of manga and competitive video games.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
