import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Form data:", data);  // Log form data

    if (!data || !data.email || !data.password) {
      toast.error('Please fill out both fields.');
      return;
    }

    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post('http://localhost:4001/user/login', userInfo);
      if (res.data) {
        toast.success('Successfully logged in!');
        localStorage.setItem('Users', JSON.stringify(res.data.user));
        navigate('/');  // Redirect to home page after successful login
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-slate-900 dark:text-white">✕</Link>
              <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">Login</h3>
              <div className='mt-4'>
                <span>Email</span><br />
                <input 
                  type='email' 
                  placeholder='Enter your Email' 
                  className='w-80 px-3 py-1 border rounded-md outline-none mt-2' 
                  {...register("email", { required: true })} 
                />
                {errors.email && <span className='text-sm text-red-500'><br />This field is required</span>}
              </div>
              <div className='mt-4'>
                <span>Password</span><br />
                <input 
                  type='password' 
                  placeholder='Enter your password' 
                  className='w-80 px-3 py-1 border rounded-md outline-none mt-2' 
                  {...register("password", { required: true })} 
                />
                {errors.password && <span className='text-sm text-red-500'><br />This field is required</span>}
              </div>
              <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200' >Login</button>
                <p>Not registered?{" "} <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Sign up</Link></p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
