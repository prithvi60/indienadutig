import Image from "next/image";
import heroPic from "../public/images/1.png";
// artists
import TwoPic from "../public/images/2.png";
import FourPic from "../public/images/4.png";
import FivePic from "../public/images/5.png";
import SixPic from "../public/images/6.png";
import SevenPic from "../public/images/7.png";
import EightPic from "../public/images/8.png";
import NinePic from "../public/images/9.png";
import TenPic from "../public/images/10.png";
import ElevenPic from "../public/images/11.png";
import TwelvePic from "../public/images/12.png";
import ThirteenPic from "../public/images/13.png";
import FourteenPic from "../public/images/14.png";
import FifteenPic from "../public/images/15.png";
// Summit
import SixteenPic from "../public/images/16.png";
import SeventeenPic from "../public/images/17.png";
import EighteenPic from "../public/images/18.png";
import NineteenPic from "../public/images/19.png";
import TwentyPic from "../public/images/20.png";
// Leadup
import ThirtysixPic from "../public/images/36.png";
// import ThirtysevenPic from "../public/images/37.png";
// Audience
import ThirtyPic from "../public/images/30.png";

import ThirtyonePic from "../public/images/31.png";
import ThirtytwoPic from "../public/images/32.png";
import ThirtythreePic from "../public/images/33.png";
import ThirtyfourPic from "../public/images/34.png";
import ThirtyfivePic from "../public/images/35.png";
// Branding spaces
import TwentyonePic from "../public/images/21.png";
import TwentytwoPic from "../public/images/22.png";
import TwentythreePic from "../public/images/23.png";
import TwentyfourPic from "../public/images/24.png";
import TwentyfivePic from "../public/images/25.png";
import TwentysixPic from "../public/images/26.png";
import TwentysevenPic from "../public/images/27.png";
import TwentyeightPic from "../public/images/28.png";
import TwentyninePic from "../public/images/29.png";
// Sponsorship
import ThirtysevenPic from "../public/images/37.png";
import ThirtyeightPic from "../public/images/38.png";
// About tigom
import FortytwoPic from "../public/images/42.png";
import FortythreePic from "../public/images/43.png";
import FortyfourPic from "../public/images/44.png";
import FortyfivePic from "../public/images/45.png";
import FortysixPic from "../public/images/46.png";
// Contact
import ContactPic from "../public/images/47.png";
// Main Event
import EventPic from "../public/images/3.png";

import { CarouselCard } from "./Carousal";
// images for sliders
const artists = [
  FourPic,
  FivePic,
  SixPic,
  SevenPic,
  EightPic,
  NinePic,
  TenPic,
  ElevenPic,
  TwelvePic,
  ThirteenPic,
  FourteenPic,
  FifteenPic,
];
const summit = [SixteenPic, SeventeenPic, EighteenPic, NineteenPic, TwentyPic];
const audience = [
  ThirtyPic,
  ThirtyonePic,
  ThirtytwoPic,
  ThirtythreePic,
  ThirtyfourPic,
];
const branding = [
  TwentyonePic,
  TwentytwoPic,
  TwentythreePic,
  TwentyfourPic,
  TwentyfivePic,
  TwentysixPic,
  TwentysevenPic,
  TwentyeightPic,
  TwentyninePic,
  ThirtyPic,
];
const tigom = [
  FortytwoPic,
  FortythreePic,
  FortyfourPic,
  FortyfivePic,
  FortysixPic,
];
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
export default function Main({ videoRef, eventRef, campaignRef, contactRef }) {
  return (
    <section class="text-gray-600 body-font" style={{ zIndex: 100 }}>
      <section id="hero" ref={videoRef}>
        <Image
          src={heroPic}
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </section>
      <section id="two" ref={eventRef}>
        <Image
          src={TwoPic}
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </section>{" "}
      {/* <section id="four">
        <Image
          src={FourPic}
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </section>{" "} */}
      <section
        id="artists"
        ref={campaignRef}
        style={{ background: "#FE9677", paddingTop: "2%", marginTop: "2%" }}
      >
        <CarouselCard images={artists} />
      </section>{" "}
      <section id="mian_event">
        <Image
          src={EventPic}
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </section>{" "}
      <section
        id="summit"
        // ref={campaignRef}
        style={{ background: "#FE9677", paddingTop: "2%", marginTop: "2%" }}
      >
        <CarouselCard images={summit} />
      </section>{" "}
      <section id="leadup">
        <Image
          src={ThirtyfivePic}
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </section>{" "}
      <section id="leadup2">
        <Image
          src={ThirtysixPic}
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </section>{" "}
      <section
        id="audienceprofile"
        // ref={campaignRef}
        style={{ background: "#FE9677", paddingTop: "2%", marginTop: "2%" }}
      >
        <CarouselCard images={audience} />
      </section>{" "}
      <section
        id="branding"
        // ref={campaignRef}
        style={{ background: "#FE9677", paddingTop: "2%", marginTop: "2%" }}
      >
        <CarouselCard images={branding} />
      </section>{" "}
      <section id="sponsorship1">
        <Image
          src={ThirtysevenPic}
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </section>{" "}
      <section id="sponsorship2">
        <Image
          src={ThirtyeightPic}
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </section>{" "}
      <section
        id="tigom"
        // ref={campaignRef}
        style={{ background: "#FE9677", paddingTop: "2%", marginTop: "2%" }}
      >
        <CarouselCard images={tigom} />
      </section>{" "}
      <section id="contact" ref={contactRef}>
        <Image
          src={ContactPic}
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </section>{" "}
    </section>
  );
}
