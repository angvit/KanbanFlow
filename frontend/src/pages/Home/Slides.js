import React, { useState } from 'react';

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
      <div id="slide1" className={`carousel-item absolute top-0 left-0 w-full h-full bg-gray-200 text-gray-800 flex justify-center items-center ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="carousel-content text-center">
          <h1>Slide 1</h1>
          <p>Image placeholder</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={prevSlide} className="btn btn-circle">❮</button>
          <button onClick={nextSlide} className="btn btn-circle">❯</button>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className={`carousel-item absolute top-0 left-0 w-full h-full bg-gray-200 text-gray-800 flex justify-center items-center ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="carousel-content text-center">
          <h1>Slide 2</h1>
          <p>Image placeholder</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={prevSlide} className="btn btn-circle">❮</button>
          <button onClick={nextSlide} className="btn btn-circle">❯</button>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className={`carousel-item absolute top-0 left-0 w-full h-full bg-gray-200 text-gray-800 flex justify-center items-center ${currentSlide === 3 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="carousel-content text-center">
          <h1>Slide 3</h1>
          <p>Image placeholder</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={prevSlide} className="btn btn-circle">❮</button>
          <button onClick={nextSlide} className="btn btn-circle">❯</button>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className={`carousel-item absolute top-0 left-0 w-full h-full bg-gray-200 text-gray-800 flex justify-center items-center ${currentSlide === 4 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="carousel-content text-center">
          <h1>Slide 4</h1>
          <p>Image placeholder</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={prevSlide} className="btn btn-circle">❮</button>
          <button onClick={nextSlide} className="btn btn-circle">❯</button>
        </div>
      </div>
    </div>
  );
};

export default Slides;









