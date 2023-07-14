import img1 from "../../image/newres.jpg";
import img2 from "../../image/newres2.webp";
import img3 from "../../image/newres3.jpg";
import React, { useState, useEffect, useRef } from "react";

const Carousel = ({ autoPlayInterval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const images = [img1, img2, img3];
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, autoPlayInterval);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, images.length, autoPlayInterval]);

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.scrollLeft = currentIndex * carousel.offsetWidth;
  }, [currentIndex]);

  return (
    <div className="carousel  " ref={carouselRef}>
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt="Carousel Image" />
      ))}
    </div>
  );
};

export default Carousel;
