import React, { useState } from 'react';

import slide1Image from './SlidesImage/slide1.jpg';
import slide2Image from './SlidesImage/slide2.jpg';
import slide3Image from './SlidesImage/slide3.jpg';
import slide4Image from './SlidesImage/slide4.jpg';

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 1 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 4 : currentSlide - 1);
  };

  return (
    <div className="carousel w-full h-96 relative">
      {/* Slide 1 */}
      <div id="slide1" className={`carousel-item absolute inset-0 w-full h-full flex justify-center items-center transition-opacity duration-500 ease-in-out ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
        <img src={slide1Image} alt="Slide 1" className="w-full h-full object-cover" />
      </div>

      {/* Slide 2 */}
      <div id="slide2" className={`carousel-item absolute inset-0 w-full h-full flex justify-center items-center transition-opacity duration-500 ease-in-out ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'}`}>
        <img src={slide2Image} alt="Slide 2" className="w-full h-full object-cover" />
      </div>

      {/* Slide 3 */}
      <div id="slide3" className={`carousel-item absolute inset-0 w-full h-full flex justify-center items-center transition-opacity duration-500 ease-in-out ${currentSlide === 3 ? 'opacity-100' : 'opacity-0'}`}>
        <img src={slide3Image} alt="Slide 3" className="w-full h-full object-cover" />
      </div>

      {/* Slide 4 */}
      <div id="slide4" className={`carousel-item absolute inset-0 w-full h-full flex justify-center items-center transition-opacity duration-500 ease-in-out ${currentSlide === 4 ? 'opacity-100' : 'opacity-0'}`}>
        <img src={slide4Image} alt="Slide 4" className="w-full h-full object-cover" />
      </div>

      {/* Navigation buttons */}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
        <button onClick={prevSlide} className="btn btn-circle">❮</button>
        <button onClick={nextSlide} className="btn btn-circle">❯</button>
      </div>
    </div>
  );
};

export default Slides;











