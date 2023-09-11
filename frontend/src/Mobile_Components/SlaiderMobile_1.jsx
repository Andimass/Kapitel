// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import styles from "./styles/SlaiderMobile_1.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import Images from "../components/ui/Image"
import React, { useState, useEffect } from "react";
import Title from "../components/ui/title";
import Text from "../components/ui/text";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
// img
import img1 from "../assets/img/ProjectCard/IMG_1.png"
const Slaider = () => {
    const screenWidth = window.innerWidth;
    let sliderBetView=0;
    if(screenWidth>=375.98){
        sliderBetView=-400;
    }else{
        sliderBetView=0;
    }

  return (
    <Swiper className="swiper"
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y,Navigation]}
      spaceBetween={sliderBetView}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    //   pagination={{ clickable: true }}
    >
      <SwiperSlide className="swiper-slide swiper-slide-active">
            <div className="slaiderbox3">
                <Images src={img1} alt="картинка" className="slaider__img"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide ">
            <div className="slaiderbox3">
                <Images src={img1} alt="картинка" className="slaider__img"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide ">
            <div className="slaiderbox3">
                <Images src={img1} alt="картинка" className="slaider__img"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide ">
            <div className="slaiderbox3">
                <Images src={img1} alt="картинка" className="slaider__img"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide ">
            <div className="slaiderbox3">
                <Images src={img1} alt="картинка" className="slaider__img"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide ">
            <div className="slaiderbox3">
                <Images src={img1} alt="картинка" className="slaider__img"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide ">
            <div className="slaiderbox3">
                <Images src={img1} alt="картинка" className="slaider__img"/>
            </div>
        </SwiperSlide>
    </Swiper>
  );
};

export default Slaider;
