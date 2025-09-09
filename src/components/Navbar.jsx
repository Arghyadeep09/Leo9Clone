import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "./icon/MenuIcon.jsx";
import { Sun, Moon } from "lucide-react";
import logo from '../../public/assets/logo-light.svg';

const NavLink = ({ name, href, isDot }) => (
  <a
    href={href}
    className="text-sm md:text-base text-gray-800 hover:text-pink-600 transition-colors duration-300 flex items-center"
  >
    {name}
    {isDot && <span className="mx-1 text-gray-900">•</span>}
  </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSun, setIsSun] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#" },
    { name: "Services", href: "#", isDot: true },
    { name: "Clients", href: "#" },
    { name: "About", href: "#", isDot: true },
    { name: "Knowledge", href: "#" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-600 transition-all duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-12 md:px-20 lg:px-30 xl:px-28 py-1 md:py-1.5">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-26 w-26 md:h-30 md:w-30 object-contain"
              style={{ maxHeight: "50px" }}
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center font-medium space-x-2 lg:space-x-9 ml-55">
            {navLinks.map((link, idx) => (
              <NavLink key={idx} {...link} />
            ))}
          </div>

          {/* Right Side: Sun/Moon Icon + Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button
              onClick={() => setIsSun(!isSun)}
              whileTap={{ scale: 0.8 }}
              className="p-2 h-17 w-13 rounded-full bg-transparent transition-colors mr-2 cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isSun ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="h-9 w-8 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="h-9 w-8 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              className="relative bg-black text-white px-11 py-3 rounded-sm font-bold text-base overflow-hidden transition-shadow ml-4 h-[48px] flex items-center justify-center cursor-pointer"
              whileHover={{
                boxShadow: "0px 0px 18px rgba(0,0,0,0.35)", 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative h-[30px] overflow-hidden flex items-center "
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Top text */}
                <motion.span
                  className="block"
                  variants={{
                    rest: { y: 0 },
                    hover: { y: "-100%" },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  Contact
                </motion.span>

                {/* Bottom text */}
                <motion.span
                  className="absolute top-full left-0 right-0 block"
                  variants={{
                    rest: { y: 0 },
                    hover: { y: "-100%" },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  Contact
                </motion.span>
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              aria-expanded={sidebarOpen}
            >
              <MenuIcon className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 w-64 sm:w-80 h-full bg-white shadow-2xl z-50 p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-5 right-5 text-3xl text-gray-700 hover:text-black transition-colors"
                aria-label="Close menu"
              >
                &times;
              </button>

              {/* Sidebar Content */}
              <div className="mt-12 flex flex-col space-y-8">
                {navLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="text-base font-medium text-gray-800 hover:text-pink-600 transition-colors"
                    onClick={() => setSidebarOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}

                {/* Contact Button */}
                <motion.button
                  className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-900 transition-colors mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
