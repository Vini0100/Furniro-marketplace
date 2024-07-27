import { FaLocationDot } from "react-icons/fa6";
import FormContact from "./FormContact";
import { FaClock, FaPhoneAlt } from "react-icons/fa";

const ContactInformations = () => {
  return (
    <section className="max-w-5xl mx-auto w-full font-poppins pt-8 md:pt-24">
      <div className="flex flex-col gap-10 md:gap-20">
        <div className="flex flex-col text-center px-10 md:px-48 gap-2">
          <h2 className="font-semibold text-4xl">Get In Touch With Us</h2>
          <p className="text-base font-normal text-customGray">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-7">
          <div className="flex flex-col p-[4.375rem] gap-11">
            <div className=" flex gap-7 w-full">
              <FaLocationDot className="size-6" />
              <div className="flex flex-col w-48">
                <h4 className="font-poppins text-2xl font-medium">Adress</h4>
                <p className="text-base font-normal">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex gap-7">
              <FaPhoneAlt className="size-6" />
              <div>
                <h4 className="font-poppins text-2xl font-medium">Phone</h4>
                <ul>
                  <li className="text-base font-normal">
                    Mobile: +(84) 546-6789
                  </li>
                  <li className="text-base font-normal">
                    Hotline: +(84) 456-6789
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex gap-7">
              <FaClock className="size-6" />
              <div>
                <h4 className="font-poppins text-2xl font-medium">
                  Working Time
                </h4>
                <ul>
                  <li className="text-base font-normal">
                    Monday-Friday: 9:00 - 22:00
                  </li>
                  <li className="text-base font-normal">
                    Saturday-Sunday: 9:00 - 21:00
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <FormContact />
        </div>
      </div>
    </section>
  );
};

export default ContactInformations;
