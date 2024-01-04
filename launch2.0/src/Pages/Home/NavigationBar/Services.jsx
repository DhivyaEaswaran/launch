import React from 'react';

import DigitalMarketing from "../../Services/DigitalMarketing";
import WebDesigning from "../../Services/WebDesigning";
import WebDevelopment from "../../Services/WebDevelopment";
import MobAppMarketing from "../../Services/MobAppMarekting";
import ECommerceServices from "../../Services/ECommerceServices";
import WebHosting from "../../Services/WebHosting";

export default function Services() {
  
  return (

    <div className='courses-container'>

      Services

      <div className='courses-list'>

        <ul className='services'>
          <li className='services-list'>  <WebDesigning /> </li>
          <li className='services-list'>  <WebDevelopment/> </li>
          <li className='services-list'>  <MobAppMarketing/></li>
          <li className='services-list'> <DigitalMarketing/></li>
          <li className='services-list'> <ECommerceServices/></li>
          <li className='services-list'> <WebHosting/> </li>
        </ul>
        
          
            
          
      </div>
    </div>
  )
}
