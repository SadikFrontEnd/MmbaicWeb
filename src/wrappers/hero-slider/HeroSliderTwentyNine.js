import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import "../../assets/scss/main.css";

import HeroSliderTwentyNineSingle from "../../components/hero-slider/HeroSliderTwentyNineSingle.js";
import axiosConfig from "../../axiosConfig";
import { Col, Row } from "react-bootstrap";
import business from "../../assets/img/bussiness.png";
const HeroSliderTwentyNine = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    axiosConfig
      .get("/admin/getbanner")
      .then((response) => {
        setSliderData(response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  // const params = {
  //   effect: "fade",
  //   loop: true,
  //   speed: 1000,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  //   watchSlidesVisibility: true,

  //   renderPrevButton: () => (
  //     <button className="swiper-button-prev ht-swiper-button-nav">
  //       <i className="pe-7s-angle-left" />
  //     </button>
  //   ),
  //   renderNextButton: () => (
  //     <button className="swiper-button-next ht-swiper-button-nav">
  //       <i className="pe-7s-angle-right" />
  //     </button>
  //   ),
  // };
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        {/* <Swiper {...params}>
        {sliderData &&
            sliderData?.map((single, key) => {
              return (
                <HeroSliderTwentyNineSingle
                  data={single}
                  key={key}
                  sliderClass="swiper-slide"
                />
              );
            })}
        </Swiper> */}
        <div className="home-banner">
          <Row className="bannerRow">
            <Col lg="8" md="8" sm="12">
              <div>
                <h3 className="welcome">WELCOME</h3>
                <h1 className="text-color">Inspiring Lives</h1>
                <h2 className="text-color ">
                  Be a member of Milionnaire mind set club.
                </h2>
                <p className="text-color">
                  START YUOR OWN BUSINESS OR OWN THE EXISTING BUSINESS
                </p>
                <div className="my-2">
                  <a
                    className="elementor-button elementor-button-link elementor-size-md"
                    href="#"
                  >
                    Discover more
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" sm="12">
              <img src={business} alt="bussiness" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderTwentyNine;
