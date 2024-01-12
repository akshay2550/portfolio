import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-neutral-50 tablet:h-screen h-auto py-24 flex flex-col relative w-full"
    >
      <div className="my-0 mx-auto max-w-screen-xl py-0 tablet:px-10 px-4">
        <div className="flex items-center tablet:gap-9 relative justify-center tablet:h-[680px] flex-col h-auto tablet:text-left text-center gap-8">
          <div className="flex items-center tablet:gap-10 gap-8 tablet:text-left text-center relative justify-center tablet:flex-row flex-col-reverse h-auto">
            <div className="flex flex-col relative max-w-xl gap-2">
              <h1 className="text-neutral-800 font-bold text-4xl leading-tight bigPhone:text-6xl">
                Full Stack MERN Developer
              </h1>
              <div className="bigPhone:h-14 bigPhone:w-14 w-11 h-11 absolute">
                <Image
                  src="https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png"
                  alt="wave"
                  fill
                  className="tablet:!left-[330px] tablet:!top-16 bigPhone:!left-[450px] bigPhone:!top-16 !left-[265px] !top-11 phone:!left-[290px]"
                />
              </div>
              <p className="text-gray-500 text-lg font-normal leading-relaxed tablet:mb-0 mb-14">
                Hi, I'm Akshay Shirwaikar. A passionate Full Stack MERN
                Developer based in Goa, India. 📍
              </p>
              <span className="cursor-pointer flex tablet:gap-3 tablet:mx-0 tablet:my-5 justify-center tablet:justify-start gap-4 mb-10 -mt-6">
                <Link
                  href="https://www.linkedin.com/in/akshay-shirwaikar"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-linkedin hover:text-blue-500 transition-all duration-200"
                  >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </Link>
                <Link
                  href="https://github.com/akshay2550"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github hover:text-blue-500 transition-all duration-200"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </Link>
              </span>
            </div>
            <div className="bg-[url('/hero.jpg')] h-72 w-72 tablet:h-80 tablet:w-80 bg-cover animate-[morph_8s_ease-in-out_infinite] border-gray-950 border-2 bg-center"></div>
          </div>
          <div className="items-center flex tablet:absolute bottom-0 left-0 text-lg static tablet:flex-row flex-col">
            <p className="text-gray-600 font-normal tablet:border-b-0 tablet:border-r-2 border-b-2 border-r-gray-600 border-opacity-50 tablet:pr-6 tablet:mr-16 mr-0 pr-0 tablet:pb-0 tablet:mb-0 pb-2 mb-4">
              Tech Stack
            </p>
            <div>
              <ul className="flex flex-wrap gap-6 justify-center">
                <li className="cursor-pointer">
                  <Image
                    src="https://skillicons.dev/icons?i=html,css"
                    alt="skill-icon"
                    width={100}
                    height={75}
                    className="transition-all duration-500 ease-in-out hover:-translate-y-3"
                  />
                </li>
                <li className="cursor-pointer">
                  <Image
                    src="https://skillicons.dev/icons?i=js,ts"
                    alt="skill-icon"
                    width={100}
                    height={75}
                    className="transition-all duration-500 ease-in-out hover:-translate-y-3"
                  />
                </li>
                <li className="cursor-pointer">
                  <Image
                    src="https://skillicons.dev/icons?i=react,next"
                    alt="skill-icon"
                    width={100}
                    height={75}
                    className="transition-all duration-500 ease-in-out hover:-translate-y-3"
                  />
                </li>
                <li className="cursor-pointer">
                  <Image
                    src="https://skillicons.dev/icons?i=nodejs,mongo"
                    alt="skill-icon"
                    width={100}
                    height={75}
                    className="transition-all duration-500 ease-in-out hover:-translate-y-3"
                  />
                </li>

                <li className="cursor-pointer">
                  <Image
                    src="https://skillicons.dev/icons?i=tailwind,scss"
                    alt="skill-icon"
                    width={100}
                    height={75}
                    className="transition-all duration-500 ease-in-out hover:-translate-y-3"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
