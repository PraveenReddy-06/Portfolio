import { memo } from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    
    <section className="mt-30 text-primary rounded-2xl">
      <div className="container-custom y-10">
        <h1 className="heading">Get In Touch.</h1>
        <h2 className="text-center ">Open to internships, freelance work, and collaboration</h2>

        <div className="text-sm flex gap-10 md:gap-20 justify-center mt-5">
          
          
            <a href="mailto:2400032662@kluniversity.in" className="flex flex-col items-center">  <MdEmail className="icons-contact text-2xl md:text-4xl" /> <p>Mail</p></a> 
          
          <a href="tel:+919963656797"className="flex flex-col items-center"><FaPhone className="icons-contact text-2xl md:text-4xl" />Phone</a>
          <a href="https://www.linkedin.com/in/praveen-maramreddy-000b11374/"className="flex flex-col items-center"><FaLinkedin className="icons-contact text-2xl md:text-4xl" />LinkedIN</a>
          <a href="https://www.instagram.com/praveen_r6/"className="flex flex-col items-center"><FaInstagram className="icons-contact text-2xl md:text-4xl" />Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);