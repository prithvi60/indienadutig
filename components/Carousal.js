import React, { Component } from "react";
import Image from "next/image";
import FourPic from "../public/images/4.png";
import FivePic from "../public/images/5.png";
import SixPic from "../public/images/6.png";
import SevenPic from "../public/images/7.png";
import EightPic from "../public/images/8.png";
import NinePic from "../public/images/9.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const images = [FivePic, SixPic, SevenPic, EightPic, NinePic];
export const CarouselCard = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} dynamicHeight={true}>
      {images.map((image, idx) => {
        return (
          <div>
            <Image src={image} alt="Picture of the artist" placeholder="blur" />
            <p className="legend">Artist {idx + 1}</p>
          </div>
        );
      })}
    </Carousel>
  );
};
