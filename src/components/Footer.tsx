import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className='mt-4'>
    <footer className="bg-blue-900">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 me-3"
            alt="FlowBite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            TICKET  SYSTEM  
          </span>
        </a>  
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
            Features
          </h2>
          <ul className="text-gray-500 dark:text-gray-200 font-medium">
            <li className="mb-4">
              <a href="" className="hover:underline text-white">
                Project management
              </a>
            </li>
            <li>
              <a href="" className="hover:underline text-white">
                Ticket Management
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
            Follow us
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="https://github.com/Felexonyango/ReactProject" className="hover:underline text-white">
                Github
              </a>
            </li>
            <li>
              <a href="https://twitter.com/felexonyango02" className="hover:underline text-white">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
            Legal
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm  sm:text-center text-white">
        © 2024{' '}
        <a href="https://flowbite.com/" className="hover:underline text-white">
          Ticket™
        </a>
        . All Rights Reserved.
      </span>
      <div className="flex mt-4 sm:justify-center sm:mt-0">
        {/* Social media icons go here */}
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};
