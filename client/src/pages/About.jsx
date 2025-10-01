import React from "react";
import aboutImg from "../assets/images/about_img.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] max-w-2xl rounded-xl shadow-xl p-3 flex flex-col gap-3">
        <h1 className="text-4xl text-center font-semibold">About</h1>
        <div className="w-max flex flex-col">
          <img src={aboutImg} className="w-40 h-40" alt="Image" />
          <h1 className="text-xl font-semibold text-center">Travel And Tourism</h1>
        </div>
        <ul className="list-disc w-max mx-5">
          <li className="hover:underline hover:text-blue-600 cursor-pointer">
            <a
              className="flex items-center gap-2"
              href="https://github.com/Sushant0102"
              target="_blank"
            >
              Git-Hub <FaExternalLinkAlt />
            </a>
          </li>
          <li className="hover:underline hover:text-pink-600 cursor-pointer">
            <a
              className="flex items-center gap-2"
              href="https://www.instagram.com/sushant.01_/"
              target="_blank"
            >
              Instagram <FaExternalLinkAlt />
            </a>
          </li>
        </ul>
        <p>
         Welcome to [Travel And Tourism], your trusted companion for unforgettable journeys.
        We believe that traveling is more than just moving from one place to another—it’s about creating memories, experiencing new cultures, and 
        exploring the beauty of the world. Our mission is to make travel simple, affordable, and accessible for everyone.
        
        With our user-friendly platform, you can:
            ✨ Explore a wide range of curated tour packages.
            ✨ Discover hidden gems and must-visit destinations.
            ✨ Book your trips with just a few clicks.
            ✨ Read reviews and share your own travel experiences.
        Our team of travel enthusiasts works tirelessly to bring you the best deals and unique experiences. 
        Whether you’re planning a relaxing beach holiday, an adventurous trek, or a cultural getaway, we’ve got something special waiting for you.
        </p>
      </div>
    </div>
  );
};

export default About;
