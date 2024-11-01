"use client";
import Image from "next/image";
import { Index } from "./components/Nav";
import { Hero } from "./components/Hero/page";
import { About } from "./components/AboutUs/Index";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
    </div>
  );
}
