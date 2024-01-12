"use client";

import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
} from "@/components/index";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </main>
  );
}
