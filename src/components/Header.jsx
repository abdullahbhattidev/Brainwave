import Button from "./Button";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
const Header = () => {
  const pathname = useLocation();
  const [openNav, setOpenNav] = useState(false);
  return (
    <div
      className={`fixed top-0 w-full left-0 z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      } `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr-8 ">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <nav
          className={`${
            openNav ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((items) => (
              <a
                key={items.id}
                href={items.url}
                onClick={() => {
                  setOpenNav(false);
                  enablePageScroll();
                }}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-color hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  items.onlyMobile ? "lg:hidden" : ""
                } ${
                  items.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12 `}
              >
                {items.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button href="#login" className="hidden lg:flex">
          Sign In
        </Button>
        <Button
          className="lg:hidden ml-auto"
          px="px-3"
          onClick={() => {
            setOpenNav(!openNav);
            openNav ? disablePageScroll() : enablePageScroll();
          }}
        >
          <MenuSvg openNavigation={openNav} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
