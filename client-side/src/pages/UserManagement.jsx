import React from 'react';
import profile from '../assets/images/profile.svg';
import add from '../assets/images/add.svg';
import DeleteUsersModal from '../components/DeleteUsersModal';
import EditUserModal from '../components/EditUserModal';

const UserManagement = ({ setAddUser }) => {
  const dummyUsers = [
    { id: 1, username: 'User 1', role: 'Admin' },
    { id: 2, username: 'User 2', role: 'User' },
    { id: 3, username: 'User 3', role: 'Moderator' },
  ];

  return (
    <div className='px-16'>
      <div className='flex justify-between'>
        {/* <input
          placeholder='Search User'
          className='bg-[#F2F4F7] py-3 w-[30%] pl-5 placeholder:font-urban text-[1rem] rounded-[4px] outline-none'
        /> */}
        <div className='flex items-center'>
          <div className='font-urban text-[#33517F] font-bold pr-2 text-[1.2rem]'>Hi, User</div>
          <img src={profile} alt='profile' width={35} />
        </div>
      </div>
      <div className='border-[#99A8BF] border-b-[1px] my-5'></div>

      <div>
        <div className='flex justify-between items-center'>
          <div className='font-urban text-[#33517F] font-bold text-[1.3rem]'>User Profiles</div>
          <button
            onClick={() => setAddUser(true)}
            className='flex items-center bg-[#33517F] py-2 px-3 rounded-[4px]'
          >
            <img src={add} alt='add' />
            <div className='text-[#ffffff] font-urban font-bold pl-2 text-[1rem]'>Add new user</div>
          </button>
        </div>

        <div className='mt-8'>
          {dummyUsers.map((user) => (
            <div key={user.id}>
              <div className='flex justify-between py-3 px-5 hover:bg-[#F2F4F7]'>
                <div className='flex'>
                  <div>{user.username}</div>
                </div>
                <div className='flex space-x-5'>
                  <div className='font-urban text-[#33517F] font-bold'>
                    {user.role}
                  </div>

                  {/* Edit button */}
                  <EditUserModal id={user.id} />

                  {/* Delete button */}
                  <DeleteUsersModal id={user.id} />
                </div>
              </div>
              <div className='border-[#99A8BF] border-b-[1px]'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;