import Navbar from "../components/Navbar";

//importing images
import skin from "../assets/skin.jpg";
import lips from "../assets/lips.jpg";
import nails from "../assets/nails.jpg";
import face from "../assets/face.jpg";
import all from "../assets/all.jpg";
import banner from "../assets/banner.jpeg";
import bannerimage from "../assets/banner-image.png";
// import Cart from "../components/Cart";

import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <hr className="my-5" />
      <main className="min-w-screen font-light mt-2">
        <banner className="flex justify-center font-sans-serif items-center min-w-screen">
          <section className=" flex justify-center items-center mx-5 md:mx-10 bg-[#c38662]">
            <div>
              <img src={bannerimage} />
            </div>
            <div className="w-[30%] flex flex-col justify-center items-center font-light text-5xl md:text-9xl ">
              <h1>BE</h1>
              <h1>AU</h1>
              <h1>TY</h1>
            </div>

            <div>
              <img src={banner} />
            </div>
          </section>
        </banner>

        <hr className="my-5" />

        <section className="flex-col items-center mx-5 md:mx-10">
          <h1 className="text-center text-3xl font-light my-2">
            Top Categories
          </h1>
          <div className="flex items-center justify-center">
            <div className="m-2">
              <img src={all} className="rounded-lg" />
              <h6>all</h6>
            </div>
            <div className=" m-2">
              <img src={lips} className="rounded-lg" />
              <h6>Lips</h6>
            </div>
            <div className=" m-2">
              <img src={skin} className="rounded-lg" />
              <h6>Skin</h6>
            </div>
            <div className="m-2 ">
              <img src={face} className="rounded-lg" />
              <h6>Face</h6>
            </div>
            <div className="m-2 ">
              <img src={nails} className="rounded-lg" />
              <h6>Nails</h6>
            </div>
          </div>
        </section>

        <hr className="my-5" />

        <section className="flex-col items-center mx-5 md:mx-10">
          <h1 className="text-center text-3xl font-light my-2">
            Best Of Beauty On Offer
          </h1>
          <div className="flex items-center justify-center">
            <div className=" m-2">
              <img src className="rounded-lg" />
              <p>Up to 30% off</p>
            </div>
            <div className=" m-2">
              <img src className="rounded-lg" />
              <p>Flat 25% off on select favourites</p>
            </div>
            <div className=" m-2">
              <img src className="rounded-lg" />
              <p>Up to 40% off</p>
            </div>
            <div className=" m-2">
              <img src className="rounded-lg" />
              <p>Up to 30% off</p>
            </div>
          </div>
        </section>
        {/* <Cart /> */}
      </main>
      <Footer />
    </>
  );
}

export default Home;
