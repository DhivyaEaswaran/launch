// import React from "react";
// import homeImage from "../../Images/Home/24.png";
// import '../../CSS/HomePageContent.css'

// function HomePageContent() {
//   return (
//     <div className="homePage">
//       <div className="homePageImageContainer">
//         <img src={homeImage} alt={"home"} className="HomePageImage"></img>
//       </div>
//       <div className="homePageContent" >
//         <h2>Home</h2>
//         <h3>Welcome to MyInception Tech - Your Gateway to Excellence</h3>
//         <p>
//           MyInception Tech stands as more than a consultancy; we are your
//           dedicated partners in shaping a fulfilling career or achieving
//           business growth. Our mission is to arm professionals and businesses
//           with the Expertise, Competence, and Opportunities vital for
//           excellence. We firmly believe that Attaining Excellence starts with
//           the right Training, Support, and Strategic Services.
//         </p>
//         <p>
//           Our dedication to you is unwavering. We are determined to provide
//           unparalleled services that bridge the gap between your aspirations and
//           thriving careers or prosperous business ventures. Our team comprises
//           seasoned professionals deeply passionate about Learning and Growth,
//           ready to guide and assist you at every step.
//         </p>
//         <p>
//           As you explore our website, you'll discover a wealth of opportunities
//           and resources. Our visually captivating pages are meticulously
//           designed to furnish valuable insights into diverse industries,
//           including IT, Software Development, Recruitment, Data Annotation, Call
//           Center/BPO, and more. Our all-encompassing services address every
//           facet of your professional or entrepreneurial journey.
//         </p>
//         <p>
//           Our gallery showcases images depicting our cutting-edge facilities,
//           our team in action, and the inspiring success stories of our clients
//           who have achieved remarkable results with our assistance.
//         </p>
//         <p>
//           We invite you to navigate through our website, where a treasure trove
//           of information and guidance awaits, aiding you in making well-informed
//           decisions about your career or business. MyInception Tech stands as
//           your ultimate destination, empowering you, steering you in the right
//           direction, and celebrating your accomplishments as you embark on this
//           thrilling journey with us
//         </p>
//         <h3>Where Excellence begins, and Dreams become reality.</h3>
//         {/* <h3>Explore Our Services</h3> */}
//       </div>
//     </div>
//   );
// }

// export default HomePageContent;

import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import homeImage from "../../Images/Home/24.png";
import "../../CSS/HomePageContent.css";
import Button from '@mui/material/Button';

