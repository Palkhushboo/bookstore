import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
 
  const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = (data) => console.log(data); // Corrected syntax

// Rest of your code


 
  return (
    <>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box ">
           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
             
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-slate-900 dar k:text-white">✕</Link>{""}
            
            <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">Login</h3>
            <div className='mt-4'>
              <span>Email</span><br></br>
              <input type='email' placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none mt-2  ' {...register("email", { required: true })}></input>
              {errors.email && <span className='text-sm text-red-500'><br/>This field is required</span>}

            </div>
            <div className='mt-4'>
              <span>Password</span><br></br>
              <input type='password' placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none mt-2  ' {...register("password", { required: true })}></input>
              {errors.password && <span className='text-sm text-red-500'><br/>This field is required</span>}

            </div>
            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200' >Login</button>
              <p>Not registered?{" "} <Link to="/signup" className='underline text-blue-500 cursor-pointer'>sign up </Link >{''}
              </p>
            </div>
            </form>
          </div>
        </dialog>
      </div>
      </>
  )
}


export default Login