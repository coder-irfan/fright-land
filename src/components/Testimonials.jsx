import React from "react";

const testimonials = [
  {
    id: '1',
    text: `Miracles we’ve seen across the hills and frost. This elixir saved us, fueled by magic and fire. 
      Never thought survival could taste this bright, so pure.`,
    img: 'Images/traveler.webp',
    name: 'Indiana Jones',
    job: 'Traverlar',
    rateQuentity: '4/5',
    stars: 'Images/4-stars-icon.webp'
  },

  {
    id: '2',
    text: `Chilled winds struck hard, yet hope burned in our veins. One drop of potion, and light danced through the dark.
      True power bottled by ancient hands.`,
    img: 'Images/traveler2.webp',
    name: 'Random Guy',
    job: 'Traverlar',
    rateQuentity: '5/5',
    stars: 'Images/5-stars-icon.webp'
  },
]

function Testimonials() {
  return (
    <> 
      <section id="travelers" className="relative bg-general-bg-pattern bg-cover bg-no-repeat bg-center mt-20 
        md:mt-20 xl:mt-28 max-w-[75rem] mx-auto scroll-m-32">
        <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-center gap-4 lg:gap-14 text-center lg:text-left">
          <div className="">
            <img 
              src="Images/three-ghosts.webp" 
              alt="three-ghosts" 
              className="max-w-64 sm:max-w-96 w-full lg:max-w-full"
              height={564}
              width={631}
            />
          </div>

          <div className="max-w-[550px] space-y-6 lg:space-y-10">
            <div className="max-w-[42.5rem] mx-auto space-y-3">
              <p className="text-fright-darkPink uppercase font-semibold">
                Testimonials
              </p>

              <h2 className="text-[clamp(1.8rem,6vw,4rem)] text-fright-white uppercase font-frightmare leading-[1]">
                See our satiesfied travelers
              </h2>

              <p className="text-fright-textColor max-w-[23.125rem] mx-auto lg:mx-0 w-full opacity-75">
                A white sheet does not always mean that someone is not scared ( ͡° ͜ʖ ͡°)
              </p>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, id) => (
                <div key={id} className="max-w-[480px] mx-auto lg:mx-0 bg-fright-deepVioletShade rounded-md md:rounded-[2.5rem] p-4 md:p-6 space-y-6">
                  <p className="text-sm md:text-base text-fright-textColor opacity-75">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-4">
                      <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12" />
                      <div className="flex flex-col items-start">
                        <span className="text-fright-textColor opacity-75 text-sm md:text-base">{testimonial.name}</span>
                        <span className="text-fright-textColor opacity-75 text-sm md:text-base">{testimonial.job}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-sm md:text-base text-fright-textColor opacity-75">{testimonial.rateQuentity}</span>
                      <img src={testimonial.stars} alt="stars" className="w-20 md:w-auto"/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute z-0 bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-fright-bgColor to-transparent"></div>
      </section>
    </>
  )
}

export default Testimonials;
