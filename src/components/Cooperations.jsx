import React from "react";

function Coorperations() {
  return (
    <>
      <section className="text-center mt-16 md:mt-24 xl:mt-36 px-4 sm:px-6 md:px-8">
        <div className="space-y-6">
          <h2 className="text-fright-textColor opacity-75 md:text-lg lg:text-[1.3rem] px-10">
            Those who cooperate with us and help us scare our guests
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 sm:gap-8 lg:gap-20 xl:gap-24 bg-fright-darkViolet p-2 rounded-lg
            sm:bg-transparent">
            <img src="Images/adams-family.webp" alt="adams-family" className="w-20 h-20 md:w-28 md:h-28 object-contain"/>
            <img src="Images/laboratory.webp" alt="laboratory" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
            <img src="Images/ghostbusters.webp" alt="ghostbusters" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
            <img src="Images/transylvania.webp" alt="transylvania" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
            <img src="Images/tree-friends.webp" alt="tree-friends" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Coorperations;