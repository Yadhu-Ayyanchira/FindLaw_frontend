import { Typography } from "@material-tailwind/react";
import { AiOutlineInstagram, AiOutlineYoutube,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";


function UserFooter() {
  return (
    <footer className="bg-black flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 px-36 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue" className="font-normal">
        &copy; 2023 Yadhu. All Rights Reserved
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="https://www.instagram.com/"
            color="blue-gray"
            className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
          >
            <AiOutlineInstagram className="w-7 h-7" />
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://www.facebook.com/"
            color="blue-gray"
            className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
          >
            <AiOutlineFacebook className="w-7 h-7" />
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://www.youtube.com/"
            color="blue-gray"
            className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
          >
            <AiOutlineYoutube className="w-7 h-7" />
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://www.linkedin.com/"
            color="blue-gray"
            className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
          >
            <AiOutlineLinkedin className="w-7 h-7" />
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

export default UserFooter;