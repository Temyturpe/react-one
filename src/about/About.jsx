import React from 'react';
import './about.css'

function About(props){
 return(
   <div>
     <h2 className='head'>my name is {props.abouts.name}</h2>
     <p className='body1'>{props.abouts.about}</p>
     <p className='body2'>{props.abouts.location}</p>
   </div>
  )
}

export default About