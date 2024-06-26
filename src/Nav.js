import React, { useState, useContext, useEffect,useRef } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoCloseSharp } from "react-icons/io5";
import Register from "./NavComponents/Register";
import { GlobalStateContext } from "./UseContextComponents/GlobalStateProvider";

function Nav() {
  const navItems = [
    {id:'home',label:'Home'},
    { id: 'program', label: 'Program' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const [navBar, setNavBar] = useState(false);
  const [active, setActive] = useState(navItems[0].id);
  const { openRegisterForm } = useContext(GlobalStateContext);
  const handleScrollRef = useRef();
  const isScrolling = useRef(true);

  const handleClick = (id) => {
    setActive(id);
    setNavBar(false);
    const element = document.getElementById(id);
    const offset = 40;

    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetScrollTop = scrollTop + rect.top - offset;

      window.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });
    }

    isScrolling.current = false;
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const handleScroll = () => {
      if (!isScrolling.current) {

      }
     else{
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY + 100 >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
     }
    };

    handleScrollRef.current = handleScroll;

    window.addEventListener("scroll", handleScrollRef.current);

    return () => {
      window.removeEventListener("scroll", handleScrollRef.current);
    };
  }, []);  return (
    <>
      <nav className={`fixed w-full h-16 sm:h-28 bg-white md:rounded-b-3xl px-6 md:py-6 grid items-center ${!navBar ? "rounded-b-3xl" : ""}`}>
        <div className="flex justify-between items-center">
          <div className="w-32 h-8  sm:w-56 sm:h-14">
            <img className="w-full h-full" src="/images/logo.png" alt="edustein" />
          </div>
          <div className="block md:hidden pr-3" onClick={() => setNavBar(!navBar)}>
            <div className="transition-transform duration-700">
              {navBar
                ? <IoCloseSharp className="text-2xl" />
                : <VscThreeBars className="text-2xl" />
              }
            </div>
          </div>
          <div
            className={`pb-5 absolute md:pr-4 left-0 top-16 min-h-84 w-full bg-white grid space-y-8 md:static md:flex 
            md:space-y-0 md:space-x-10 lg:space-x-14 md:h-4 md:w-auto font-redhat text-base font-semibold ${navBar ? 'block' : 'hidden'}`}
          >
            {navItems.map((item) => (
              <span
                key={item.id}
                className={`px-16 md:px-0 cursor-pointer ${active === item.id ? 'text-line md:text-navItems md:underline md:underline-offset-8' : 'text-navItems'}`}
                style={{
                  textDecorationColor: active === item.id ? '#D2AD20' : 'inherit',
                  textUnderlineOffset: '8px',
                  textDecorationThickness: active === item.id ? '2px' : 'inherit',
                }}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </span>
            ))}
            <span className="px-16 md:px-0 cursor-pointer" onClick={() => openRegisterForm()}>
              Register
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
