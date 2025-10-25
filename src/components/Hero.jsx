import React from "react";

const cards = [
  {
    id: '1',
    img: 'Images/abandoned-room.webp',
    title: 'old abandoned bedroom',
    text: 'Watch out for ghosts that may be roaming around you. Be careful!',
    price: '$325',
    duration: '/night',
    star: 'Images/empty-star.webp',
    rate: '4.95'
  },

  {
    id: '2',
    img: 'Images/cozy-space.webp',
    title: 'Cellar, cozy space',
    text: 'This cellar is known for its rich history, with plenty of spooky tales and legends.',
    price: '$125',
    duration: '/night',
    star: 'Images/filled-star.webp',
    rate: '5.0'
  },
]

function Hero() {
  return (
    <>
      <section id="home" className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center px-4 sm:px-6 md:px-8 py-4 lg:px-12 mt-16 lg:mt-28
        2xl:max-w-[100rem] mx-auto scroll-m-32">
        <div className="relative z-10 max-w-[87.5rem] mx-auto min-h-[44rem]">
          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-6">
            {cards.map((card, id) => (
              <div key={id} className={`max-w-[28.125rem] mx-auto sm:max-w-[30rem] sm:mx-0 w-full flex flex-col-reverse sm:flex-row gap-4 sm:gap-6 
                items-center bg-fright-darkViolet bg-opacity-85 sm:bg-opacity-80 sm:absolute p-6 rounded-md sm:rounded-[2.5rem]
                ${card.id === '1' ? 'top-24' : card.id === '2' ? 'top-80 right-0' : ''}`}>
                <img 
                  src={card.img}
                  alt={card.title} 
                  className="rounded-md sm:rounded-3xl sm:w-32 h-32 object-cover max-w-[25rem] w-full"
                />

                <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
                  <p className="font-frightmare text-2xl md:text-[1.7rem] xl:text-[2rem] uppercase text-fright-white">
                    {card.title}
                  </p>

                  <p className="text-fright-textColor text-sm opacity-75">
                    {card.text}
                  </p>

                  <div className="text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-fright-purple font-semibold text-lg lg:text-2xl">
                        {card.price}
                      </span>

                      <p className="text-sm text-fright-textColor">
                        {card.duration}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 bg-fright-lightViolet py-1.5 px-3 rounded-3xl">
                      <img 
                        src={card.star}
                        alt="star"
                        className=""
                      />

                      <span className="text-fright-deepViolet">
                        {card.rate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>  
            ))}
          </div>
        </div>
        <div className="absolute z-0 bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-fright-bgColor to-transparent" />
      </section>
    </>
  )
}

export default Hero;
