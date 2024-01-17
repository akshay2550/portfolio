import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="bg-neutral-50 py-12">
      <div className="px-8 mx-auto max-w-6xl lg:max-w-[70%] xl:max-w-[70%] 2xl:max-w-[50%]">
        <div className="flex flex-col text-center lg:text-left">
          <p className="text-blue-500 text-lg font-bold mb-2">PORTFOLIO</p>
          <h3 className="text-neutral-800 font-bold text-2xl mb-14">
            Each project is a unique piece of development 🧩
          </h3>
        </div>
        <div className="flex flex-col gap-16 h-auto justify-center items-center">
          <div className=" bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col gap-7 h-[500px] p-3 max-w-xl lg:flex-row lg:h-[320px] lg:max-w-4xl">
            <div className="w-full rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden h-auto xl:h-60 xl:self-center 2xl:h-auto">
              <Link
                href="https://beautiful-zuccutto-947888.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="h-52 sm:h-72 lg:w-[420px] 2xl:w-[500px] 2xl:h-72 lg:h-60 w-full relative">
                  <Image
                    src="/ai-summarize.png"
                    fill
                    alt="summarize"
                    className="object-cover object-top lg:object-center 2xl:object-right"
                  />
                </div>
              </Link>
            </div>
            <div className="w-full my-0 mx-auto flex flex-col h-auto justify-center text-center">
              <h3 className="text-neutral-800 font-bold text-md relative mb-4">
                OPENAI ARTICLE SUMMARIZER
              </h3>
              <p className="text-gray-500 text-base leading-normal font-medium mb-2 text-center">
                Summarize your articles with OpenAI-GPT4 with just a click of a
                button
              </p>
              <div className="flex gap-2 justify-center mt-2">
                <p className="text-center shadow-[0_0_10px_rgba(0,0,0,0.1)] py-2 px-3">
                  NextJS
                </p>
                <p className="text-center shadow-[0_0_10px_rgba(0,0,0,0.1)] py-2 px-3">
                  TypeScript
                </p>
                <p className="text-center shadow-[0_0_10px_rgba(0,0,0,0.1)] py-2 px-3">
                  Tailwind
                </p>
              </div>
              <div className="flex items-center gap-2 justify-evenly mt-8">
                <Link
                  href="https://github.com/akshay2550/article-summarizer"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-medium text-lg hover:text-blue-500 transition-all duration-200"
                >
                  Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </Link>
                <Link
                  href="https://beautiful-zuccutto-947888.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-medium text-lg hover:text-blue-500 transition-all duration-200"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className=" bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col gap-7 h-[500px] p-3 max-w-xl lg:flex-row-reverse lg:h-[320px] lg:max-w-4xl">
            <div className="w-full rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden h-auto xl:self-center xl:h-64 2xl:h-auto">
              <Link
                href="https://dropbox-clone-three-pi.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="h-48 sm:h-72 lg:h-64 2xl:h-72 2xl:w-[500px] w-full relative">
                  <Image
                    src="/dropbox-clone.png"
                    alt="dropbox"
                    fill
                    className="object-cover object-left phone:object-top lg:object-left "
                  />
                </div>
              </Link>
            </div>
            <div className="w-full my-0 mx-auto flex flex-col h-auto justify-center text-center">
              <h3 className="text-neutral-800 font-bold text-md relative mb-4">
                DROPBOX CLONE
              </h3>
              <p className="text-gray-500 text-base leading-normal font-medium mb-2 text-center">
                Enhance your personal storage with Dropbox, offering a simple
                and efficient way to upload, organize, and access files from
                anywhere.
              </p>
              <div className="flex gap-2 justify-center mt-2">
                <p className="text-center shadow-[0_0_10px_rgba(0,0,0,0.1)] py-2 px-3">
                  NextJS
                </p>
                <p className="text-center shadow-[0_0_10px_rgba(0,0,0,0.1)] py-2 px-3">
                  TypeScript
                </p>
                <p className="text-center shadow-[0_0_10px_rgba(0,0,0,0.1)] py-2 px-3">
                  Firebase
                </p>
              </div>
              <div className="flex items-center gap-2 justify-evenly mt-8">
                <Link
                  href="https://github.com/akshay2550/dropbox-clone"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-medium text-lg hover:text-blue-500 transition-all duration-200"
                >
                  Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </Link>
                <Link
                  href="https://dropbox-clone-three-pi.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-medium text-lg hover:text-blue-500 transition-all duration-200"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className=" bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col gap-7 h-[500px] p-3 max-w-xl lg:flex-row lg:h-[320px] lg:max-w-4xl">
            <div className="w-full rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden h-auto xl:h-64 xl:self-center 2xl:h-auto ">
              <Link
                href="https://showcasecars-nine.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="h-48 sm:h-72 xl:h-64 2xl:h-72 2xl:w-[500px] w-full relative">
                  <Image
                    src="/cars.png"
                    alt="cars"
                    fill
                    className="object-cover object-center 2xl:object-right"
                  />
                </div>
              </Link>
            </div>
            <div className="w-full my-0 mx-auto flex flex-col h-auto justify-center text-center">
              <h3 className="text-neutral-800 font-bold text-md relative mb-4">
                CARS HUB
              </h3>
              <p className="text-gray-500 text-base leading-normal font-medium mb-2 text-center">
                Find, book, or rent a car — quickly and easily! Streamline your
                car rental experience with our effortless booking process
              </p>
              <div className="flex gap-2 justify-center mt-2">
                <p className="text-center shadow-[0_0_10px_rgba(0,0,0,0.1)] py-2 px-3">
                  NextJS
                </p>
                <p className="text-center shadow-[0_0_10px_rgba(0,0,0,0.1)] py-2 px-3">
                  TypeScript
                </p>
                <p className="text-center shadow-[0_0_10px_rgba(0,0,0,0.1)] py-2 px-3">
                  Tailwind
                </p>
              </div>
              <div className="flex items-center gap-2 justify-evenly mt-8">
                <Link
                  href="https://github.com/akshay2550/showcasecars"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-medium text-lg hover:text-blue-500 transition-all duration-200"
                >
                  Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </Link>
                <Link
                  href="https://showcasecars-nine.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-medium text-lg hover:text-blue-500 transition-all duration-200"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
