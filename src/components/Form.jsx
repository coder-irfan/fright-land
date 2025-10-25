import React from "react";

function Form({ handleNotAvailable }) {
  return (
    <>
      <section className=" px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 mt-12 sm:-mt-10">
        <form className="flex flex-col lg:flex-row lg:items-center max-w-[46.875rem] mx-auto lg:max-w-full lg:mx-0 justify-around">
          <div
            className="relative flex flex-col lg:flex-row gap-6 lg:gap-2 lg:items-center p-6 bg-fright-darkViolet bg-opacity-40 lg:border-[0.5rem] rounded-md
            sm:rounded-[2.5rem] lg:border-fright-lightGradientViolet"
          >
            <img
              src="Images/three-pumkins.webp"
              alt="pumkins"
              className="absolute w-28 -top-10 md:left-16 lg:left-32 sm:w-36"
            />

            <div className="flex flex-col gap-2">
              <label className="text-fright-lightViolet text-[0.935rem]">
                Location
              </label>
              <div className="relative w-full lg:max-w-md">
                <input
                  type="text"
                  className="py-3 px-10 xl:py-4 xl:px-10 rounded-xl outline-none caret-transparent w-full xl:w-[23.5rem] placeholder:text-fright-darkViolet"
                  placeholder="Old castle"
                  readOnly
                />
                <img
                  src="Images/location.webp"
                  alt=""
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-fright-lightViolet text-[0.935rem]">
                Date
              </label>
              <input
                type="datetime-local"
                className="p-3 xl:p-4 rounded-xl border-none focus:outline focus:outline-fright-darkGradientYellow cursor-pointer"
                required
              />
            </div>

            <div className="flex justify-between lg:justify-start items-center">
              <div className="flex flex-col gap-2">
                <label className="text-fright-lightViolet text-[0.935rem]">
                  People
                </label>
                <input
                  type="number"
                  className="p-3 xl:p-4 rounded-xl w-20 focus:outline focus:outline-fright-darkGradientYellow cursor-pointer"
                  min={1}
                  max={99}
                  placeholder="2"
                  required
                />
              </div>

              <div className="flex flex-col ml-2 gap-2">
                <label className="text-fright-lightViolet text-[0.935rem]">
                  Level of scariness
                </label>
                <div className="flex items-center p-1 xl:p-2 gap-2">
                  <img src="Images/bat-icon.webp" alt="bat" className="" />
                  <img
                    src="Images/pumkin-icon.webp"
                    alt="pumkin"
                    className=""
                  />
                  <img src="Images/ghost-icon.webp" alt="ghost" className="" />
                </div>
              </div>
            </div>

            <div className="relative bg-fright-darkViolet ml-6 xl:ml-16 self-end lg:self-auto">
              <div
                className="w-36 h-14 xl:w-[11.25rem] lg:w-20 xl:h-24 lg:h-16 bg-gradient-to-r from-fright-lightGradientYellow to-fright-darkGradientYellow 
                flex justify-center items-center shadow-[inset_0_0_8px_#4C2C0A] hover:shadow-[0_0_20px_#E4B02A] hover:from-yellow-400 hover:to-yellow-500
                transition-all ease-in-out duration-300 shadow-fright-bgColor rounded-2xl cursor-pointer"
              >
                <button
                  onClick={handleNotAvailable}
                  className="text-lg xl:text-[27px] font-bold text-fright-white"
                >
                  Search
                </button>
              </div>
              <img
                src="Images/branches.webp"
                alt="pumkins"
                className="absolute -top-2 lg:-top-3 xl:-top-6 -left-4 w-8 xl:w-16 lg:w-10 pointer-events-none"
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Form;
