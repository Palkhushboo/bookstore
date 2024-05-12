import React from 'react'
import Home from './Home/Home'

import {Routes,Route} from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './Component/Signup'
import Contact from './Component/Contact'
function App() {
  return (
<>
{/*<Home/>
<Course/>*/}
<div className='dark:bg-slate-900 dark:text-white'>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Courses" element={<Courses/>}/>
<Route path="/" element={<Home/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/Contact" element={<Contact/>}/>
</Routes>

</div>
</>
  )
}

export default App