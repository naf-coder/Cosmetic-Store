import { useState } from "react";

import { IoIosArrowDropright } from "react-icons/io";

// Import images from the assets folder
import image1 from "../assets/photogallery.jpg";
import image2 from "../assets/photogallery2.jpg";

const PhotoGallery = () => {
  // Array of imported images
  const images = [image1, image2];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className=" flex justify-center items-center">
      <div className="relative px-2 ">
        <img src={images[currentIndex]} />
        {/* <div className="font-extrabold font-poppins relative  bottom-48 left-20 text-3xl">
          <p>NEW! SUPER STAY TEDDY </p>
          <p>TINT</p>
        </div>
        <button className="bg-black rounded-lg text-white relative bottom-40 left-20 px-10 py-2">
          Shop Now
        </button> */}
      </div>
      <button onClick={goToNextImage} className="">
        <IoIosArrowDropright className="text-[#c38662]" size={20} />
      </button>
    </section>
  );
};

export default PhotoGallery;
