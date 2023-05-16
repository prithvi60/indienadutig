import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
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
        title="Home: nine4"
        description="Welcome to The Internet Generation!"
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>TIG</title>
        <link rel="icon" href="/favicon.jpg" />
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
      <Footer />
    </div>
  );
}
