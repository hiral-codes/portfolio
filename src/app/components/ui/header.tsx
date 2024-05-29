"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { SiGithub } from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi";

type Props = {};

function Header({}: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // NavItems
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Resume",
      href: "/resume",
    },
    {
      title: "Blogs",
      href: "/",
    },
  ];

  return (
    <header
      className={`h-20 px-8 sm:px-6 md:px-8 lg:px-20 w-full flex justify-between items-center border-b border-transparent fixed top-0 left-0 right-0 z-20 ${
        isScrolled
          ? "bg-white dark:bg-black border-b border-black border-opacity-10 dark:border-opacity-10 dark:border-white"
          : "bg-white md:bg-transparent dark:bg-black md:dark:bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4 sm:gap-8">
        <Link
          href="/"
          className="text-black dark:text-white text-xl sm:text-2xl lg:text-3xl font-bold"
        >
          Hiral Patel
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex items-center md:ml-20 gap-2 sm:gap-4 lg:gap-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-100 font-medium"
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="socials flex items-center gap-2 sm:gap-4">
        <a
          href="https://www.github.com/hiral-codes"
          target="_blank"
          className="text-2xl text-black dark:text-white"
        >
          <SiGithub />
        </a>
        <DarkModeToggle
          onChange={toggleDarkMode}
          checked={isDarkMode}
          size={50}
          aria-label="Toggle dark mode"
        />
        <button
          className="sm:hidden text-2xl text-black dark:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {menuOpen && (
        <div className="sm:hidden absolute top-20 left-0 right-0 bg-white dark:bg-black shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-black dark:text-gray-400 dark:hover:text-gray-100 font-medium"
              >
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
