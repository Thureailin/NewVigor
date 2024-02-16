import React from 'react'
import logo from "../../assets/New_Vigor_images/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaViber } from "react-icons/fa";
import contact from "../../assets/New_Vigor_images/Group_1139.png";
// import logo from "../../assets/New_Vigor_images/logo.png";
import { FaFacebook } from "react-icons/fa6";
// import { FaViber } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <div className="bg-[#11BF11] h-[550px] mt-8 relative  ">
        <img src={contact} alt="" className="h-[500px]  mx-[400px] py-11" />
        <div className="w-full max-w-xs mx-[770px]  absolute top-5 z-50">
          <form className="bg-white shadow-md rounded-xl px-8 pt-6  pb-11 mb-4">
            <div className="mb-4">
              {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label> */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone
              </label> */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight  focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="phone"
              />
            </div>
            <div className="mb-4">
              
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
            <textarea className='w-[255px] rounded-md' rows={5}>Message</textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-purple-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
              Submit
              </button>
             
            </div>
          </form>
          <div className="absolute top-[130px] -left-[250px] z-100">
            <p className="text-purple-800 font-bold text-[25px]">
              Contact Us For More{" "}
            </p>
            <p className="text-purple-800 font-bold text-[25px]">
              Information !
            </p>
            <p className="text-green-500 font-semibold text-[12px] mt-2">
              Please contact us for more informations and{" "}
            </p>
            <p className="text-green-500 font-semibold text-[12px]">
              we will discuss about everything you want.
            </p>
            <img src={logo} alt="" className="w-[200px] mt-5 h-11" />
          </div>
        </div>
        <div className="flex  mx-[1000px] ">
            <p className="" ><FaFacebook className="w-6 h-6"/></p>
            <p className="mx-5"><FaViber className="w-6 h-6"/></p>
            <p><BsTelegram className="w-6 h-6"/></p>
        </div>
      </div>

      <div className='bg-[#11BF11]'>
      <div className='flex justify-around items-start py-5'>
          <div className=''>
            <p className='mb-5 font-bold text-white'>Lift Media</p>
            <p className='py-1 text-white'>Pricing</p>
            <p className='py-1 text-white'>Updates</p>
            <p className='py-1 text-white'>Beta</p>
            <p className='py-1 text-white'>Newsletter</p>
            <p className='py-1 text-white'>Collaborations</p>
          </div>
          <div className=''>
            <p className='mb-5 font-bold text-white'>Product</p>
            <p className='py-1 text-white'>Business</p>
            <p className='py-1 text-white'>Designers</p>
            <p className='py-1 text-white'>Classrooms</p>
            <p className='py-1 text-white'>Newcomers</p>
          </div>
          <div className=''>
            <p className='mb-5 font-bold text-white'>Learning</p>
            <p className='py-1 text-white'>Learn Hub</p>
            <p className='py-1 text-white'>Manuals</p>
            <p className='py-1 text-white'>Tutorials</p>
            <p className='py-1 text-white'>Communities</p>
          </div>
          <div className=''>
            <p className='mb-5 font-bold text-white'>Resources</p>
            <p className='py-1 text-white'>Tutorials</p>
            <p className='py-1 text-white'>Editorials</p>
            <p className='py-1 text-white'>Product</p>
            <p className='py-1 text-white'>Newsroom</p>
           
          </div>
          <div className=''>
            <p className='mb-5 font-bold text-white'>About</p>
            <p className='py-1 text-white'>Company </p>
            <p className='py-1 text-white'>Careers</p>
            <p className='py-1 text-white'>Legal</p>
            <p className='py-1 text-white'>Help</p>
          
          </div>
      </div>
      <div className='bg-white '>
        <img src={logo} alt='' className='w-[300px] py-4 h-[80px] mx-[600px]' />
      </div>
      <div className='bg-[#11BF11]'>
        <p className='text-center text-white'>© 2020 Lift Media. All rights reserved. </p>
        <div className='flex justify-center items-center mt-5 py-8 '>
        <FaFacebookF  className='w-6 h-6 mx-2 text-white '/>
        <FaInstagram className='w-6 h-6 mx-2 text-white ' />
        <CiTwitter className='w-6 h-6 mx-2 text-white ' />
        <FaViber className='w-6 h-6 mx-2 text-white ' />

        </div>
      </div>
    </div>
    </>
    
  )
}

export default Footer