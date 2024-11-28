import { useState } from "react";

import { IoIosArrowDropright } from "react-icons/io";
import image1 from "../assets/photogallery.jpg";
import image2 from "../assets/photogallery2.jpg";

const PhotoGallery = () => {
  const images = [image1, image2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className=" flex justify-center items-center">
      <div className="relative px-2 ">
        <img src={images[currentIndex]} />
      </div>
      <button onClick={goToNextImage} className="">
        <IoIosArrowDropright className="text-[#c38662]" size={20} />
      </button>
    </section>
  );
};

export default PhotoGallery;
