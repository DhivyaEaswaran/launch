import React from 'react';
import NonIT from '../../courses/NonIT';
import IT from '../../courses/IT';


export default function Courses() {
 
  return (
    <div className='courses-container'>
      Courses
      <div class="courses-list">
       <ul className='services'>
        <li className='services-list'><IT/></li>
        <li className='services-list'><NonIT/></li>
        
        </ul>

      </div>
    </div>
  )
}
