import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
// import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import { useRef } from "react";

export default function Home() {
  const videoRef = useRef(null);
  const eventRef = useRef(null);
  const campaignRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="text-black font-eczar">
      <NextSeo
        title="Indie நாடு"
        description="
        Tamilnadu's Independent Music and Art Festival
        "
        canonical="https://indienadu.netlify.app/"
        openGraph={{
          url: "https://indienadu.netlify.app/",
        }}
      />
      <Head>
        <title>INDIE நாடு</title>
        <link rel="icon" href="/indielogo.jpg" />
      </Head>
      <Header
        videoRef={videoRef}
        eventRef={eventRef}
        contactRef={contactRef}
        campaignRef={campaignRef}
      />
      <Main
        videoRef={videoRef}
        eventRef={eventRef}
        contactRef={contactRef}
        campaignRef={campaignRef}
      />
      {/* <Footer /> */}
    </div>
  );
}
