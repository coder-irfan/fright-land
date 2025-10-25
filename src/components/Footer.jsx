import React from "react";

function Footer({ handleNotAvailable }) {
  return (
    <>
      <footer
        className="relative bg-fright-darkViolet px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 mt-28 lg:mt-40
        2xl:max-w-[100rem] mx-auto"
      >
        <img
          src="Images/three-pumkins.webp"
          alt=""
          className="absolute -top-8 md:-top-10 w-28 left-6 md:w-36 md:left-36"
        />

        <img
          src="Images/green-branches.webp"
          alt=""
          className="absolute -top-8 md:-top-10 w-28 md:w-36 right-6 md:right-36"
        />

        <div className="flex flex-col items-center justify-center space-y-10 lg:space-y-20">
          <div className="flex flex-col items-center justify-center gap-16">
            <div className="">
              <img
                src="Images/Logo-dark.webp"
                alt="logo"
                className="w-32 sm:w-36 md:w-auto"
              />
            </div>

            <div className="grid lg:grid-cols-4 text-center gap-16 lg:gap-8">
              <div className="space-y-4 lg:space-y-8">
                <h3 className="text-xl sm:text-3xl font-frightmare text-fright-white uppercase">
                  About Fright Land
                </h3>

                <ul className="space-y-2 lg:space-y-4">
                  <li>
                    <a href="#" className="footer-link">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Trust & Safety
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 lg:space-y-8">
                <h3 className="text-xl sm:text-3xl font-frightmare text-fright-white uppercase">
                  Explore
                </h3>

                <ul className="space-y-2 lg:space-y-4">
                  <li>
                    <a href="#" className="footer-link">
                      Write a review
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Add a Place
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Travelers's Choice
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 lg:space-y-8">
                <h3 className="text-xl sm:text-3xl font-frightmare text-fright-white uppercase">
                  Do Bussiness With Us
                </h3>

                <ul className="space-y-2 lg:space-y-4">
                  <li>
                    <a href="#" className="footer-link">
                      Owners
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Advertise with us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Sponsered Placements
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Become a host
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 lg:space-y-8">
                <h3 className="text-xl sm:text-3xl font-frightmare text-fright-white uppercase">
                  Support
                </h3>

                <ul className="space-y-2 lg:space-y-4">
                  <li>
                    <a href="#" className="footer-link">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Privacy and Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Cookie consent
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Site map
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      How the site works
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="">
            <img src="Images/divider.webp" alt="divider" className="h-8" />
          </div>

          <div className="">
            <div className="flex md:items-center gap-3 lg:gap-5 text-fright-whiteshColor">
              <div className="btn-gradient-border transition-shadow duration-300 hover:shadow-[0_0_1rem] hover:shadow-fright-darkGradientVioled">
                <button
                  onClick={handleNotAvailable}
                  className="flex items-center btn-inner gap-2 lg:gap-3 text-sm lg:text-base font-bold"
                >
                  Sign in
                  <img
                    src="Images/sign.webp"
                    alt="sign"
                    className="w-4 lg:w-auto"
                  />
                </button>
              </div>

              <button
                onClick={handleNotAvailable}
                className="flex items-center gap-2 p-2 lg:py-3 lg:px-6 rounded-xl lg:rounded-2xl border border-fright-lightGradientPink bg-gradient-to-r 
                from-fright-lightGradientPink to-fright-darkGradientPink transition-shadow duration-300 hover:shadow-[0_0_0.8rem] hover:shadow-fright-lightGradientPink
                text-sm lg:text-base text-fright-babyPink font-bold"
              >
                Become a host
                <img
                  src="Images/user.webp"
                  alt="user"
                  className="w-4 lg:w-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
