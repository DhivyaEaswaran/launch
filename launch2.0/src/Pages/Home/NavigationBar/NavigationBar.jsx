import React from 'react';
import Logo from './Logo';
import Home from './Home';
import Courses from './Courses';
import Assessment from './Assessment';
import Services from './Services';
import SignIn from './SignIn';
import Login from './Login';

function NavigationBar() {
  return (
    <div className='NavigationBar'>
      <ul className='Nav-components'>
         <li><Logo/></li>
         <li><Home/></li>
        <li> <Courses/></li>
        <li><Assessment/></li>
        <li> <Services/></li>
        <li><Login/></li>
       <li> <SignIn/></li>
        </ul>
    </div>
  )
}

export default NavigationBar;