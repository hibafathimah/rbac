import React, { useState } from 'react';
import bgimg from '../assets/images/certificatebg.svg';
import close from '../assets/images/close.svg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = ({ setUserClose }) => {
  const [employee, setEmployee] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Employee', // Default role
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!employee.username.trim()) newErrors.username = 'Username is required';
    if (!employee.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(employee.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!employee.password) newErrors.password = 'Password is required';
    if (employee.password !== employee.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const token = localStorage.getItem('authToken');
      const { username, email, password, role } = employee;

      await axios
        .post(
          'http://localhost:8080/auth/admin/create-user',
          { username, email, password, role },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          toast.success('User added successfully', {
            position: 'top-center',
            autoClose: 2000,
            style: {
              backgroundColor: 'black',
              color: 'white',
            },
          });
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
          toast.error('User creation failed', {
            position: 'top-center',
            autoClose: 2000,
            style: {
              backgroundColor: 'black',
              color: 'white',
            },
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center">
      <ToastContainer />
      <div
        style={{ backgroundImage: `url(${bgimg})` }}
        className="bg-cover bg-center mt-[12rem] w-[56.4375rem] py-10 px-8 rounded-sm"
      >
        <div className="flex justify-end mb-3 -mr-10 -mt-5 w-full">
          <button onClick={() => setUserClose(false)}>
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="font-urban">
          <div className="flex items-center text-[1.1rem] space-x-3 w-[50%]">
            <span className="text-[#33517f] w-[9.8rem] font-bold">Username</span>
            <span className="text-[#33517f] font-bold">:</span>
            <input
              onChange={handleChange}
              value={employee.username}
              id="username"
              name="username"
              className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"
              type="text"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>

          <div className="flex items-center text-[1.1rem] space-x-3 mt-6 w-[50%]">
            <span className="text-[#33517f] w-[9.8rem] font-bold">Email</span>
            <span className="text-[#33517f] font-bold">:</span>
            <input
              onChange={handleChange}
              value={employee.email}
              id="email"
              name="email"
              className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"
              type="text"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="flex items-center text-[1.1rem] space-x-3 mt-6 w-[50%]">
            <span className="text-[#33517f] w-[9.8rem] font-bold">Password</span>
            <span className="text-[#33517f] font-bold">:</span>
            <input
              onChange={handleChange}
              value={employee.password}
              id="password"
              name="password"
              className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"
              type="password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div className="flex items-center text-[1.1rem] space-x-3 mt-6 w-[50%]">
            <span className="text-[#33517f] w-[9.8rem] font-bold">Confirm Password</span>
            <span className="text-[#33517f] font-bold">:</span>
            <input
              onChange={handleChange}
              value={employee.confirmPassword}
              id="confirmPassword"
              name="confirmPassword"
              className="border-b border-[#99A8BF] flex-grow bg-[transparent] outline-none"
              type="password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex items-center text-[1.1rem] space-x-3 mt-6">
            <span className="text-[#33517f] w-[9.8rem] font-bold">Role</span>
            <span className="text-[#33517f] font-bold">:</span>
            <input
              onChange={handleChange}
              value={employee.role}
              id="role"
              name="role"
              className="border-b border-[#99A8BF] bg-[transparent] outline-none px-2 py-1"
              type="text"
            />
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#33517F] text-[0.9rem] font-bold px-6 py-1 rounded-sm text-[#ffffff]"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
