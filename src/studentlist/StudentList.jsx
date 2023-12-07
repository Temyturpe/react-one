import React from 'react'
import About from "../about/About";
import { abouts } from "../data";
import './studentlist.css';

function StudentList() {
  return (
    <div className='main'>{abouts.map((about) => <About abouts={about} key={about.name}/>)}</div>
  )
}

export default StudentList