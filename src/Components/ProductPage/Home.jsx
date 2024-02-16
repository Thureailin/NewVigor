import React, { useState } from "react";
import banner from "../../assets/New_Vigor_images/unsplash_v-yctrWmRHo.png";
import phone from "../../assets/New_Vigor_images/phone.jpg";
import phone2 from "../../assets/New_Vigor_images/phone2.png";
import contact from "../../assets/New_Vigor_images/Group_1139.png";
import logo from "../../assets/New_Vigor_images/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { MdOutlineArrowRight } from "react-icons/md";
import Modal from '../../Modal';
const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <div>
        <img src={banner} alt="" className="w-full h-[680px]" />
      </div>
      <div className="container text-center mb-5">
        <h1 className="text-center font-semibold mt-5 text-black text-[25px] mb-5  ">
          Product Info
        </h1>
        <div className="container w-[700px] mx-[400px] mb-[100px]">
          <p className="  text-black text-[15px]">
            The Galaxy S23 Ultra comes with a base storage of 256GB instead of
            the standard 128GB. This is helpful if you plan to carry your phone
            for a long time and click a lot of photos, shoot 8K videos, and
            download movies and graphics-intensive games.
          </p>
        </div>
      </div>
      <div className="bg-gray-500 lg:bg-white  mt-5">
        <h1 className="mb-5 font-bold text-[20px] pl-[10px] decoration-current">
          S-Series
        </h1>
        <div className=" mb-6  md:flex flex-row items-start  justify-between gap-10 rounded-[5px]  border-red-500 md:flex-row mx:auto  ">
          <div className="">
            <img
              src={phone}
              alt=""
              className="lg:w-[800px] lg:h-[500px] rounded-xl"
            />
          </div>
          <div className="mt-5 w-[700px] ">
            <h1 className="font-bold text-[20px] -mt-5  mb-8">S Series</h1>
            <p className="text-cus-primary   text-left text-[16px] ">
              The Galaxy S23 Ultra comes with a base storage of 256GB instead of
              the standard 128GB. This is helpful if you plan to carry your
              phone for a long time and click a lot of photos, shoot 8K videos,
              and download movies and graphics-intensive games. The Galaxy S23
              Ultra comes with a base storage of 256GB instead of the standard
              128GB. This is helpful if you plan to carry your phone for a long
              time and click a lot of photos, shoot 8K videos, and download
              movies and graphics-intensive games.
            </p>
            <p className=" text-[16px] mt-[90px]">
              Just to be clear, 128GB is enough for most people, but on a phone
              that is designed for media consumption and heavy use, it's
              certainly not enough. So, it's a good decision to provide 256GB of
              storage on the base model and 1TB on the maxed-out one. Just to be
              clear, 128GB is enough for most people, but on a phone that is
              designed for media consumption and heavy use, it's certainly not
              enough. So, it's a good decision to provide 256GB of storage on
              the base model and 1TB on the maxed-out one.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <h1 className="ml-11 mb-11 text-black text-[20px] font-semibold">
          Available Products
        </h1>
        <div className="flex justify-around items-center ml-5">
          <div className="">
            <img src={phone2} alt="" className=" h-[250px] " />
            <div className="flex justify-center items-center mb-8">
              <p
                style={{
                  backgroundColor: "green",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                className="mx-3"
                style={{
                  backgroundColor: "gray",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",

                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "black",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              ></p>
            </div>
            <div className="mt-8 ml-[100px]">
              <p className="font-semibold">Samsung Galaxy A05</p>
              <p className="font-semibold">(6/64), (4/128), (6/128)</p>
              <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1"
              onClick={handleButtonClick}>
                See Details
                <span className="mt-1">
                  <MdOutlineArrowRight />
                </span>
              </button>
              <Modal isOpen={isModalVisible} closeModal={closeModal}>
        {/* Modal Content */}
        <div className="container ">
          <img src={phone2} alt="" className="w-[300px] h-[180px] ml-[80px] "/>
        </div>
        <div className="flex justify-around items-center mt-4 ">
        <img src={phone2} alt="" className="w-[150px] h-[80px]  "/>
        <img src={phone2} alt="" className="w-[150px] h-[80px]  "/>
        <img src={phone2} alt="" className="w-[150px] h-[80px]  "/>
        
        </div>
        <div className="text-left mt-5">
          <h1 className="text-black font-bold py-1">Samsung Galaxy A05</h1>
          <span className="text-black py-1">Price<span className="font-bold">KS 479000</span></span>
          <p className="py-1">Color <span className="font-semibold">black</span></p>
          <div className="flex justify-left py-1 items-center ">
          <p
                style={{
                  backgroundColor: "black",
                  width: 17,
                  height: 17,
                  borderRadius: "50%",
                  border: 10,
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              ></p>
               <p className=""
                style={{
                  backgroundColor: "green",
                  width: 17,
                  height: 17,
                  borderRadius: "50%",
                  border: 10,
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              ></p>
               <p
                style={{
                  backgroundColor: "gray",
                  width: 17,
                  height: 17,
                  borderRadius: "50%",
                  border: 10,
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              ></p>
          </div>
          <div className="flex  items-center">
            <p className="pr-2">Storage</p>
            <p className="px-2 mx-2 border border-black rounded-lg">6/64</p>
            <p className="px-2 border border-black rounded-lg">4/128</p>
            <p className="px-2 mx-2 border border-black rounded-lg">8/256</p>


          </div>
        </div>
      </Modal>
    </div>
            </div>
             <div className="">
            <img src={phone2} alt="" className=" h-[250px] mb-5" />
            <div className="flex justify-center items-center mb-8">
              <p
                style={{
                  backgroundColor: "green",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                className="mx-3"
                style={{
                  backgroundColor: "gray",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",

                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "black",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              ></p>
            </div>
            <div className="mt-8 ml-[100px] ">
              <p className="font-semibold">Samsung Galaxy A05</p>
              <p className="font-semibold">(6/64), (4/128), (6/128)</p>
              <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1">
                See Details
                <span className="mt-1">
                  <MdOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="">
            <img src={phone2} alt="" className=" h-[250px] mb-5" />
            <div className="flex justify-center items-center mb-8">
              <p
                style={{
                  backgroundColor: "green",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                className="mx-3"
                style={{
                  backgroundColor: "gray",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",

                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "black",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              ></p>
            </div>
            <div className="mt-8 ml-[100px] ">
              <p className="font-semibold">Samsung Galaxy A05</p>
              <p className="font-semibold">(6/64), (4/128), (6/128)</p>
              <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1">
                See Details
                <span className="mt-1">
                  <MdOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="">
            <img src={phone2} alt="" className=" h-[250px] mb-5" />
            <div className="flex justify-center items-center mb-8">
              <p
                style={{
                  backgroundColor: "green",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                className="mx-3"
                style={{
                  backgroundColor: "gray",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",

                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "black",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              ></p>
            </div>
            <div className="mt-8 ml-[100px] ">
              <p className="font-semibold">Samsung Galaxy A05</p>
              <p className="font-semibold">(6/64), (4/128), (6/128)</p>
              <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1">
                See Details
                <span className="mt-1">
                  <MdOutlineArrowRight />
                </span>
              </button>
            </div>
          </div> 
          </div>
          {/* <div className="">
            <img src={phone2} alt="" className=" h-[250px] mb-5" />
            <div className="flex justify-center items-center mb-8">
              <p
                style={{
                  backgroundColor: "green",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                className="mx-3"
                style={{
                  backgroundColor: "gray",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",

                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "black",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              ></p>
            </div>
            <div className="mt-8 ml-[100px] ">
              <p className="font-semibold">Samsung Galaxy A05</p>
              <p className="font-semibold">(6/64), (4/128), (6/128)</p>
              <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1">
                See Details
                <span className="mt-1">
                  <MdOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="">
            <img src={phone2} alt="" className=" h-[250px] mb-5" />
            <div className="flex justify-center items-center mb-8">
              <p
                style={{
                  backgroundColor: "green",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                className="mx-3"
                style={{
                  backgroundColor: "gray",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",

                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "black",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              ></p>
            </div>
            <div className="mt-8 ml-[100px] ">
              <p className="font-semibold">Samsung Galaxy A05</p>
              <p className="font-semibold">(6/64), (4/128), (6/128)</p>
              <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1">
                See Details
                <span className="mt-1">
                  <MdOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="">
            <img src={phone2} alt="" className=" h-[250px] mb-5" />
            <div className="flex justify-center items-center mb-8">
              <p
                style={{
                  backgroundColor: "green",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                className="mx-3"
                style={{
                  backgroundColor: "gray",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",

                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "black",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              ></p>
            </div>
            <div className="mt-8 ml-[100px] ">
              <p className="font-semibold">Samsung Galaxy A05</p>
              <p className="font-semibold">(6/64), (4/128), (6/128)</p>
              <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1">
                See Details
                <span className="mt-1">
                  <MdOutlineArrowRight />
                </span>
              </button>
            </div>
          </div> */}
        </div>
        <div className="bg-gray-500 lg:bg-white  mt-5">
          <h1 className="mb-5 font-bold text-[20px] pl-[10px] decoration-current">
            A-Series
          </h1>
          <div className=" mb-6  md:flex flex-row items-start  justify-between gap-10 rounded-[5px]  border-red-500 md:flex-row mx:auto  ">
            <div className="">
              <img
                src={phone}
                alt=""
                className="lg:w-[800px] lg:h-[500px] rounded-xl"
              />
            </div>
            <div className="mt-5 w-[700px] ">
              <h1 className="font-bold text-[20px]  -mt-5 ">A-Series</h1>
              <p className="text-cus-primary   text-left text-[16px] ">
                The Galaxy S23 Ultra comes with a base storage of 256GB instead
                of the standard 128GB. This is helpful if you plan to carry your
                phone for a long time and click a lot of photos, shoot 8K
                videos, and download movies and graphics-intensive games. The
                Galaxy S23 Ultra comes with a base storage of 256GB instead of
                the standard 128GB. This is helpful if you plan to carry your
                phone for a long time and click a lot of photos, shoot 8K
                videos, and download movies and graphics-intensive games.
              </p>
              <p className=" text-[16px] mt-[100px]">
                Just to be clear, 128GB is enough for most people, but on a
                phone that is designed for media consumption and heavy use, it's
                certainly not enough. So, it's a good decision to provide 256GB
                of storage on the base model and 1TB on the maxed-out one Just
                to be clear, 128GB is enough for most people, but on a phone
                that is designed for media consumption and heavy use, it's
                certainly not enough. So, it's a good decision to provide 256GB
                of storage on the base model and 1TB on the maxed-out one.
              </p>
            </div>
          </div>
        </div>
        <h1 className="ml-11 mb-11 text-black text-[20px] font-semibold">
          Available Products
        </h1>
        <div className="flex justify-around items-center ml-5">
          <div className="">
            <img src={phone2} alt="" className=" h-[250px] " />
            <div className="flex justify-center items-center mb-8">
              <p
                style={{
                  backgroundColor: "green",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                className="mx-3"
                style={{
                  backgroundColor: "gray",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",

                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "black",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              ></p>
            </div>
            <div className="mt-8 ml-[100px]">
              <p className="font-semibold">Samsung Galaxy A05</p>
              <p className="font-semibold">(6/64), (4/128), (6/128)</p>
              <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1">
                See Details
                <span className="mt-1">
                  <MdOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="">
            <img src={phone2} alt="" className=" h-[250px] mb-5" />
            <div className="flex justify-center items-center mb-8">
              <p
                style={{
                  backgroundColor: "green",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                className="mx-3"
                style={{
                  backgroundColor: "gray",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",

                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "black",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              ></p>
            </div>
            <div className="mt-8 ml-[100px] ">
              <p className="font-semibold">Samsung Galaxy A05</p>
              <p className="font-semibold">(6/64), (4/128), (6/128)</p>
              <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1">
                See Details
                <span className="mt-1">
                  <MdOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="">
            <img src={phone2} alt="" className=" h-[250px] mb-5" />
            <div className="flex justify-center items-center mb-8">
              <p
                style={{
                  backgroundColor: "green",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                className="mx-3"
                style={{
                  backgroundColor: "gray",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",

                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "black",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              ></p>
            </div>
            <div className="mt-8 ml-[100px] ">
              <p className="font-semibold">Samsung Galaxy A05</p>
              <p className="font-semibold">(6/64), (4/128), (6/128)</p>
              <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1">
                See Details
                <span className="mt-1">
                  <MdOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="">
            <img src={phone2} alt="" className=" h-[250px] mb-5" />
            <div className="flex justify-center items-center mb-8">
              <p
                style={{
                  backgroundColor: "green",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                className="mx-3"
                style={{
                  backgroundColor: "gray",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",

                  border: 10,

                  cursor: "pointer",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "black",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 10,
                  marginLeft: 2,
                  cursor: "pointer",
                }}
              ></p>
            </div>
            <div className="mt-8 ml-[100px] ">
              <p className="font-semibold">Samsung Galaxy A05</p>
              <p className="font-semibold">(6/64), (4/128), (6/128)</p>
              <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1">
                See Details
                <span className="mt-1">
                  <MdOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-500 lg:bg-white  mt-5">
          <h1 className="mb-5 font-bold text-[20px] pl-[10px] decoration-current">
            z-Series
          </h1>
          <div className=" mb-6  md:flex flex-row items-start  justify-between gap-10 rounded-[5px]  border-red-500 md:flex-row mx:auto  ">
            <div className="">
              <img
                src={phone}
                alt=""
                className="lg:w-[800px] lg:h-[500px] rounded-xl"
              />
            </div>
            <div className="mt-5 w-[700px] ">
              <h1 className="font-bold text-[20px] -mt-5  mb-8">Z-Series</h1>
              <p className="text-cus-primary   text-left text-[16px] ">
                The Galaxy S23 Ultra comes with a base storage of 256GB instead
                of the standard 128GB. This is helpful if you plan to carry your
                phone for a long time and click a lot of photos, shoot 8K
                videos, and download movies and graphics-intensive games. The
                Galaxy S23 Ultra comes with a base storage of 256GB instead of
                the standard 128GB. This is helpful if you plan to carry your
                phone for a long time and click a lot of photos, shoot 8K
                videos, and download movies and graphics-intensive games.
              </p>
              <p className=" text-[16px] mt-[90px]">
                Just to be clear, 128GB is enough for most people, but on a
                phone that is designed for media consumption and heavy use, it's
                certainly not enough. So, it's a good decision to provide 256GB
                of storage on the base model and 1TB on the maxed-out one. Just
                to be clear, 128GB is enough for most people, but on a phone
                that is designed for media consumption and heavy use, it's
                certainly not enough. So, it's a good decision to provide 256GB
                of storage on the base model and 1TB on the maxed-out one.
              </p>
            </div>
          </div>
          <h1 className="ml-11 mb-11 text-black text-[20px] font-semibold">
            Available Products
          </h1>
          <div className="flex justify-around items-center ml-5">
            <div className="">
              <img src={phone2} alt="" className=" h-[250px] " />
              <div className="flex justify-center items-center mb-8">
                <p
                  style={{
                    backgroundColor: "green",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: 10,

                    cursor: "pointer",
                  }}
                ></p>
                <p
                  className="mx-3"
                  style={{
                    backgroundColor: "gray",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",

                    border: 10,

                    cursor: "pointer",
                  }}
                ></p>
                <p
                  style={{
                    backgroundColor: "black",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: 10,
                    marginLeft: 2,
                    cursor: "pointer",
                  }}
                ></p>
              </div>
              <div className="mt-8 ml-[100px]">
                <p className="font-semibold">Samsung Galaxy A05</p>
                <p className="font-semibold">(6/64), (4/128), (6/128)</p>
                <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1">
                  See Details
                  <span className="mt-1">
                    <MdOutlineArrowRight />
                  </span>
                </button>
              </div>
            </div>
            <div className="">
              <img src={phone2} alt="" className=" h-[250px] mb-5" />
              <div className="flex justify-center items-center mb-8">
                <p
                  style={{
                    backgroundColor: "green",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: 10,

                    cursor: "pointer",
                  }}
                ></p>
                <p
                  className="mx-3"
                  style={{
                    backgroundColor: "gray",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",

                    border: 10,

                    cursor: "pointer",
                  }}
                ></p>
                <p
                  style={{
                    backgroundColor: "black",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: 10,
                    marginLeft: 2,
                    cursor: "pointer",
                  }}
                ></p>
              </div>
              <div className="mt-8 ml-[100px] ">
                <p className="font-semibold">Samsung Galaxy A05</p>
                <p className="font-semibold">(6/64), (4/128), (6/128)</p>
                <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1">
                  See Details
                  <span className="mt-1">
                    <MdOutlineArrowRight />
                  </span>
                </button>
              </div>
            </div>
            <div className="">
              <img src={phone2} alt="" className=" h-[250px] mb-5" />
              <div className="flex justify-center items-center mb-8">
                <p
                  style={{
                    backgroundColor: "green",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: 10,

                    cursor: "pointer",
                  }}
                ></p>
                <p
                  className="mx-3"
                  style={{
                    backgroundColor: "gray",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",

                    border: 10,

                    cursor: "pointer",
                  }}
                ></p>
                <p
                  style={{
                    backgroundColor: "black",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: 10,
                    marginLeft: 2,
                    cursor: "pointer",
                  }}
                ></p>
              </div>
              <div className="mt-8 ml-[100px] ">
                <p className="font-semibold">Samsung Galaxy A05</p>
                <p className="font-semibold">(6/64), (4/128), (6/128)</p>
                <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1">
                  See Details
                  <span className="mt-1">
                    <MdOutlineArrowRight />
                  </span>
                </button>
              </div>
            </div>
            <div className="">
              <img src={phone2} alt="" className=" h-[250px] mb-5" />
              <div className="flex justify-center items-center mb-8">
                <p
                  style={{
                    backgroundColor: "green",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: 10,

                    cursor: "pointer",
                  }}
                ></p>
                <p
                  className="mx-3"
                  style={{
                    backgroundColor: "gray",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",

                    border: 10,

                    cursor: "pointer",
                  }}
                ></p>
                <p
                  style={{
                    backgroundColor: "black",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: 10,
                    marginLeft: 2,
                    cursor: "pointer",
                  }}
                ></p>
              </div>
              <div className="mt-8 ml-[100px] ">
                <p className="font-semibold">Samsung Galaxy A05</p>
                <p className="font-semibold">(6/64), (4/128), (6/128)</p>
                <button className="flex bg-transparent border border-black rounded-xl mt-5 font-bold px-11 py-1">
                  See Details
                  <span className="mt-1">
                    <MdOutlineArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      
      <div className="bg-[#11BF11] h-[550px] mt-8 relative  ">
        <img src={contact} alt="" className="h-[500px]  mx-[400px] py-11" />
        <div className="w-full max-w-xs mx-[770px]  absolute top-5 z-50">
          <form className="bg-white shadow-md rounded-xl px-8 pt-6  pb-11 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="phone"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
               Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
               Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
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

    </>
  );
};

export default Home;
