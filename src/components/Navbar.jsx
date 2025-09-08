import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from './icon/MenuIcon.jsx';

const NavLink = ({ name, href }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={href}
            className="relative px-4 py-2 text-sm text-gray-700 hover:text-black transition-colors duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 bg-black/5 rounded-full -z-10"
                        layoutId="hover-bg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.25 } }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    />
                )}
            </AnimatePresence>
            {name}
        </a>
    );
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#' },
        { name: 'Work', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
    ];

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    };

    const mobileLinkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            {/* Top Navbar */}
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
                    scrolled
                        ? 'bg-white shadow-md'
                        : 'bg-white'
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold tracking-wider text-black">
                        LEO9
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm">
                        {navLinks.map((link) => (
                            <NavLink key={link.name} {...link} />
                        ))}
                    </div>

                    {/* Contact Button */}
                    <div className="hidden md:flex">
                        <motion.button
                            className="bg-black text-white px-6 py-2 rounded-full font-semibold transition-shadow"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 0px 15px rgba(0,0,0,0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us
                        </motion.button>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Open menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            <MenuIcon className="h-6 w-6 text-black" />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-white z-40 md:hidden backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex flex-col items-center justify-center h-full">
                            {/* Close Button */}
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="absolute top-7 right-6 text-4xl text-black"
                                aria-label="Close menu"
                            >
                                &times;
                            </button>

                            {/* Menu Links */}
                            <motion.ul
                                className="flex flex-col items-center space-y-8"
                                variants={mobileMenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {navLinks.map((link) => (
                                    <motion.li key={link.name} variants={mobileLinkVariants}>
                                        <a
                                            href={link.href}
                                            className="text-2xl text-gray-800 hover:text-black"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}

                                {/* Contact Button */}
                                <motion.li variants={mobileLinkVariants} className="mt-4">
                                    <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors">
                                        Contact Us
                                    </button>
                                </motion.li>
                            </motion.ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
