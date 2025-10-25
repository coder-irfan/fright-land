import React from "react";

const places = [
  {
    id: '1',
    img: 'Images/chamber-of-impure.webp',
    title: 'Chamber of impure magic',
    visitorsQuantity: '15,784 visitors',
    visitorsImages: 'Images/visitors-1.webp',
    reviewsQuanity: '7,892 reviews',
    reviewsStars: 'Images/5-stars-icon.webp', 
  },

  {
    id: '2',
    img: 'Images/old-grave.webp',
    title: 'old grave',
    visitorsQuantity: '10,231 visitors',
    visitorsImages: 'Images/visitors-2.webp',
    reviewsQuanity: '4,123 reviews',
    reviewsStars: 'Images/4-stars-icon.webp', 
  },

  {
    id: '3',
    img: 'Images/hangman-hunt.webp',
    title: "Dead hangman's hut",
    visitorsQuantity: '6,872 visitors',
    visitorsImages: 'Images/visitors-3.webp',
    reviewsQuanity: '7,043 reviews',
    reviewsStars: 'Images/4-stars-icon.webp', 
  },

  {
    id: '4',
    img: 'Images/zombieland.webp',
    title: 'Zombieland',
    visitorsQuantity: '17,031 visitors',
    visitorsImages: 'Images/visitors-4.webp',
    reviewsQuanity: '2,213 reviews',
    reviewsStars: 'Images/5-stars-icon.webp', 
  },
]

function LovedPlaces() {
  return (
    <>
      <section id="places" className="px-4 sm:px-6 md:px-8 mt-16 md:mt-20 xl:mt-28 2xl:max-w-[100rem] 2xl:mx-auto scroll-m-32">
        <div className="text-center">
          <p className="text-fright-darkPink uppercase font-semibold">
            Looking for a thrill?
          </p>

          <h2 className="text-[clamp(2rem,6vw,4.5rem)] text-fright-white uppercase font-frightmare">
            Places that guests love
          </h2>

          <p className="text-fright-textColor max-w-[23.125rem] w-full mx-auto opacity-75">
            Any horror lover will find something to immerse themselves in the spooky atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-4 place-items-center lg:max-w-[1000px] xl:max-w-full
          mx-auto mt-6 md:mt-10">
          {places.map((place, id) => (
            <div key={id} className={`bg-fright-darkViolet p-4 lg:p-8 h-full max-h-[542px] rounded-md lg:rounded-[2.5rem] space-y-4 lg:space-y-10
              bg-opacity-80 ${place.id === '2' ? 'xl:mt-16' : place.id === '4' ? 'xl:mt-16' : ''}`}>
              <div className="relative">
                <img 
                  src={place.img}
                  alt={place.title} 
                  className={`xl:w-64 xl:h-64 object-cover rounded-md lg:rounded-[1.7rem] 
                  ${place.id === '2' ? 'object-left' : place.id === '4' ? 'object-left' : ''}`}
                />

                <img 
                  src="Images/PTGL-pumpkin.webp"
                  alt="" 
                  className="absolute w-12 sm:w-auto -top-8 -left-6 sm:-top-10 sm:-left-10 lg:-top-16 lg:-left-12 -rotate-[10deg]"  
                />
              </div>

              <div className="xl:max-w-64 w-full text-center xl:text-left">
                <h2 className="text-3xl lg:text-[2.2rem] xl:text-[2.5rem] font-frightmare text-fright-white uppercase">
                  {place.title}
                </h2>

                <div className="flex justify-between items-center mt-4 lg:mt-10">
                  <div className="">
                    <span className="text-sm text-fright-textColor opacity-75">
                      {place.visitorsQuantity}
                    </span>

                    <img 
                      src={place.visitorsImages}
                      alt="visitors" 
                      className=""
                    />
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-sm text-fright-textColor opacity-75">
                      {place.reviewsQuanity}
                    </span>

                    <img 
                      src={place.reviewsStars}
                      alt="visitors" 
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default LovedPlaces;