import React from 'react';

const Resume = () => {
  return (
    <div className="flex flex-col text-left">
      {/* RESUME CARDS */}
      <div className="flex flex-col mt-10">
        {/* EDUCATION */}
        <div className="block max-w-md mb-8">
          <h5 class="text-md font-bold text-gray-900 dark:text-white">
            James Madison University
          </h5>
          <h5 class="mb-2 text-md text-gray-900 dark:text-white">
            B.S. Computer Science
          </h5>
        </div>

        {/* CONSERVATON INTERNATIONAL */}
        <div className="mb-8">
          <a
            href="https://www.conservation.org/"
            target="_blank"
            class="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="text-md font-bold text-gray-900 dark:text-white">
              Conservation International
            </h5>
            <h5 class="mb-2 text-md text-gray-900 dark:text-white">
              IT Coordinator
            </h5>
            <p class="mb-2 text-sm text-gray-700 dark:text-gray-400">
              Scripted in PowerShell. Managed IT asset inventory. Supported
              audio-video systems for board meetings. Configured 50+ PCs and
              MacBooks. Resolved 500+ tickets.
            </p>
            <div class="flex flex-wrap">
              <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                PowerShell
              </span>
              <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                Jamf
              </span>
              <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                Microsoft 365 Administration
              </span>
              <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
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
            class="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="text-md font-bold text-gray-900 dark:text-white">
              Game Gym
            </h5>
            <h5 class="mb-2 text-md text-gray-900 dark:text-white">
              Web Development Intern
            </h5>
            <p class="mb-2 text-sm text-gray-700 dark:text-gray-400">
              Developed 60+ video pages for Game Gym's website which receives
              10k+ monthly visits. Managed content in Wordpress and edited web
              page themes in Divi.
            </p>
            <div class="flex flex-wrap">
              <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                JavaScript
              </span>
              <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                HTML
              </span>
              <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-1 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">
                CSS
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <div className="block max-w-md mb-48 mt-4">
        <p class="mb-4 text-sm text-gray-700 dark:text-gray-400">
          The first time I touched a computer, I was 6 years old in my dad's
          room. I was clicking buttons and links before I could even read. I
          became irreversibly fascinated with the progressiveness of modern
          technology. By the time I was 10, I was already cruising forums and
          talking to people across the globe.
        </p>
        <p class="mb-4 text-sm text-gray-700 dark:text-gray-400">
          I followed destiny and now I'm a software engineer based in Washington
          D.C.
        </p>
        <p class="mb-4 text-sm text-gray-700 dark:text-gray-400">
          In my free time, I work on personal projects and mentor others in
          coding. I'm also an avid manga reader and competitive video game
          player.
        </p>
      </div>
    </div>
  );
};

export default Resume;
