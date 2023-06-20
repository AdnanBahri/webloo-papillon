import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-4 bg-white text-black">
      <div className="w-full h-full flex items-center justify-between max-w-7xl mx-auto sm:px-16 px-6">
        <h1 className="text-3xl font-extrabold uppercase">LEVITATE</h1>
        <p className="font-medium">© 2023. All Rights Reserved by LEVITATE</p>
        <div className="flex flex-col items-start space-y-1">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4">
            <FaFacebookF className="h-6 w-6 cursor-pointer" />
            <FaInstagram className="h-6 w-6 cursor-pointer" />
            <FaTwitter className="h-6 w-6 cursor-pointer" />
            <FaLinkedinIn className="h-6 w-6 cursor-pointer" />
            <FaYoutube className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
