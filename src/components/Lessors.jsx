import React from "react";

const lessors = [
  {
    id: "1",
    img: "Images/ghost-img.webp",
    name: "Ghost",
    icon: "Images/house-icon.webp",
    quantity: "666 houses",
  },

  {
    id: "2",
    img: "Images/zombie-img.webp",
    name: "Mr. Zombie",
    icon: "Images/grave-icon.webp",
    quantity: "24 graves",
  },

  {
    id: "3",
    img: "Images/dracula-img.webp",
    name: "Dracula",
    icon: "Images/bat-icon.webp",
    quantity: "not defined",
  },

  {
    id: "4",
    img: "Images/mummy-img.webp",
    name: "Mummy",
    icon: "Images/coffin-icon.webp",
    quantity: "578 conffins",
  },
];

function Lerrors({ handleNotAvailable }) {
  return (
    <>
      <section
        id="lessors"
        className="mt-16 lg:mt-28 text-center px-4 sm:px-6 md:px-8 py-4 lg:px-12 2xl:max-w-[100rem] mx-auto scroll-m-32"
      >
        <div className="">
          <p className="text-fright-darkPink uppercase font-semibold">
            Looking for a thrill?
          </p>

          <h1 className="text-[clamp(2rem,6vw,4.5rem)] text-fright-white uppercase font-frightmare">
            Most popular lessors
          </h1>

          <p className="text-fright-textColor max-w-[23.125rem] w-full mx-auto opacity-75">
            Any lover of fear will find something here to immerse themselves in
            the spooky atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 xl:gap-12 my-8">
          {lessors.map((lessors, id) => (
            <div
              key={id}
              className="bg-fright-darkViolet bg-opacity-60 p-4 md:bg-transparent rounded-md sm:rounded-lg"
            >
              <img
                src={lessors.img}
                alt={lessors.name}
                className="w-44 h-44 sm:w-52 sm:h-52 md:w-36 md:h-36 lg:w-64 lg:h-64 xl:w-80 xl:h-80 object-contain"
              />

              <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] xl:text-[3rem] font-frightmare text-fright-white uppercase mt-4 md:mt-8 lg:mt-12">
                {lessors.name}
              </h2>

              <div className="flex justify-center items-center gap-2 mt-1 md:mt-2 lg:mt-4">
                <img
                  src={lessors.icon}
                  alt="icon"
                  className="w-6 h-6 object-contain"
                />

                <span className="text-sm sm:text-base lg:text-lg text-fright-textColor">
                  {lessors.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center gap-4 md:gap-8">
          <p className="text-fright-textColor max-w-[23.125rem] w-full mx-auto opacity-75">
            Want to be one of them? Join us now for free! Your one drop of 🩸 is
            enough for us.
          </p>

          <button
            onClick={handleNotAvailable}
            className="flex items-center gap-2 p-3 lg:py-3 lg:px-6 rounded-xl lg:rounded-2xl border border-fright-lightGradientPink bg-gradient-to-r 
            from-fright-lightGradientPink to-fright-darkGradientPink transition-shadow duration-300 hover:shadow-[0_0_0.8rem] 
            hover:shadow-fright-lightGradientPink text-sm lg:text-base text-fright-babyPink font-bold"
          >
            Become a host
            <img src="Images/user.webp" alt="user" className="w-4 lg:w-auto" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Lerrors;
