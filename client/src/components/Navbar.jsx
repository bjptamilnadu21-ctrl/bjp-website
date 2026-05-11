import { useState } from "react";
import logo from "../assets/lotus.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#aboutme" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 sm:px-5 md:px-4 py-2">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
          />

          <div className="min-w-0">
            <h1
              className="
                text-[clamp(10px,2.8vw,34px)]
                font-black
                leading-tight
                truncate
                bg-[linear-gradient(to_bottom,#ff9800_0%,#ff9800_60%,#008000_60%,#008000_100%)]
                bg-clip-text
                text-transparent m-2
              "
            >
              பாரதிய ஜனதா கட்சி
            </h1>

            <p
              className="
                text-[clamp(9px,2vw,20px)]
                font-bold
                bg-[linear-gradient(to_bottom,#ff9800_0%,#ff9800_60%,#008000_60%,#008000_100%)]
                bg-clip-text
                text-transparent
              "
            >
              தமிழ்நாடு
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative text-green-600 font-bold
                transition-colors duration-300
                hover:text-orange-500
                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:w-0
                after:h-[3px]
                after:bg-orange-500
                after:rounded-full
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-green-700 transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-green-700 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-green-700 transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-green-600 font-bold hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}