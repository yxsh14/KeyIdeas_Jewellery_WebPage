import { Typography } from "@material-tailwind/react";
import logo from "../../Utils/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black p-8 text-white">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-center md:justify-between">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-red-500 focus:text-red-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-red-500 focus:text-red-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-red-500 focus:text-red-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-red-500 focus:text-red-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-gray-700" />
      <Typography color="white" className="text-center font-normal">
        &copy; 2024 Key Ideas. All rights reserved
      </Typography>
    </footer>
  );
};

export default Footer;
