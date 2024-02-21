
import React from 'react';
import {  FaSignOutAlt } from 'react-icons/fa'; 

const UserProfile: React.FC = () => {

  return (
    <div className="mt-20">
      <div className="flex flex-col items-center gap-y-2">
      
        <div className="flex items-center gap-x-4">
          {/* Add a logout button */}
          <FaSignOutAlt className="text-xl text-gray-500 hover:text-gray-800 cursor-pointer" />
          <button
            onClick={() => {
              // Add logic to handle logout
              console.log('Logout clicked');
            }}
            className="text-sm text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
