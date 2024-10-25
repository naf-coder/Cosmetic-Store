import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <>
      <footer className="bg-[#c38662]">
        <section className="min-w-screen flex items-center justify-center my-16">
          <div className="md:flex justify-between w-[86%]">
            <div>
              <img src={logo} className="h-10 w-16" alt="Logo of mozilar" />
              <p className="mt-5 text-lg">
                For every day, for every mood, for every you
              </p>
            </div>
            <section className="md:flex">
              <div>
                <ul className="my-5">
                  <li className="font-semibold text-xl mb-5 mr-20">
                    Customer Care
                  </li>
                  <li>Help Centre</li>
                  <li>FAQs</li>
                </ul>
              </div>
              <div>
                <ul className="my-5">
                  <li className="font-semibold text-xl mb-5 mr-20">
                    Categories
                  </li>
                  <li>Face</li>
                  <li>Nails</li>
                  <li>Lips</li>
                </ul>
              </div>
              <div>
                <ul className="my-5">
                  <li className="font-semibold text-xl mb-5 mr-20">
                    Contact Us
                  </li>
                  <li>Call: 1-900-840-3333</li>
                  <li>Whatsapp: 79090 90909</li>
                  <li>Email: help@nykaabeauty.com</li>
                </ul>
              </div>
              <div className="my-5">
                <h3 className="font-semibold text-xl mb-5 md:ml-2">
                  Follow us
                </h3>
                <ul className="flex">
                  <li>
                    <FaFacebookSquare className="mt-2 md:m-2" />
                  </li>
                  <li>
                    <RiInstagramFill className="m-2" />
                  </li>
                  <li>
                    <FaXTwitter className="m-2" />
                  </li>
                  <li>
                    <FaLinkedin className="m-2" />
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>
        <hr />
        <section className="min-w-screen flex items-center justify-center">
          <hr />
          <div className="md:flex items-center justify-between mt-10 mb-10 w-[86%]">
            <h6 className="">© 2024 Nykaa - All right reserved</h6>
            <h5>
              <a href="https://www.mozilor.com/terms" className="underline">
                Terms & Conditions
              </a>
            </h5>
          </div>
        </section>
      </footer>
    </>
  );
}
export default Footer;
