import Image from "next/image";
import heroPic from "../public/images/1.png";
import TwoPic from "../public/images/2.png";
import FourPic from "../public/images/4.png";
import ContactPic from "../public/images/47.png";

import { CarouselCard } from "./Carousal";

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
      <section id="four">
        <Image
          src={FourPic}
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </section>{" "}
      <section
        id="three"
        ref={campaignRef}
        style={{ background: "#FE9677", paddingTop: "2%", marginTop: "2%" }}
      >
        <CarouselCard />
      </section>{" "}
      <section id="six" ref={contactRef}>
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
