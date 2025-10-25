import React from "react";

function Movies({ handleNotAvailable }) {
  return (
    <>
      <section
        className="relative bg-general-bg-pattern bg-cover bg-no-repeat bg-center mt-16 
        md:mt-20 xl:mt-28 mx-auto 2xl:max-w-[100rem]"
      >
        <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-[50rem] lg:max-w-[75rem]">
          <div
            className="flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-2 bg-fright-darkViolet p-4 lg:p-8 rounded-md md:rounded-[2.5rem]
            bg-opacity-80"
          >
            <div className="flex justify-center lg:justify-normal gap-3 md:gap-4">
              <img
                src="Images/skeleton-cinema.webp"
                alt="ghost"
                className="max-w-80 w-full h-72 sm:h-96 lg:h-auto rounded-md md:rounded-[2.5rem] object-cover"
              />
              <img
                src="Images/two-ghosts-cinema.webp"
                alt="volcano"
                className="max-w-80 w-full h-72 sm:h-96 lg:h-auto rounded-md md:rounded-[2.5rem] object-cover"
              />
            </div>

            <div
              className="flex items-center justify-center flex-col text-center lg:max-w-[26.25rem] xl:max-w-[29.25rem] w-full p-4 
              space-y-2 md:space-y-4"
            >
              <p className="text-fright-darkPink uppercase font-semibold">
                Looking for a thrill?
              </p>

              <h2 className="text-[clamp(1.5rem,6vw,4rem)] text-fright-white uppercase font-frightmare leading-[1]">
                Night horror movies
              </h2>

              <p className="opacity-75 text-fright-textColor sm:px-6 lg:px-12">
                Any horror lover will find something to immerse themselves in
                the spooky atmosphere.
              </p>

              <div className="flex md:items-cente justify-center flex-wrap gap-3 lg:gap-5 text-fright-whiteshColor pt-4 md:pt-10">
                <button
                  onClick={handleNotAvailable}
                  className="flex items-center gap-2 p-2 lg:py-3 lg:px-6 rounded-xl lg:rounded-2xl border border-fright-lightGradientPink bg-gradient-to-r 
                  from-fright-lightGradientPink to-fright-darkGradientPink transition-shadow duration-300 hover:shadow-[0_0_0.8rem] 
                    hover:shadow-fright-lightGradientPink text-sm lg:text-base text-fright-babyPink font-bold"
                >
                  Become a host
                  <img
                    src="Images/user.webp"
                    alt="user"
                    className="w-4 lg:w-auto"
                  />
                </button>

                <div className="btn-gradient-border transition-shadow duration-300 hover:shadow-[0_0_1rem] hover:shadow-fright-darkGradientVioled">
                  <button
                    onClick={handleNotAvailable}
                    className="flex items-center btn-inner gap-2 lg:gap-3 text-sm lg:text-base font-bold"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-0 bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-fright-bgColor to-transparent" />
      </section>
    </>
  );
}

export default Movies;
