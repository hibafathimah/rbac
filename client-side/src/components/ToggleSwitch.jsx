import { useState } from 'react';
import sun from '../assets/images/sun.svg'
import moon from '../assets/images/moon.svg'
 
const Toggleswitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="theme-switch mr-4">
      <input
        type="checkbox"
        id="theme-checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="theme-checkbox">
        <div></div>
        <span>
          <img
            src={sun}
            alt="First img"
            width={30} className='pr-2'
          />
        </span>
        <span>
          <img
            src={moon}
            alt="Second img"
            width={30} className='pl-2'
          />
        </span>
      </label>

      <style jsx>{`
        .theme-switch {
          position: relative;
          display: flex;
          justify-content: center;
          direction: rtl;
        }

        #theme-checkbox {
          display: none;
        }

        #theme-checkbox + label {
          font-size: 2rem; /* adjust as needed */
          height: 35px;
          width: 2.4em;
          border-radius: 15px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          background-color: #E6E6E6;
          position: relative;
        }

        #theme-checkbox:checked + label {
          background-color: #747474;
        }

        #theme-checkbox + label:active {
          transform: scale(0.85);
          transition: transform 0.2s;
        }

        #theme-checkbox + label div {
          width: 1em;
          height: 0.9em;
          border-radius: 19px;
          position: absolute;
          top: 0.1em;
          left: 0.1em;
          z-index: 10;
          transition: 0.4s cubic-bezier(1, 0.33, 0.11, 1.34);
          background-color: #f2f2f2;
        }

        #theme-checkbox:checked + label div {
          left: 1.26em; 
          background-color: #212121;
        }

        #theme-checkbox + label span {
          display: flex;
        }

        #theme-checkbox + label .icon-img {
          height: 1em;
          width: 1em;
          padding: 0.15em;
          box-sizing: border-box;
        }

        
      `}</style>
    </div>
  );
};

export default Toggleswitch;
 