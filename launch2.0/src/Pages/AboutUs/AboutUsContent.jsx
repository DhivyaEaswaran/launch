import React from 'react'
import './aboutUs.css';
import image1 from '../../Images/AboutUs/AboutUs1.png';
import image2 from '../../Images/AboutUs/about2.png';
// import image3 from '../../Images/AboutUs/about3.png';

function AboutUsContent() {
  return (
    <div class="aboutUs"> 
      
      <div>
         <h2>About Us</h2>
         <div className='AboutUs-containter1'>
          <div className='imageContainer1'>
          <img src={image1} alt={"about"} className='Container1-image'/>
          </div>
          <div className='Container1-content'>
         <h3>Empowering Careers and Businesses</h3>
         <p>Founded in 2009 in Chennai, MyInception Tech stands as a beacon of excellence in both the IT and
core sectors. Guided by unwavering standards of quality, reliability, and commitment, we have
earned recognition for our exceptional professional recruitment services. Our expertise in conducting
Campus Placements, Job Fairs, and Training programs has solidified our reputation among leading
colleges, corporate entities, and industries nationwide.</p>

<h3>Our Commitment to Training and Placement Excellence</h3>

<p>MyInception Tech's unwavering commitment lies in providing exceptional training and placement
services. We empower aspiring professionals with the Knowledge, Skills, and Opportunities essential
for success in the ever-evolving realms of technology and core industries. Our proven track record in
these endeavors has garnered acclaim from prestigious colleges, top-tier corporate entities, and
diverse industries nationwide.</p>
<h3>Our Team of Experts</h3>

<p>Behind every success story at MyInception Tech stands a team of seasoned professionals. More
than educators, our team serves as mentors who guide, inspire, and support you on your journey.
With a wealth of industry knowledge and a passion for technology and learning, they are your trusted
partners in achieving your goals.</p>

<h3>Excellence in IT and Managemen</h3>

<p>Our expertise spans a wide array of industries, with specialized focus in IT and Management.
MyInception Tech is proud to be associated with experts who have excelled in esteemed institutions.
Their depth of knowledge and experience sets us apart, enabling us to deliver unparalleled training
and placement services tailored for both the IT and core sectors.</p>
 </div>
</div>

{/* <div className='AboutUs-containter1'>

<div className='Container1-content'>  */}
<div className='principles'>
<div className='principles-list'>
<img src={image2} alt={"about"} className="principles-image"/>
<h3 className='principles-title'>Our Vision </h3>

<p>Our vision extends beyond borders. We aspire to provide end-to-end integrated human resource
solutions to organizations around the world. MyInception Tech is committed to becoming a global
leader in training and placement services. Our team comprises individuals from diverse
backgrounds, each with a rich history of holding key positions in recruitment and training across
major companies.</p></div>
{/* </div>
<div className='imageContainer1'><img src={image2} alt={"about"} className='Container1-image'/></div>
</div>

<div className='AboutUs-containter1'>
<div className='imageContainer1'><img src={image3} alt={"about"} className='Container1-image'/></div>
<div className='Container1-content'> */}

  <div className='principles-list'>
  <img src={image2} alt={"about"} className="principles-image"/>
<h3 className='principles-title'>Our Mission </h3>

<p>Our primary mission is to provide integrated, strategic corporate and consulting solutions across
various verticals in different organizations. We believe in the philosophy that "Ensuring customer
satisfaction is our top priority." This principle guides us on our path to success and has been
instrumental in establishing us as a reputable organization.</p></div>

<div className='principles-list'>
<img src={image2} alt={"about"} className="principles-image"/>
<h3 className='principles-title'>Core Values </h3>

<p>Our values are deeply ingrained in every aspect of our work. We're dedicated to offering complete
training and placement solutions to organizations worldwide. The depth and breadth of experience
within our team span every industry, and our understanding of local markets makes us invaluable
partners in your journey.</p>

</div></div>

<h3>Join Us - Where Excellence Meets Opportunity</h3>
        </div>
        </div>
  )
}

export default AboutUsContent;