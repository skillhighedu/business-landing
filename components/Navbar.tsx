"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CalButton from "./CalButton";
import { categories } from "@/data/tools";
import { HugeIcon } from "@/utils/hugeicons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
        setActiveCategory(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
<Link href="/">          <Image src="/logo.png" alt="Logo" width={120} height={120} />
</Link>
          <span className="border-l-2 border-gray-600 pl-2 text-base font-semibold text-gray-700">
            for Business
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 relative">
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => {
              setServicesOpen(true);
              setActiveCategory(categories[0].name);
            }}
            onMouseLeave={() => {
              setServicesOpen(false);
              setActiveCategory(null);
            }}
          >
            <button
              aria-expanded={servicesOpen}
              className="flex items-center gap-2 hover:text-primary transition"
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setActiveCategory(!servicesOpen ? categories[0].name : null);
              }}
            >
              <HugeIcon name="service" size={20} />
              Our Services
              <HugeIcon name={servicesOpen ? "arrowUp" : "arrowDown"} size={16} />
            </button>

            {/* Animated Dropdown */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 mt-2 flex bg-white shadow-lg rounded-md border border-gray-200"
                >
                  <div className="flex flex-col w-48 max-h-64 overflow-y-auto">
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        onMouseEnter={() => setActiveCategory(cat.name)}
                        className={`text-left px-4 py-2 hover:bg-gray-100 ${
                          activeCategory === cat.name
                            ? "text-primary font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-col w-56 border-l border-gray-200">
                    {activeCategory &&
                      categories
                        .find((c) => c.name === activeCategory)
                        ?.tools.map((tool) => (
                          <a
                            key={tool.slug}
                            href={`/tools/${tool.slug}`}
                            className="px-4 py-2 hover:bg-gray-50 text-gray-800 border-b last:border-0"
                          >
                            {tool.name}
                          </a>
                        ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <CalButton
            label="Get Started"
            icon={<HugeIcon name="arrowTurnUp" size={20} className="text-white" />}
            iconPosition="right"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HugeIcon name={isOpen ? "closeIcon" : "menuIcon"} size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-4">
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => {
                    setServicesOpen(!servicesOpen);
                    setActiveCategory(!servicesOpen ? categories[0].name : null);
                  }}
                  className="flex items-center justify-between w-full py-2"
                >
                  <span className="flex items-center gap-2">
                    <HugeIcon name="service" size={18} /> Our Services
                  </span>
                  <HugeIcon name={servicesOpen ? "arrowUp" : "arrowDown"} size={16} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-6 mt-2 flex flex-col space-y-2"
                    >
                      {categories.map((cat) => (
                        <div key={cat.name}>
                          <p className="font-semibold text-gray-800">{cat.name}</p>
                          <div className="ml-4 flex flex-col space-y-1">
                            {cat.tools.map((tool) => (
                              <a
                                key={tool.slug}
                                href={`/tools/${tool.slug}`}
                                className="text-gray-700 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                              >
                                {tool.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <CalButton label="Get Started" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
