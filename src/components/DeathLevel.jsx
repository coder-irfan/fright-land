import React from "react";

function DeathLevel() {
  return (
    <>
      <section id="death" className="relative bg-death-level-pattern bg-cover bg-no-repeat bg-center px-4 sm:px-6 md:px-8 py-4 lg:px-12 
        2xl:max-w-[100rem] mx-auto mt-16 sm:mt-20 md:mt-28 lg:mt-32 scroll-m-32">
        <div className="relative z-10 max-w-[87.5rem] mx-auto md:min-h-[55rem] space-y-8 md:space-y-12">
          <div className="text-center max-w-[42.5rem] mx-auto space-y-3">
            <p className="text-fright-darkPink uppercase font-semibold">
              Looking for a thrill?
            </p>

            <h2 className="text-[clamp(1.8rem,6vw,4.5rem)] text-fright-white uppercase font-frightmare leading-[1]">
              choose how badly you want to die of fear
            </h2>

            <p className="text-fright-textColor max-w-[23.125rem] w-full mx-auto opacity-75">
              Or have you already died of fear with us? Choose your own tombstone ☠️.
            </p>
          </div>

          <div className="flex justify-center items-end gap-6 sm:gap-12 md:gap-16 lg:gap-32 xl:gap-36">
            <img src="Images/grave-sm.webp" alt="" className="max-w-24 sm:max-w-32 md:max-w-36 lg:max-w-40 xl:max-w-auto"/>
            <img src="Images/grave-md.webp" alt="" className="max-w-24 sm:max-w-36 md:max-w-40 lg:max-w-44 xl:max-w-auto"/>
            <img src="Images/grave-xl.webp" alt="" className="max-w-24 sm:max-w-44 md:max-w-52 lg:max-w-56 xl:max-w-auto"/>
          </div> 

          <div className="flex justify-center items-centers">
            <input type="range" className="max-w-72 sm:max-w-[28.125rem] md:max-w-[34.375rem] lg:max-w-[50rem] w-full accent-fright-darkPink cursor-pointer"/>
          </div>

          <div className="flex justify-center sm:items-center gap-4 sm:gap-6 md:gap-12 lg:gap-14 xl:gap-20">
            <div className="max-w-72 text-left">
              <h3 className="text-xl sm:text-3xl lg:text-[2.2rem] font-frightmare text-fright-white uppercase">
                smell of fear
              </h3>
              <p className="text-[0.75rem] sm:text-base text-fright-textColor max-w-[23.125rem] w-full mx-auto opacity-75">
                Deep whispers crawl beneath broken silence, where shadows breathe. No one escapes.
              </p>
            </div>
            <div className="max-w-72 text-center">
              <h3 className="text-xl sm:text-3xl lg:text-[2.2rem] font-frightmare text-fright-white uppercase">
                scared stiff
              </h3>
              <p className="text-[0.75rem] sm:text-base text-fright-textColor max-w-[23.125rem] w-full mx-auto opacity-75">
                Blood trickles slowly, dragging secrets into the mist. Eyes remain watching.
              </p>
            </div>
            <div className="max-w-72 text-right">
              <h3 className="text-xl sm:text-3xl lg:text-[2.2rem] font-frightmare text-fright-white uppercase">
                deadly creepy
              </h3>
              <p className="text-[0.75rem] sm:text-base text-fright-textColor max-w-[23.125rem] w-full mx-auto opacity-75">
                They whisper beneath, digging through silence. Shadows in corners wait, still breathing.
              </p>
            </div>
          </div>

          <div className="flex md:items-center justify-center pt-2 md:pt-6">
            <button className="flex items-center gap-2 p-2 lg:py-3 lg:px-6 rounded-xl lg:rounded-2xl border border-fright-lightGradientPink bg-gradient-to-r 
              from-fright-lightGradientPink to-fright-darkGradientPink transition-shadow duration-300 hover:shadow-[0_0_0.8rem] 
                hover:shadow-fright-lightGradientPink text-sm lg:text-base text-fright-babyPink font-bold">
                Become a host
              <img src="Images/user.webp" alt="user" className="w-4 lg:w-auto"/>
            </button>
          </div> 
        </div>
        <div className="absolute z-0 bottom-0 left-0 right-0 h-full bg-fright-bgColor bg-opacity-80" />
      </section>
    </>
  )
}

export default DeathLevel;
