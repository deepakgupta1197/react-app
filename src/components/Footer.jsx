import React from "react";
import {
  AiFillAmazonCircle,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillSkype,
  AiOutlineGoogle,
} from "react-icons/ai";
function Footer() {
  return (
    <div className="bg-black text-white p-5 py-[80px]">
      <div className="flex justify-center">
        <AiFillAmazonCircle className="text-[50px]" />
        <AiFillLinkedin className="text-[50px]" />
        <AiFillSkype className="text-[50px]" />
        <AiOutlineGoogle className="text-[50px]" />
        <AiFillFacebook className="text-[50px]" />
      </div>
      <div className="text-justify mt-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus earum eius voluptas doloremque, totam iusto consectetur exercitationem repudiandae perferendis natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ea iusto obcaecati voluptatem corrupti reiciendis possimus asperiores eum id dolorem.
      </div>
    </div>
  );
}

export default Footer;
