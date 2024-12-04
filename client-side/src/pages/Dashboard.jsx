// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar';
// import UserManagement from '../pages/UserManagement';
// import RoleManagement from '../pages/RoleManagement';
// import Permissions from '../pages/Permissions';

// const Dashboard = () => {
//   const [currentPage, setCurrentPage] = useState('Users');

//   const renderContent = () => {
//     switch (currentPage) {
//       case 'Users':
//         return <UserManagement />;
//       case 'Roles':
//         return <RoleManagement />;
//       case 'Permissions':
//         return <Permissions />;
//       default:
//         return <div className="text-center">Please select a valid page.</div>;
//     }
//   };

//   return (
//     <div className="w-full font-pop flex">
//       <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />
//       <div className="flex flex-col w-[88%] mt-3 rounded-[24px] bg-gray-100">
//         <Navbar />
//         <div className="p-6">{renderContent()}</div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar'; // Sidebar component
// import Navbar from '../components/Navbar'; // Navbar component
// import UserManagement from '../pages/UserManagement'; // UserManagement page
// import RoleManagement from '../pages/RoleManagement'; // RoleManagement page
// import Permissions from '../pages/Permissions'; // Permissions page
// import Settings from '../components/Settings'; // Settings page (add this if not already imported)

// const Dashboard = () => {
//   // State to track the current active page
//   const [currentPage, setCurrentPage] = useState('Users');

//   // Dynamically render content based on the current page
//   const renderContent = () => {
//     switch (currentPage) {
//       case 'Users':
//         return <UserManagement />;
//       case 'Roles':
//         return <RoleManagement />;
//       case 'Permissions':
//         return <Permissions />;
//       case 'Settings':
//         return <Settings />;
//       default:
//         return <div className="text-center">Please select a valid page.</div>;
//     }
//   };

//   return (
//     <div className="w-full font-pop flex">
//       {/* Sidebar */}
//       <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />

//       {/* Main Content Area */}
//       <div className="flex flex-col w-[88%] mt-3 rounded-[24px] bg-gray-100">
//         {/* Navbar */}
//         <Navbar />

//         {/* Content Area */}
//         <div className="p-6">{renderContent()}</div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'; // Sidebar component
import Navbar from '../components/Navbar'; // Navbar component
import UserManagement from '../pages/UserManagement'; // UserManagement page
import RoleManagement from '../pages/RoleManagement'; // RoleManagement page
import Permissions from '../pages/Permissions'; // Permissions page
import Settings from '../components/Settings'; // Settings page

const Dashboard = () => {
  // State to track the current active page
  const [currentPage, setCurrentPage] = useState('Users');

  // Dynamically render content based on the current page
  const renderContent = () => {
    switch (currentPage) {
      case 'Users':
        return <UserManagement />;
      case 'Roles':
        return <RoleManagement />;
      case 'Permissions':
        return <Permissions />;
      case 'Settings':
        return <Settings />;
      default:
        return <div className="text-center">Please select a valid page.</div>;
    }
  };

  return (
    <div className="w-full font-pop flex">
      {/* Sidebar */}
      <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      {/* Main Content Area */}
      <div className="flex flex-col w-[88%] mt-3 rounded-[24px] bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Content Area */}
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
