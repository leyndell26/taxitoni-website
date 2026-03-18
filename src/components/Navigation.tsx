"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Start", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Flotte", href: "#fleet" },
  { name: "Vorteile", href: "#features" },
  { name: "Kontakt", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500",
              scrolled
                ? "glass-strong shadow-lg shadow-black/20"
                : "bg-transparent"
            )}
          >
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#hero");
              }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src="/vip-logo.png"
                alt="VIP Taxi Toni"
                width={160}
                height={28}
                className="h-7 w-auto invert hue-rotate-180"
                priority
              />
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-xl transition-colors",
                    activeSection === item.href.slice(1)
                      ? "text-brand"
                      : "text-muted hover:text-foreground"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-brand/10 rounded-xl border border-brand/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </motion.a>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <motion.a
                href="tel:09841-2997"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-dark via-brand to-brand-light text-white font-semibold text-sm rounded-xl shadow-lg shadow-brand/25 hover:shadow-brand/40 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                <span>09841 - 29 97</span>
              </motion.a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-foreground hover:text-brand transition-colors"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-24 px-4 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-2 mt-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl font-semibold text-foreground hover:text-brand transition-colors py-3"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="tel:09841-2997"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-dark via-brand to-brand-light text-white font-bold text-lg rounded-2xl"
              >
                <Phone className="w-5 h-5" />
                09841 - 29 97
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
