import React from "react";
import SliderImages from "../../../../src/Images/HomeSlider/Images";
import "../../../CSS/HomeSlider/HomeSlider.css";
import "react-slideshow-image/dist/styles.css";

import { Slide } from "react-slideshow-image";

export default function HomeSlider() {
  return (
    <div className="HeroSlider">
      <Slide>
        {SliderImages.map((image, index) => (
          <div
            key={index}
            style={{ backgroundImage: "url(" + image.url + ")" }}
            className="sliderImageSize"
          ></div>
        ))}
      </Slide>
    </div>
  );
}

// export default function HomeSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % SliderImages.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   return (
//     <div>
//       <Slide>
//         {SliderImages.map((image, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundImage: `url(${image.url})`,
//               display: index === currentSlide ? 'block' : 'none',
//             }}
//             className="sliderImageSize"
//           ></div>
//         ))}
//       </Slide>
//     </div>
//   );
// }
