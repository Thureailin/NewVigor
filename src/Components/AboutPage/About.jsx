import React from "react";
import back from "../../assets/New_Vigor_images/aboutback.png";
import backline from "../../assets/New_Vigor_images/backline.png";
import women from "../../assets/New_Vigor_images/women.jpg";
import about from "../../assets/New_Vigor_images/about.jpg";
import vision from "../../assets/New_Vigor_images/vision.png";
import vision3 from "../../assets/New_Vigor_images/visionColor.png";
import arrow from "../../assets/New_Vigor_images/downarrow.png";
import arrow1 from "../../assets/New_Vigor_images/up.png";
import img from "../../assets/New_Vigor_images/team1.jpg";
import svg1 from "../../assets/New_Vigor_images/SVG2.png";
import svg2 from "../../assets/New_Vigor_images/SVG3.png";
import svg3 from "../../assets/New_Vigor_images/SVG.png";
import video from "../../assets/New_Vigor_images/motionabout.mp4"
import { TbPointFilled } from "react-icons/tb";
import ReactPlayer from 'react-player'
const About = () => {
  return (
    <>
      <div>
        <div className="">
        <video controls autoPlay className="w-full h-[700px]">
 
  <source src={video} type="video/ogg"/>
  Your browser does not support the video tag.
</video>
        </div>
        <div className="flex justify-around ml-[100px] items-center -mt-[80px]">
          <div
            className="bg-[#d6f7dd] p-6 rounded-lg
"
          >
            <img src={svg1} className="w-[100px] h-[100px] mb-3 ml-6" alt="" />
            <p className="text-purple-500 text-center font-semibold">
              Telecommunication
            </p>
          </div>
          <div className="bg-[#d6f7dd] p-5 rounded-lg">
            <img src={svg2} className="w-[100px] h-[100px] mb-3 ml-6" alt="" />
            <p className="text-purple-500 text-center font-semibold">
              Building Constructions
            </p>
          </div>
          <div className="bg-[#d6f7dd] p-5 rounded-lg">
            <img src={svg3} className="w-[100px]  h-[100px] mb-3 ml-6" alt="" />
            <p className="text-purple-500 text-center ">
              Power Transmission
              <p className="text-purple-500 text-center">
                Line and Distributions
              </p>
            </p>
          </div>
        </div>
        <div className="mt-11 ">
          <h1 className="text-black text-center  text-[30px] font-semibold mb-[100px] ">
            Personal Profile
          </h1>
          <div className="flex justify-around items-start mt-[50px]">
            <div className="">
              <img
                src={women}
                alt=""
                className="w-[200px] h-[200px] rounded-[50%] text-center ml-[150px]"
              />
              <h1
                className="text-[#414141] mt-5 font-bold text-xl text-center
"
              >
                Daw Phyo Ei Ei Paing
              </h1>
              <p
                className=" text-[#11BF11] text-center mt-3 text-[18px]
"
              >
                Managing Director
              </p>
              <h1
                className="text-[#9549B2] text-[30px]  mb-5 mt-11
"
              >
                Professional Background
              </h1>
              <ul className="w-[500px]">
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1" >
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
              </ul>
            </div>
            <div className="">
              <h1
                className="text-[#9549B2]  text-[30px]
"
              >
                Educational Profile
              </h1>
              <ul className="w-[500px]">
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1" >
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
              </ul>
              <h1
                className="text-[#9549B2] mt-11  text-[30px]
"
              >
                Professional Profile
              </h1>
              <ul className="w-[500px]">
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1" >
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
              </ul>
              <h1
                className="text-[#9549B2]  text-[30px] mt-11
"
              >
                Other
              </h1>
              <ul className="w-[500px]">
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1">
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1 flex">
                  <span className="mx-2 mt-1" >
                    <TbPointFilled />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
              </ul>
            </div>
          </div>
          {/* <img src={back} className="h-[1200px]" /> */}

          {/* <div className="flex justify-around items-center -mt-[700px]">
            <div className="bg-[#6a34c2] px-5 py-5 rounded-lg text-white">
              <div className="w-[300px]">
                <div className="flex  items-center mb-11">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                    width="32"
                    height="32"
                    // fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                  </svg>
                  <h1 className="mr-[100px] ml-6">Education Profile</h1>
                </div>
                <p className="">
                  This beautiful collection of UI components is part of the
                  recently released Purpose Design System. It is a powerful tool
                  for Figma including 300+ ready to use components designed to
                  help you building modern user interfaces.
                </p>
              </div>
            </div>
            <div className="bg-[#6a34c2] px-5 py-5 rounded-lg text-white -mx-[380px]">
              <div className="w-[300px]">
                <div className="flex  items-center mb-11">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    // fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                  </svg>
                  <h1 className="mr-[100px] ml-6">Education Profile</h1>
                </div>
                <p className="">
                  This beautiful collection of UI components is part of the
                  recently released Purpose Design System. It is a powerful tool
                  for Figma including 300+ ready to use components designed to
                  help you building modern user interfaces.
                </p>
              </div>
            </div>
            <div className="bg-[#6a34c2] px-5 py-5 rounded-lg text-white">
              <div className="w-[300px]">
                <div className="flex  items-center mb-11">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    // fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                  </svg>
                  <h1 className="mr-[100px] ml-6">Education Profile</h1>
                </div>
                <p className="">
                  This beautiful collection of UI components is part of the
                  recently released Purpose Design System. It is a powerful tool
                  for Figma including 300+ ready to use components designed to
                  help you building modern user interfaces.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="flex justify-center items-center -mt-[600px]">
            <img
              src={women}
              alt=""
              className="w-[300px] -ml-[300px] h-[300px] rounded-[50%]"
            />
            <div className="ml-[80px]">
              <p>Daw Phyo Ei Ei Paing</p>
              <p>Managing Director</p>
              <img src={backline} alt="" className="ml-[100px]" />
            </div>
          </div> */}
        </div>
        <div className="">
          <div className="flex justify-around items-start mt-[50px]">
            <div className="">
              <h1
                className="text-[#9549B2]  text-[30px]
"
              >
                Educational Profile
              </h1>
              <ul className="w-[500px]">
                <li className="py-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
              </ul>
              <h1
                className="text-[#9549B2] mt-11  text-[30px]
"
              >
                Professional Profile
              </h1>
              <ul className="w-[500px]">
                <li className="py-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
              </ul>
              <h1
                className="text-[#9549B2]  text-[30px] mt-11
"
              >
                Other
              </h1>
              <ul className="w-[500px]">
                <li className="py-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
              </ul>
            </div>
            <div className="">
              <img
                src={women}
                alt=""
                className="w-[200px] h-[200px] rounded-[50%] text-center ml-[150px]"
              />
              <h1
                className="text-[#414141] mt-5 font-bold text-xl text-center
"
              >
                Daw Phyo Ei Ei Paing
              </h1>
              <p
                className=" text-[#11BF11] text-center mt-3 text-[18px]
"
              >
                Managing Director
              </p>
              <h1
                className="text-[#9549B2] text-[30px]  mb-5 mt-11
"
              >
                Professional Background
              </h1>
              <ul className="w-[500px]">
                <li className="py-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
                <li className="py-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </li>
              </ul>
            </div>
          </div>
          {/* <img src={back} className="h-[1200px]" /> */}

          {/* <div className="flex justify-around items-center -mt-[700px]">
            <div className="bg-[#6a34c2] px-5 py-5 rounded-lg text-white">
              <div className="w-[300px]">
                <div className="flex  items-center mb-11">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                    width="32"
                    height="32"
                    // fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                  </svg>
                  <h1 className="mr-[100px] ml-6">Education Profile</h1>
                </div>
                <p className="">
                  This beautiful collection of UI components is part of the
                  recently released Purpose Design System. It is a powerful tool
                  for Figma including 300+ ready to use components designed to
                  help you building modern user interfaces.
                </p>
              </div>
            </div>
            <div className="bg-[#6a34c2] px-5 py-5 rounded-lg text-white -mx-[380px]">
              <div className="w-[300px]">
                <div className="flex  items-center mb-11">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    // fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                  </svg>
                  <h1 className="mr-[100px] ml-6">Education Profile</h1>
                </div>
                <p className="">
                  This beautiful collection of UI components is part of the
                  recently released Purpose Design System. It is a powerful tool
                  for Figma including 300+ ready to use components designed to
                  help you building modern user interfaces.
                </p>
              </div>
            </div>
            <div className="bg-[#6a34c2] px-5 py-5 rounded-lg text-white">
              <div className="w-[300px]">
                <div className="flex  items-center mb-11">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    // fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                  </svg>
                  <h1 className="mr-[100px] ml-6">Education Profile</h1>
                </div>
                <p className="">
                  This beautiful collection of UI components is part of the
                  recently released Purpose Design System. It is a powerful tool
                  for Figma including 300+ ready to use components designed to
                  help you building modern user interfaces.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="flex justify-center items-center -mt-[600px]">
            <img
              src={women}
              alt=""
              className="w-[300px] -ml-[300px] h-[300px] rounded-[50%]"
            />
            <div className="ml-[80px]">
              <p>Daw Phyo Ei Ei Paing</p>
              <p>Managing Director</p>
              <img src={backline} alt="" className="ml-[100px]" />
            </div>
          </div> */}
        </div>
        <div className="mt-11  mb-[100px]">
          <h1 className="text-center font-semibold text-[30px] ">About us</h1>
          <div className="mt-8">
            <img src={about} alt="" className="w-full h-[500px] rounded-xl " />
            <div className="-mt-[300px] ml-[400px]  w-[700px]">
              <p className="text-white border-2 border-white rounded-lg">
                This beautiful collection of UI components is part of the
                recently released Purpose Design System. It is a powerful tool
                for Figma including 300+ ready to use components designed to
                help you building modern user interfaces.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[250px]">
          <div className="flex justify-center items-center">
            <div className="mx-[150px]">
              <p>Vision & Mission</p>
              <img src={vision} alt="" className="h-11 w-[200px]" />
            </div>
            <div className="mx-11">
              <img src={vision3} alt="" className="h-[500px] w-[500px]" />
            </div>
          </div>
        </div>
        <div className="mt-[80px]">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-[25px]">
              Business Sectors of New Vigor Co.,Ltd
            </h1>
            <div className="">
              <img src={arrow} alt="" className="mt-11 h-[80px]" />
            </div>
          </div>
          <div className="flex justify-center items-center mr-[400px] -mt-11">
            <img src={arrow1} alt="" className="mt-11 h-[80px]" />
          </div>
        </div>
        {/* <div className='flex justify-center items-start mt-2'>
            <div className='mx-11'>
                <img src={foot} alt='' className='w-[500px] h-[300px] shadow-xl rounded-lg '/>
            </div>
            <div className='mx-11'>
              <h1 className="mb-11 font-bold text-[20px]">Retail</h1>
              <p className="mb-11 text-xl text-black">Samsung Brand Showroom</p>
              <p className="mb-11 text-xl text-black">Samsung Customer Service</p>
              <p className="text-xl text-black">Samsung Commercial Product</p>
            </div>
        </div>
        <div className='flex justify-center items-start mt-2'>
            <div className='mx-11'>
                <img src={foot} alt='' className='w-[500px] h-[300px] shadow-xl rounded-lg '/>
            </div>
            <div className='mx-11'>
              <h1 className="mb-11 font-bold text-[20px]">Detail</h1>
              <p className="mb-11 text-xl text-black">Samsung Brand Showroom</p>
              <p className="mb-11 text-xl text-black">Samsung Customer Service</p>
              <p className="text-xl text-black">Samsung Commercial Product</p>
            </div>
        </div>
        <div className='flex justify-center items-start mt-2'>
            <div className='mx-11'>
                <img src={foot} alt='' className='w-[500px] h-[300px] shadow-xl rounded-lg '/>
            </div>
            <div className='mx-11 w-[00px]'>
              <h1 className="mb-11 font-bold text-[20px]">Telecommunication Infrastructure Construction</h1>
              <p className="mb-11 text-xl text-black">Tower Construction Of Civil Work</p>
              <p className="mb-11 text-xl text-black">Tower Constructions Of Errection Work</p>
              <p className="text-xl text-black">Tower Constructions Of Finishing Work (Earthing, Fencing)</p>
            </div>
        </div>
        <div className='flex justify-center items-start mt-2'>
            <div className='mx-11'>
                <img src={foot} alt='' className='w-[500px] h-[300px] shadow-xl rounded-lg '/>
            </div>
            <div className='mx-11'>
              <h1 className="mb-11 font-bold text-[20px]">Detail</h1>
              <p className="mb-11 text-xl text-black">Samsung Brand Showroom</p>
              <p className="mb-11 text-xl text-black">Samsung Customer Service</p>
              <p className="text-xl text-black">Samsung Commercial Product</p>
            </div>
        </div> */}
      </div>
    </>
  );
};

export default About;
