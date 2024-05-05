import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./assets/ieee_spac_logo_vertical_no_year.svg";
import HamburgerButton from "./HamburgerButton";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Schedule", path: "/schedule" },
  { name: "Patronage", path: "/patronage" },
  { name: "Gallery", path: "/gallery" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const NavigationLinks = ({ onCloseMenu }) => (
  <>
    {links.map((link) => (
      <Link key={link.name} href={link.path}>
        <button
          className={`btn btn-block md:btn-sm btn-primary btn-outline md:btn-ghost hover:bg-primary transition hover:cursor-pointer hover:scale-110 duration-500 ease-in-out}`}
          onClick={onCloseMenu}
        >
          {link.name}
        </button>
      </Link>
    ))}
  </>
);

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Top Header */}
      <header className="navbar fixed border-b-[0.25px] border-b-secondary backdrop-blur-sm overflow-hidden px-3 md:px-8">
        <div className="navbar-start">
          <Image src={Logo} alt="IEEE SPAC Logo" className="w-16 md:w-20" />
        </div>

        <div className="navbar-end">
          <HamburgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </header>

      {/* Navigation Menu for both Desktop and Mobile*/}
      <nav>
        {/* The menu tag is the same as ul, just a bit for semantic for the context of navbars */}
        <menu
          className={`menu menu-vertical md:menu-horizontal space-y-4 md:space-y-0 md:space-x-4 border border-secondary border-opacity md:border-none p-4 fixed top-20 md:top-0 right-0 w-fit backdrop-blur-md md:backdrop-blur-none rounded-xl transition transform ease-in-out duration-700 z-50 ${menuOpen ? "mr-4" : "translate-x-full md:translate-x-0"}`}
        >
          <NavigationLinks onCloseMenu={() => setMenuOpen(false)} />
        </menu>
      </nav>

      {/* The reason why the menu navigation menu is not nested inside the header tag is because the stacking contexts created by the backdrop blur property causes the menu tag to not render, hence why they cannot be nested. */}
    </>
  );
};