export default function HomePageContent() {
  return (
    <div>
      <div className="homePage">
        <div className="homePageImageContainer">
          <img src={homeImage} alt={"home"} className="HomePageImage"></img>
        </div>
        <div className="homePageContent">

          <h3>Welcome to MyInception Tech - Your Gateway to Excellence</h3>
          <p>
            MyInception Tech stands as more than a consultancy; we are your
            dedicated partners in shaping a fulfilling career or achieving
            business growth. Our mission is to arm professionals and businesses
            with the Expertise, Competence, and Opportunities vital for
            excellence. We firmly believe that Attaining Excellence starts with
            the right Training, Support, and Strategic Services.
          </p>

          <Popup trigger={  <Button variant="contained" color="primary">Read more...</Button>} modal nested>
            {(close) => (
              <div className="modal">
                <div className="content">

                  <h3>
                    Welcome to MyInception Tech - Your Gateway to Excellence
                  </h3>
                  <p>
                    MyInception Tech stands as more than a consultancy; we are
                    your dedicated partners in shaping a fulfilling career or
                    achieving business growth. Our mission is to arm
                    professionals and businesses with the Expertise, Competence,
                    and Opportunities vital for excellence. We firmly believe
                    that Attaining Excellence starts with the right Training,
                    Support, and Strategic Services.
                  </p>
                  <p>
                    Our dedication to you is unwavering. We are determined to
                    provide unparalleled services that bridge the gap between
                    your aspirations and thriving careers or prosperous business
                    ventures. Our team comprises seasoned professionals deeply
                    passionate about Learning and Growth, ready to guide and
                    assist you at every step.
                  </p>
                  <p>
                    As you explore our website, you'll discover a wealth of
                    opportunities and resources. Our visually captivating pages
                    are meticulously designed to furnish valuable insights into
                    diverse industries, including IT, Software Development,
                    Recruitment, Data Annotation, Call Center/BPO, and more. Our
                    all-encompassing services address every facet of your
                    professional or entrepreneurial journey.
                  </p>
                  {/* <p>
           Our gallery showcases images depicting our cutting-edge facilities,
           our team in action, and the inspiring success stories of our clients
           who have achieved remarkable results with our assistance.
         </p> */}
                  <p>
                    We invite you to navigate through our website, where a
                    treasure trove of information and guidance awaits, aiding
                    you in making well-informed decisions about your career or
                    business. MyInception Tech stands as your ultimate
                    destination, empowering you, steering you in the right
                    direction, and celebrating your accomplishments as you
                    embark on this thrilling journey with us
                  </p>
                  <h3>Where Excellence begins, and Dreams become reality.</h3>
                </div>
                <div>

                  <Button variant="contained" color="primary" onClick={() => close()}>
        Close
      </Button>

                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
}

// HomePageContent.js

// import React from "react";
// import ModalWindow from "../../Reusuable_components/ModalWindow";


// const HomePageContent = () => {


//   const popupContent = (
//     <>
      
//       <h3>
//                     Welcome to MyInception Tech - Your Gateway to Excellence
//                   </h3>
//                   <p>
//                     MyInception Tech stands as more than a consultancy; we are
//                     your dedicated partners in shaping a fulfilling career or
//                     achieving business growth. Our mission is to arm
//                     professionals and businesses with the Expertise, Competence,
//                     and Opportunities vital for excellence. We firmly believe
//                     that Attaining Excellence starts with the right Training,
//                     Support, and Strategic Services.
//                   </p>
//                   <p>
//                     Our dedication to you is unwavering. We are determined to
//                     provide unparalleled services that bridge the gap between
//                     your aspirations and thriving careers or prosperous business
//                     ventures. Our team comprises seasoned professionals deeply
//                     passionate about Learning and Growth, ready to guide and
//                     assist you at every step.
//                   </p>
//                   <p>
//                     As you explore our website, you'll discover a wealth of
//                     opportunities and resources. Our visually captivating pages
//                     are meticulously designed to furnish valuable insights into
//                     diverse industries, including IT, Software Development,
//                     Recruitment, Data Annotation, Call Center/BPO, and more. Our
//                     all-encompassing services address every facet of your
//                     professional or entrepreneurial journey.
//                   </p>
//                   {/* <p>
//            Our gallery showcases images depicting our cutting-edge facilities,
//            our team in action, and the inspiring success stories of our clients
//            who have achieved remarkable results with our assistance.
//          </p> */}
//                   <p>
//                     We invite you to navigate through our website, where a
//                     treasure trove of information and guidance awaits, aiding
//                     you in making well-informed decisions about your career or
//                     business. MyInception Tech stands as your ultimate
//                     destination, empowering you, steering you in the right
//                     direction, and celebrating your accomplishments as you
//                     embark on this thrilling journey with us
//                   </p>
//                   <h3>Where Excellence begins, and Dreams become reality.</h3>
                
      
//     </>
//   );



//   return (
//     <div>
//       <div>
//         <div className="homePage">
//           <div className="homePageImageContainer">
//             <img src={homeImage} alt={"home"} className="HomePageImage"></img>
//           </div>
//           <div className="homePageContent">
//             <h3>Welcome to MyInception Tech - Your Gateway to Excellence</h3>
//             <p>
//               MyInception Tech stands as more than a consultancy; we are your
//               dedicated partners in shaping a fulfilling career or achieving
//               business growth. Our mission is to arm professionals and
//               businesses with the Expertise, Competence, and Opportunities vital
//               for excellence. We firmly believe that Attaining Excellence starts
//               with the right Training, Support, and Strategic Services.
//             </p>
//             <ModalWindow
//               triggerText="Read more..."
//               customContent={popupContent}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePageContent;
