import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import image from "../../assets/images/List → Item.png";

const Testimonial = () => {
  return (
    <div className=" back2 mt-16">
      <h1
        id="testimonial"
        className=" pt-6 flex items-center justify-center text-[#F39D12] lg:text-[50px] md:text-[40px] font-bold sm:text-[30px] text-[30px]"
      >
        TESTI<p className="text-white">MO</p>NI<p className=" text-white">Al</p>
      </h1>
      <p className=" text-white text-center pb-12">What our clients says!</p>

      <Swiper
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" text-white flex flex-col items-center justify-center text-center gap-4">
            <img className=" relative top-9" src={image} alt="" />
            <div className=" bg-[#F39D12] mx-6 rounded-2xl ">
              <div className=" mx-6 py-8 flex flex-col gap-3 ">
                <p>
                  I have had experience in working with developers now for over
                  10 – 15 years and I can say with all honestly that banquet
                  software.{" "}
                </p>
                <p className=" text-[#222] font-bold"> Mr. Kalb-e-Habib</p>
                <p> Dynasty Hotel & Banquet - Faisalabad </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" text-white flex flex-col items-center justify-center text-center gap-4">
            <img className=" relative top-9" src={image} alt="" />
            <div className=" bg-[#F39D12] mx-6 rounded-2xl ">
              <div className=" mx-6 py-8 flex flex-col gap-3 ">
                <p>
                  I have had experience in working with developers now for over
                  10 – 15 years and I can say with all honestly that banquet
                  software.{" "}
                </p>
                <p className=" text-[#222] font-bold"> Mr. Kalb-e-Habib</p>
                <p> Dynasty Hotel & Banquet - Faisalabad </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" text-white flex flex-col items-center justify-center text-center gap-4">
            <img className=" relative top-9" src={image} alt="" />
            <div className=" bg-[#F39D12] mx-6 rounded-2xl ">
              <div className=" mx-6 py-8 flex flex-col gap-3 ">
                <p>
                  I have had experience in working with developers now for over
                  10 – 15 years and I can say with all honestly that banquet
                  software.{" "}
                </p>
                <p className=" text-[#222] font-bold"> Mr. Kalb-e-Habib</p>
                <p> Dynasty Hotel & Banquet - Faisalabad </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" text-white flex flex-col items-center justify-center text-center gap-4">
            <img className=" relative top-9" src={image} alt="" />
            <div className=" bg-[#F39D12] mx-6 rounded-2xl ">
              <div className=" mx-6 py-8 flex flex-col gap-3 ">
                <p>
                  I have had experience in working with developers now for over
                  10 – 15 years and I can say with all honestly that banquet
                  software.{" "}
                </p>
                <p className=" text-[#222] font-bold"> Mr. Kalb-e-Habib</p>
                <p> Dynasty Hotel & Banquet - Faisalabad </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
