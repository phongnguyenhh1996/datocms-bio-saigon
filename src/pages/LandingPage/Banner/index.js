import React from "react";
import Slider from "react-slick";
import sampleProduct from "../../../assets/images/36135kw-a02-1.png"
import sampleProduct2 from "../../../assets/images/36135kw-a00-1.png"
import { BsPlus } from "@react-icons/all-files/bs/BsPlus"

const settings = {
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};

const Banner = () => {
  return (
    <div className="banner">
      <div className="Wrap">
        <Slider {...settings}>
        <div>
          <div className="banner__product">
            <div className="banner__product-left">
              <h2 className="banner__title">BioSaigon New Collection!</h2>
              <p className="banner__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="banner__action">
                <button className="btn"><BsPlus size="1.5rem"/></button>
                <div className="banner__action-text">add to cart</div>
              </div>
            </div>
            <div className="banner__product-right">
              <img
                alt="asd"
                src={sampleProduct2}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="banner__product">
            <div className="banner__product-left">
              <h2 className="banner__title">BioSaigon New Collection!</h2>
              <p className="banner__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="banner__action">
                <button className="btn"><BsPlus size="1.5rem" /></button>
                <div className="banner__action-text">add to cart</div>
              </div>
            </div>
            <div className="banner__product-right">
              <img
                alt="asd"
                src={sampleProduct}
              />
            </div>
          </div>
        </div>
        </Slider>
      </div>
      
    </div>
  );
};

export default Banner;
