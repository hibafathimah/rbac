import { useState, useRef, useEffect } from 'react';
import downarrow from "../assets/images/arrow-down.svg"
import profile from '../assets/images/blackprofile.svg';
import setting from '../assets/images/blacksettings.svg';
import logoutimg from '../assets/images/logout.svg'
import { Link } from 'react-router-dom';

// ProfileDrpdwn component for displaying a dropdown menu for profile and settings
const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown open/close
  const dropdownRef = useRef(null); // Ref to access dropdown DOM node
 
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
 
  // Function to handle opening/closing dropdown on button click
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
 
  return (

   
    <div className="relative inline-block text-left font-pop" ref={dropdownRef}>
      {/* Button to toggle dropdown visibility */}
      <button
        type="button"
        className="inline-flex items-center px-2 py-1 border-none text-sm leading-5 font-medium rounded-md text-gray-700
        focus:outline-none  transition ease-in-out duration-150"
        onClick={handleButtonClick}
      >
        <img src={downarrow} alt="dropdown" className="w-4 h-4 mt-2 mr-3" />
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute z-50 mt-2 right-2 w-44 rounded-[18px] shadow-ip bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {/* Menu items */}
            <Link href="#" className="gap-3 px-5 flex py-2 rounded-[17px] text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900" role="menuitem">
              <img src={profile} alt='profile' />Profile
            </Link>
            <Link href="#" className="gap-3 px-5 flex py-2 rounded-[17px] text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900" role="menuitem">
              <img src={setting} alt='settings' />Settings
            </Link>
            <Link href="#" className="gap-3 px-5 flex py-2 rounded-[17px] text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900" role="menuitem">
              <img src={logoutimg} alt='logout-img' />Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default ProfileDropdown;




