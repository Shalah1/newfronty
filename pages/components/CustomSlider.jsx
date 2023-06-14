// import React, { useState, useEffect } from 'react';
// import Glide from "@glidejs/glide"

// const Slider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [images]);

//   const prevIndex = (currentIndex - 1 + images.length) % images.length;
//   const nextIndex = (currentIndex + 1) % images.length;

//   return (
//     <div className="relative">

//       <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
//         <img
//           src={images[prevIndex]}
//           alt="Previous Image"
//           className="w-80 opacity-25"
//         />
//         <img
//           src={images[nextIndex]}
//           alt="Next Image"
//           className="w-80 opacity-25"
//         />
//       </div>
//       <img
//         src={images[currentIndex]}
//         alt="Slider Image"
//         className="w-1/2 mx-auto opacity-100 rounded-lg hover:opacity-90 transition-opacity duration-300"
//       />
//     </div>
//   );
// };

// export default Slider;
import React, { useEffect } from 'react';
import Glide from "@glidejs/glide"

const Slider2 = ({ images }) => {
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      const nextIndex = (currentIndex + 1) % images.length;
      
      const prevImage = document.getElementById("prevImage");
      const nextImage = document.getElementById("nextImage");
      const currentImage = document.getElementById("currentImage");

      prevImage.src = images[prevIndex];
      nextImage.src = images[nextIndex];
      currentImage.src = images[currentIndex];
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
        <img
          id="prevImage"
          alt="Previous Image"
          className="w-80 opacity-25"
        />
        <img
          id="nextImage"
          alt="Next Image"
          className="w-80 opacity-25"
        />
      </div>
      <img
        id="currentImage"
        alt="Slider Image"
        className="w-1/2 mx-auto opacity-100 rounded-lg hover:opacity-90 transition-opacity duration-300"
      />
    </div>
  );
};

export default Slider2;
