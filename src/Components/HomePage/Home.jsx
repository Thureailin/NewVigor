
import earphone from "../../assets/New_Vigor_images/phone.jpg";
import earphone1 from "../../assets/New_Vigor_images/image_28.png";
import earphone3 from "../../assets/New_Vigor_images/image_18.png";
import newVigor from "../../assets/New_Vigor_images/unsplash_m_7p45JfXQo.png";
import organ1 from "../../assets/New_Vigor_images/unsplash_qvBYnMuNJ9A.png";
import organ2 from "../../assets/New_Vigor_images/unsplash_5WQJ_ejZ7y8.png";
import organ3 from "../../assets/New_Vigor_images/unsplash_a6APMO50sbQ.png";
import { IoMdArrowDropright } from "react-icons/io";
import appliance from "../../assets/New_Vigor_images/appliance.jpg"
import { MdOutlineArrowRight } from "react-icons/md";

import slide2 from "../../assets/New_Vigor_images/unsplash_v-yctrWmRHo.png";
import slide3 from "../../assets/New_Vigor_images/image_18.png"
import slide4 from "../../assets/New_Vigor_images/solution2.jpg"

// import "react-responsive-carousel/lib/styles/carousel.min.css" // Import the carousel styles
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
// import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const Home = () => {
  return (
    <div className="">
      <div className="">
      <Swiper  className=""
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				breakpoints={{
					0: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					// when window width is >= 768px
					768: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					// when window width is >= 1280px
					1280: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
				}}
				navigation
				pagination={{ clickable: true }}
				// scrollbar={{ draggable: true }}
				onSlideChange={{
					rotate: 0,
					stretch: 0,
					depth: 200,
					modifier: 1,
					slideShadows: true,
				}}>
				{/* <SwiperSlide className=" mb-11 ">
					<div className=" rounded-[5px]">
						<img  src={slide1} className="" alt="" />
					</div>
				</SwiperSlide> */}
				<SwiperSlide className="">
					<div
						className=" rounded-[5px]"style={{
              backgroundImage: `url(${slide2})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "10px",
              width: "100%", // Adjust the value as per your requirement
              height: "650px",
            }}
						//  initial={{x:0}}
						// //  animate={{scale:1.3}}
						//  transition={{delay:0.5, duration:0.5}}
					> 
						{/* <img src={slide2} alt="" className="xl:h-[600px] xl:w-full "  /> */}
					</div>
        <div className="flex -mt-[100px] mx-[500px] justify-around items-center">
          <div className="w-[100px]">
            <button className="text-black bg-white px-5 py-2 rounded-2xl">Learn More<MdOutlineArrowRight 
 className="w-5 text-[#11BF11]  h-5 ml-[120px] -mt-5 
 " />
</button>
          </div>
          <div className="w-[100px]">
          <button className="text-black bg-white px-5 py-2 rounded-2xl">Pre Order<MdOutlineArrowRight  className="w-5 text-[#11BF11]  h-5 ml-[100px] -mt-5" />
</button>
          </div>
        </div>
				</SwiperSlide> 
				<SwiperSlide className="">
					<div className=" rounded-[5px] "style={{
              backgroundImage: `url(${slide3})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "10px",
              width: "100%", // Adjust the value as per your requirement
              height: "650px",
            }}>
					
					</div>
				</SwiperSlide>
				<SwiperSlide className="">
					<div className=" rounded-[5px]"style={{
              backgroundImage: `url(${slide4})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "10px",
              width: "100%", // Adjust the value as per your requirement
              height: "650px",
            }}>
					
					</div>
       
				</SwiperSlide>
        
			</Swiper>
      </div>
      <div className="flex justify-around items-center mt-4">
        <div
          className="mx-1 rounded-lg shadow-xl "
          style={{
            backgroundImage: `url(${earphone})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            width: "800px", // Adjust the value as per your requirement
            height: "500px",
          }}
        >
          <h1
            className="text-white font-bold 
         text-[30px] text-center pt-11"
          >
            Samsung Mobiles
          </h1>
          <div className="text-center">
            <button className="font-medium text-black bg-white rounded-2xl px-3 py-1 mt-7 inline">
              See Product
              <IoMdArrowDropright className="w-5 text-[#11BF11]  h-5 ml-[150px] -mt-5" />
            </button>
          </div>
        </div>
        <div
          className="mx-1 rounded-lg shadow-xl "
          style={{
            backgroundImage: `url(${earphone1})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            width: "800px", // Adjust the value as per your requirement
            height: "500px",
          }}
        >
          <h1
            className="text-white font-bold 
         text-[30px] text-center pt-11"
          >
            Samsung Buds
          </h1>
          <div className="text-center">
            <button className="font-medium text-black bg-white rounded-2xl px-3 py-1 mt-7 inline">
              See Product
              <IoMdArrowDropright className="w-5 text-[#11BF11]  h-5 ml-[150px] -mt-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center mt-4">
        <div
          className="mx-1 rounded-lg shadow-xl "
          style={{
            backgroundImage: `url(${earphone1})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            width: "800px", // Adjust the value as per your requirement
            height: "500px",
          }}
        >
          <h1
            className="text-white font-bold 
         text-[30px] text-center pt-11"
          >
            Samsung Tablets
          </h1>
          <div className="text-center">
            <button className="font-medium text-black bg-white rounded-2xl px-3 py-1 mt-7 inline">
              See Product
              <IoMdArrowDropright className="w-5 text-[#11BF11]  h-5 ml-[150px] -mt-5" />
            </button>
          </div>
        </div>
        <div
          className="mx-1 rounded-lg shadow-xl "
          style={{
            backgroundImage: `url(${earphone})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            width: "800px", // Adjust the value as per your requirement
            height: "500px",
          }}
        >
          <h1
            className="text-white font-bold 
         text-[30px] text-center pt-11"
          >
            Samsung Watches
          </h1>
          <div className="text-center">
            <button className="font-medium text-black bg-white rounded-2xl px-3 py-1 mt-7 inline">
              See Product
              <IoMdArrowDropright className="w-5 text-[#11BF11]  h-5 ml-[150px] -mt-5" />
            </button>
          </div>
        </div>
      </div>
      <div
          className="mx-1 rounded-lg shadow-xl mt-5"
          style={{
            backgroundImage: `url(${appliance})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            width: "100%", // Adjust the value as per your requirement
            height: "600px",
          }}
        >
          <h1
            className="text-white font-bold 
         text-[30px] text-center pt-[100px]"
          >
            Home Appliance
          </h1>
          <div className="text-center">
            <button className="font-medium text-black bg-white rounded-2xl px-3 py-1 mt-7 inline">
              See Product
              <IoMdArrowDropright className="w-5 text-[#11BF11]  h-5 ml-[150px] -mt-5" />
            </button>
          </div>
        </div>
        <div
          className="mx-1 rounded-lg shadow-xl mt-5 "
          style={{
            backgroundImage: `url(${earphone3})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            width: "100%", // Adjust the value as per your requirement
            height: "500px",
          }}
        >
          <h1
            className="text-black font-bold 
         text-[30px] text-center pt-11"
          >
            Samsung B2b Product
          </h1>
          <div className="text-center">
            <button className="font-medium text-white bg-black rounded-2xl px-3 py-1 mt-7 inline">
              See Product
              <IoMdArrowDropright className="w-5 text-[#11BF11]  h-5 ml-[150px] -mt-5" />
            </button>
          </div>
        </div>
      <div className="mt-5">
        <img src={newVigor} alt="" className="h-[300px]  w-full" />
        <p className="-mt-[250px] text-center text-white font-semibold text-[35px]">
          New Vigor's Organization Structure
        </p>
      </div>
      <div className="flex justify-around items-center mt-8">
        <div className="">
          <button className="p-3 w-[320px] bg-white text-black py-5 text-center rounded-t-lg">
            Logistics Department
          </button>
          <img
            src={organ1}
            alt=""
            className="w-[320px] h-[250px] rounded-b-lg"
          />
        </div>
        <div className="mx-2">
          <button className="p-3 w-[300px]   bg-white text-black py-5 text-center rounded-t-lg">
            Logistics Department
          </button>
          <img
            src={organ2}
            alt=""
            className="w-[300px]  h-[250px] rounded-b-lg"
          />
        </div>
        <div className="">
          <button className="p-3 w-[300px]  bg-white text-black py-5 text-center rounded-t-lg">
            Logistics Department
          </button>
          <img
            src={organ3}
            alt=""
            className="w-[300px]  h-[250px] rounded-b-lg"
          />
        </div>
        <div className="mx-2">
          <button className="p-3 w-[300px]  bg-white text-black rounded py-5 text-center rounded-t-lg">
            Logistics Department
          </button>
          <img
            src={earphone1}
            alt=""
            className="w-[320px]  h-[250px] rounded-b-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
