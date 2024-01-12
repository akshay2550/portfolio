import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white lg:py-24">
      <div className="py-0 px-3 my-0 mx-auto max-w-4xl">
        <div className="flex flex-col">
          <div className="text-center md:text-left">
            <p className="text-blue-500 text-lg font-bold mb-4">CONTACT</p>
            <h3 className="text-neutral-800 font-bold text-2xl">
              Don't be shy! Hit me up! 👇
            </h3>
          </div>
          <div className="flex flex-col gap-10 justify-center text-center md:text-left flex-wrap mt-12 md:flex-row md:gap-24 md:justify-normal">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <span className="items-center bg-white rounded-[50%] text-blue-500 shadow-[0_0_10px_rgba(0,0,0,0.1)] w-14 h-14 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-map-search"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-neutral-800 font-bold text-lg">Location</h3>
                <p className="text-gray-500 text-lg hover:text-blue-500 hover:cursor-pointer">
                  Goa, India
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <span className="items-center bg-white rounded-[50%] text-blue-500 shadow-[0_0_10px_rgba(0,0,0,0.1)] w-14 h-14 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-neutral-800 font-bold text-lg">Mail</h3>
                <p className="text-gray-500 text-lg hover:text-blue-500 hover:cursor-pointer">
                  akshay.shirwaikar@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
