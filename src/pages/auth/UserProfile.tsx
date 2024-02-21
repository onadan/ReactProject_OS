import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { logout } from '../../utils/util';
import { useNavigate } from 'react-router-dom';

const UserProfile: React.FC = () => {
  let navigate = useNavigate();
  const Logout = () => {
    logout();
    navigate('/');
  };
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center gap-y-2">
        <div className="flex items-center gap-x-4">
          <FaSignOutAlt className="text-xl text-gray-500 hover:text-gray-800 cursor-pointer" />
          <button
            onClick={() => Logout()}
            className="text-sm text-gray-500 hover:text-gray-800 cursor-pointer">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
