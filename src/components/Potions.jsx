import React from "react";

const potions = [
  {
    id: "1",
    img: "Images/elixir-fire.webp",
    title: "Elixir of fire",
    text: "Burning veins alight, fury awakens. Tongues of flame echo deep within bones.",
    price: "$16",
    type: "/elixir",
    button: "Images/bag.webp",
  },

  {
    id: "2",
    img: "Images/potion-life.webp",
    title: "Potion of life",
    text: "Whispers bloom in roots, breath returning. Vessels renew under dawn’s gentle touch.",
    price: "$88",
    type: "/potion",
    button: "Images/bag.webp",
  },

  {
    id: "3",
    img: "Images/potion-ice.webp",
    title: "Potion of cold",
    text: "Frozen silence crawls, starlight shivers. Frosted air bites through marrow and soul.",
    price: "$59",
    type: "/potion",
    button: "Images/bag.webp",
  },

  {
    id: "4",
    img: "Images/potion-energy.webp",
    title: "Potion of energy",
    text: "Lightning hums beneath, surging focus. Muscles tighten with purpose and motion.",
    price: "$53",
    type: "/potion",
    button: "Images/bag.webp",
  },
];

function Potions({ handleNotAvailable }) {
  return (
    <>
      <section
        id="potions"
        className="mx-auto px-4 sm:px-6 md:px-8 max-w-[60rem] lg:max-w-[85rem] mt-16 lg:mt-28 scroll-m-32"
      >
        <div
          className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 lg:gap-5 bg-fright-darkViolet p-4 lg:p-8 rounded-md md:rounded-[2.5rem]
            bg-opacity-80"
        >
          <div
            className="flex items-center text-center lg:text-left lg:items-start flex-col lg:max-w-[20.25rem] w-full p-4 
            space-y-2 md:space-y-4"
          >
            <img src="Images/Logo.webp" alt="logo" className="w-28 md:w-32" />

            <h2 className="text-[clamp(1.5rem,6vw,2.5rem)] text-fright-white uppercase font-frightmare leading-[1]">
              want a better chance of survival?
            </h2>

            <p className="opacity-75 text-fright-textColor">
              Go to our store and equip yourself with the right concoctions.
            </p>

            <div className="pt-4 md:pt-10 text-fright-whiteshColor">
              <div className="btn-gradient-border transition-shadow duration-300 hover:shadow-[0_0_1rem] hover:shadow-fright-darkGradientVioled">
                <button
                  onClick={handleNotAvailable}
                  className="flex items-center btn-inner gap-2 lg:gap-3 text-sm lg:text-base font-bold"
                >
                  Check more stuff
                </button>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 xl:gap-6">
            {potions.map((potion, id) => (
              <div
                key={id}
                className="bg-fright-deepVioletShade p-4 flex flex-col items-center lg:items-start xl:flex-row xl:items-center gap-4 md:rounded-[2.5rem] 
                rounded-lg text-center xl:text-left"
              >
                <div className="">
                  <img src={potion.img} alt={potion.title} className="w-24" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-2xl lg:text-[2rem] font-frightmare text-fright-white uppercase">
                    {potion.title}
                  </h3>

                  <p className="text-sm text-fright-textColor max-w-[23.125rem] w-full mx-auto opacity-75">
                    {potion.text}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h4 className="text-fright-purple font-semibold text-lg lg:text-2xl">
                        {potion.price}
                      </h4>

                      <span className="text-sm sm:text-base text-fright-textColor max-w-[23.125rem] w-full mx-auto opacity-75">
                        {potion.type}
                      </span>
                    </div>

                    <button
                      onClick={handleNotAvailable}
                      className="flex items-center p-2 lg:p-3 rounded-xl lg:rounded-2xl border border-fright-lightGradientPink bg-gradient-to-r 
                      from-fright-lightGradientPink to-fright-darkGradientPink transition-shadow duration-300 hover:shadow-[0_0_0.8rem] 
                      hover:shadow-fright-lightGradientPink"
                    >
                      <img src={potion.button} alt="bag-icon" className="" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Potions;
