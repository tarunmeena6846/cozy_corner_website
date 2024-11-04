"use client";
import Image from "next/image";
import { Index } from "./components/Nav";
import { Hero } from "./components/Hero/page";
import { About } from "./components/AboutUs/Index";
import { Service } from "./components/Services/Service";
import { Review } from "./components/Review/Review";
import MapEmbed from "./components/Map/Map";
import { Gallery } from "./components/Gallery/Gallery";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Service />
      <Review />
      <Gallery />
      <MapEmbed />
    </div>
  );
}
