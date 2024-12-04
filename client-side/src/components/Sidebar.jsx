// import React, { useState } from 'react';
// import logo from '../assets/images/logo.png';

// const Sidebar = () => {
//   const [activeItem, setActiveItem] = useState('Users');
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const handleClick = (item) => {
//     setActiveItem(item);
//   };

//   const handleMouseEnter = (item) => {
//     setHoveredItem(item);
//   };

//   const handleMouseLeave = () => {
//     setHoveredItem(null);
//   };

//   return (
//     <div className="h-screen font-pop w-[16%] rounded-sm bg-bluegradient text-white flex flex-col items-start p-4 shadow-lg">
//       {/* Logo/Brand Name */}
//       <div className="my-3">
//         <img src={logo} alt="Description" />
//       </div>

//       <div className="flex flex-col justify-between">
//         {/* Navigation Items */}
//         <div className="flex flex-col gap-2">
//           <div
//             className={`text-sm text-left ml-4 py-2 pl-4 d  w-full rounded-[24px] font-bold ${
//               activeItem === 'Users'
//                 ? 'bg-[#a6c7e4] text-black'
//                 : `bg-transparent text-[#ffffff] ${
//                     hoveredItem === 'Users' ? 'hover:text-black hover:bg-[#ffffff]' : ''
//                   }`
//             }`}
//             onClick={() => handleClick('Users')}
//             onMouseEnter={() => handleMouseEnter('Users')}
//             onMouseLeave={handleMouseLeave}
//           >
//             Users
//           </div>

//           <div
//             className={`text-sm text-left ml-4 py-2 pl-4 d  w-full rounded-[24px] font-bold ${
//               activeItem === 'Roles'
//                 ? 'bg-[#a6c7e4] text-black'
//                 : `bg-transparent text-[#ffffff] ${
//                     hoveredItem === 'Roles' ? 'hover:text-black hover:bg-[#ffffff]' : ''
//                   }`
//             }`}
//             onClick={() => handleClick('Roles')}
//             onMouseEnter={() => handleMouseEnter('Roles')}
//             onMouseLeave={handleMouseLeave}
//           >
//             Roles
//           </div>

//           <div
//             className={`text-sm text-left ml-4 py-2 pl-4 d  w-full rounded-[24px] font-bold ${
//               activeItem === 'Permissions'
//                 ? 'bg-[#a6c7e4] text-black'
//                 : `bg-transparent text-[#ffffff] ${
//                     hoveredItem === 'Permissions' ? 'hover:text-black hover:bg-[#ffffff]' : ''
//                   }`
//             }`}
//             onClick={() => handleClick('Permissions')}
//             onMouseEnter={() => handleMouseEnter('Permissions')}
//             onMouseLeave={handleMouseLeave}
//           >
//             Permissions
//           </div>

//           <div
//             className={`text-sm text-left ml-4 py-2 pl-4 d  w-full rounded-[24px] font-bold ${
//               activeItem === 'Settings'
//                 ? 'bg-[#a6c7e4] text-black'
//                 : `bg-transparent text-[#ffffff] ${
//                     hoveredItem === 'Settings' ? 'hover:text-black hover:bg-[#ffffff]' : ''
//                   }`
//             }`}
//             onClick={() => handleClick('Settings')}
//             onMouseEnter={() => handleMouseEnter('Settings')}
//             onMouseLeave={handleMouseLeave}
//           >
//             Settings
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
// import React, { useState } from 'react';
// import logo from '../assets/images/logo.png';

// const Sidebar = ({ setActiveComponent }) => {
//   const [activeItem, setActiveItem] = useState('Users');
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const handleClick = (item) => {
//     setActiveItem(item);
//     setActiveComponent(item.toLowerCase()); // Notify the parent component about the selected item
//   };

//   const handleMouseEnter = (item) => {
//     setHoveredItem(item);
//   };

//   const handleMouseLeave = () => {
//     setHoveredItem(null);
//   };

//   return (
//     <div className="h-screen font-pop w-[16%] rounded-sm bg-bluegradient text-white flex flex-col items-start p-4 shadow-lg">
//       {/* Logo/Brand Name */}
//       <div className="my-3">
//         <img src={logo} alt="Description" />
//       </div>

//       <div className="flex flex-col justify-between">
//         {/* Navigation Items */}
//         <div className="flex flex-col gap-2">
//           <div
//             className={`text-sm text-left ml-4 py-2 pl-4 w-full rounded-[24px] font-bold ${
//               activeItem === 'Users'
//                 ? 'bg-[#a6c7e4] text-black'
//                 : `bg-transparent text-[#ffffff] ${
//                     hoveredItem === 'Users' ? 'hover:text-black hover:bg-[#ffffff]' : ''
//                   }`
//             }`}
//             onClick={() => handleClick('Users')}
//             onMouseEnter={() => handleMouseEnter('Users')}
//             onMouseLeave={handleMouseLeave}
//           >
//             Users
//           </div>

//           <div
//             className={`text-sm text-left ml-4 py-2 pl-4 w-full rounded-[24px] font-bold ${
//               activeItem === 'Roles'
//                 ? 'bg-[#a6c7e4] text-black'
//                 : `bg-transparent text-[#ffffff] ${
//                     hoveredItem === 'Roles' ? 'hover:text-black hover:bg-[#ffffff]' : ''
//                   }`
//             }`}
//             onClick={() => handleClick('Roles')}
//             onMouseEnter={() => handleMouseEnter('Roles')}
//             onMouseLeave={handleMouseLeave}
//           >
//             Roles
//           </div>

//           <div
//             className={`text-sm text-left ml-4 py-2 pl-4 w-full rounded-[24px] font-bold ${
//               activeItem === 'Permissions'
//                 ? 'bg-[#a6c7e4] text-black'
//                 : `bg-transparent text-[#ffffff] ${
//                     hoveredItem === 'Permissions' ? 'hover:text-black hover:bg-[#ffffff]' : ''
//                   }`
//             }`}
//             onClick={() => handleClick('Permissions')}
//             onMouseEnter={() => handleMouseEnter('Permissions')}
//             onMouseLeave={handleMouseLeave}
//           >
//             Permissions
//           </div>

//           <div
//             className={`text-sm text-left ml-4 py-2 pl-4 w-full rounded-[24px] font-bold ${
//               activeItem === 'Settings'
//                 ? 'bg-[#a6c7e4] text-black'
//                 : `bg-transparent text-[#ffffff] ${
//                     hoveredItem === 'Settings' ? 'hover:text-black hover:bg-[#ffffff]' : ''
//                   }`
//             }`}
//             onClick={() => handleClick('Settings')}
//             onMouseEnter={() => handleMouseEnter('Settings')}
//             onMouseLeave={handleMouseLeave}
//           >
//             Settings
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

const Sidebar = ({ setCurrentPage, currentPage }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClick = (item) => {
    setCurrentPage(item); // Notify the parent component about the selected item
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="h-screen font-pop w-[16%] rounded-sm bg-bluegradient text-white flex flex-col items-start p-4 shadow-lg">
      {/* Logo/Brand Name */}
      <div className="my-3">
        <img src={logo} alt="Description" />
      </div>

      <div className="flex flex-col justify-between">
        {/* Navigation Items */}
        <div className="flex flex-col gap-2">
          {['Users', 'Roles', 'Permissions', 'Settings'].map((item) => (
            <div
              key={item}
              className={`text-sm text-left ml-4 py-2 pl-4 w-full rounded-[24px] font-bold ${
                currentPage === item
                  ? 'bg-[#a6c7e4] text-black'
                  : `bg-transparent text-[#ffffff] ${
                      hoveredItem === item ? 'hover:text-black hover:bg-[#ffffff]' : ''
                    }`
              }`}
              onClick={() => handleClick(item)}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
