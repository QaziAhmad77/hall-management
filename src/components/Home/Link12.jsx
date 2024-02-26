import React from "react";
import { Link } from "react-scroll";
const Link12 = () => {
  return (
    <div>
      <ul className="  flex gap-8">
        <Link
          className=" hover:border-b-[2px] hover:border-[#F39D12] list-none cursor-pointer"
          to="/"
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          to="feature"
          smooth={true}
          duration={500}
          className=" list-none cursor-pointer hover:border-b-[2px] hover:border-[#F39D12]"
        >
          Feature
        </Link>
        <Link
          to="testimonial"
          smooth={true}
          duration={500}
          className=" list-none cursor-pointer hover:border-b-[2px] hover:border-[#F39D12]"
        >
          Testimonial
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className=" list-none cursor-pointer hover:border-b-[2px] hover:border-[#F39D12]"
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Link12;
