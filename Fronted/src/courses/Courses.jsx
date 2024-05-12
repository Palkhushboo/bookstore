import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Course from '../Component/Course'
import list from '../../public/list.json'
function Courses() {
 
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
     <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default Courses