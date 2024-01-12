import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white lg:py-28 py-16">
      <div className="my-0 mx-auto max-w-7xl px-3">
        <div className="flex flex-col items-center justify-center text-center lg:text-left lg:flex-row lg:gap-16">
          <div className="relative w-5/6 h-52 mb-7 lg:mb-0 phone:w-11/12 phone:h-72 sm:w-3/4 md:w-1/2 lg:w-96 lg:h-72">
            {/* <Image
              src="https://www.stefantopalovic.com/static/media/working-emoji.c5325f52b5be329995a5.png"
              alt="emoji"
              fill
              className="z-10"
            /> */}
            <Image
              src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
              alt="mee"
              fill
              className="rounded-xl"
            />
          </div>
          <div className="pr-0 max-w-lg lg:max-w-xl">
            <h3 className="text-blue-500 font-bold mb-2 text-lg">ABOUT ME</h3>
            <h4 className="text-neutral-800 font-bold text-2xl mb-4 leading-snug">
              A dedicated Full Stack Developer <br /> based in Goa, India 📍
            </h4>
            <p className="text-gray-500 text-base leading-normal font-normal">
              As a Full Stack Developer, I possess an impressive arsenal of
              skills in HTML, CSS, JavaScript, TypeScript, React, Tailwind,
              Nodejs, SQL and MongoDb. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
