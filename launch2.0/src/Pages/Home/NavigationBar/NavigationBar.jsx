import React, { useState } from 'react';
import Logo from './Logo';
import Home from './Home';
import Courses from './Courses';
import Assessment from './Assessment';
import Services from './Services';
// import SignIn from './SignIn';
import Login from './Login';
import AboutUs from '../../AboutUs/AboutUs';
import { RxHamburgerMenu } from "react-icons/rx";


function NavigationBar() {

const [isNavExpanded, setIsNavExpanded]=useState(false);

  return (
    <div className='NavigationBar'>
       <Logo/>
        <button className='hamburger' onClick={()=>{setIsNavExpanded(!isNavExpanded);}}>
          <RxHamburgerMenu />
          </button>
        <div className={isNavExpanded?'Nav-components expanded':"Nav-components"}>
      <ul >
       
        <li><Home/></li>
        <li><AboutUs/></li>
        <li> <Courses/></li>
        <li><Assessment/></li>
        <li> <Services/></li>
        <li><Login/></li>
       
         
        </ul>
    </div>
    </div>
  );
}

export default NavigationBar;




// import React, { useState, useEffect } from 'react';
// import Logo from './Logo';
// import Home from './Home';
// import Courses from './Courses';
// import Assessment from './Assessment';
// import Services from './Services';
// import SignIn from './SignIn';
// import Login from './Login';
// import AboutUs from '../../AboutUs/AboutUs';
// import { RxHamburgerMenu } from "react-icons/rx";




// function NavigationBar() {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`NavigationBar ${scrolling ? 'scrolled' : ''}`}>
//       <Logo/>
//       <ul className='Nav-components'>
        
//         <button className='hamburger'><RxHamburgerMenu /></button>
//         <li><Home/></li>
//         <li><AboutUs/></li>
//         <li><Courses/></li>
//         <li><Assessment/></li>
//         <li><Services/></li>
//         <li><Login/></li>
        
//       </ul>
//     </div>
//   );
// }

// export default NavigationBar;
