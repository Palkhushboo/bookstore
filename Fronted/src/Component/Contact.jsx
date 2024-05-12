import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Contact() {
 const { register, handleSubmit, formState: { errors } } = useForm();
 const onSubmit = (data) => console.log(data); // Cor
 return (

  <>
   <div className='flex justify-center
'>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 flex justify-center'>
     <form onSubmit={handleSubmit(onSubmit)}  method="">
      {/* if there is a button in form, it will close the modal */}

      

      <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white flex justify-center">Contact Us</h3>
      <div className='mt-4'>
       <span>Full Name</span><br></br>
       <input type='text' placeholder='Full Name' className='w-80 px-3 py-1 border rounded-md outline-none mt-2  ' {...register("name", { required: true })}></input>
       {errors.name && <span className='text-sm text-red-500'><br />This field is required</span>}

      </div>
      <div className='mt-4'>
       <span>Email</span><br></br>
       <input type='email' placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none mt-2  ' {...register("email", { required: true })}></input>
       {errors.email && <span className='text-sm text-red-500'><br />This field is required</span>}

      </div>
      <div className='mt-4'>
       <span>Message</span><br></br>
       <textarea type='text' placeholder='Message' className='w-80 px-3 py-1 border rounded-md outline-none mt-2  ' {...register("Message", { required: true })}></textarea>
       {errors.Message && <span className='text-sm text-red-500'><br />This field is required</span>}

      </div>
      <div className='flex justify-start mt-4'>
       <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200 ' >Submit</button>

      </div>
     </form>
    </div>
   </div>
  </>
 )
}

export default Contact