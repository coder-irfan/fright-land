import React, { useState, useEffect } from "react";

const links = [
  { id: "1", text: "Home", href: "#home" },
  { id: "2", text: "Lessors", href: "#lessors" },
  { id: "3", text: "Places", href: "#places" },
  { id: "4", text: "Death", href: "#death" },
  { id: "5", text: "Potions", href: "#potions" },
];

function Header({ handleNotAvailable }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <header
        className="flex items-start md:flex-row justify-between md:items-center gap-4 py-4 md:py-6 lg:py-2 px-4 sm:px-6 md:px-8 lg:px-12 2xl:max-w-[100rem] mx-auto
      fixed top-0 left-0 right-0 z-20 scroll-m-28 bg-fright-bgColor shadow-[0_0.2rem_0.7rem_rgba(0,0,0,0.5)]"
      >
        <div
          className={`md:hidden fixed w-screen h-screen inset-0 bg-black transition-all duration-700 z-10
          ${
            isOpen
              ? "opacity-70 pointer-events-none"
              : "opacity-0 pointer-events-none"
          }`}
        ></div>

        <div className="z-20">
          <nav
            className={`md:relative fixed top-0 left-0 h-full w-3/5 md:left-0 transition-all duration-700 pt-24 pl-8 md:pl-0 md:pt-0 bg-gradient-to-t 
            from-fright-darkGradientVioled to-fright-bgColor md:from-transparent md:to-transparent md:h-auto md:w-auto md:-translate-x-0
            ${isOpen ? "-translate-x-0" : "-translate-x-full"}`}
          >
            <ul className="flex flex-col md:flex-row md:items-center text-fright-textColor gap-8 md:gap-4 lg:gap-8 xl:gap-12 font-bold xl:text-lg">
              {links.map((link, id) => (
                <li key={id}>
                  <a
                    href={link.href}
                    className="relative after:absolute after:left-1/2 after:-bottom-2 after:w-0 after:h-[0.125rem] after:bg-current after:transition-all
                  after:duration-300 hover:after:left-0 hover:after:w-full"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>

            {isOpen && (
              <div
                className="absolute top-6 left-5 sm:left-6 text-3xl md:hidden"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src="Images/close.webp"
                  alt=""
                  className="w-5 cursor-pointer"
                />
              </div>
            )}
          </nav>
        </div>

        <div className="">
          <img
            src="Images/Logo.webp"
            alt=""
            className="hidden max-w-28 xl:flex xl:max-w-40"
          />
        </div>

        <div className="flex items-center text-fright-textColor gap-4 lg:gap-8 xl:gap-12">
          <a
            href="#travelers"
            className="text-fright-textColor font-bold xl:text-lg relative after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[0.125rem] 
            after:bg-current after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full hidden sm:flex"
          >
            Travelers
          </a>

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
              className="hidden sm:flex items-center gap-2 p-2 lg:py-3 lg:px-6 rounded-xl lg:rounded-2xl border border-fright-lightGradientPink bg-gradient-to-r 
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

        {!isOpen && (
          <div
            className="absolute top-5 left-4 sm:left-5 md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <img src="Images/menu.webp" alt="" className="w-8 cursor-pointer" />
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
