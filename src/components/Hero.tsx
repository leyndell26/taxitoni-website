"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />

        {/* Gold radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/3 rounded-full blur-[100px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(73,155,211,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(73,155,211,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Animated floating orbs */}
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-brand/40 rounded-full"
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 left-32 w-1.5 h-1.5 bg-brand/30 rounded-full"
          animate={{ y: [15, -15, 15], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-40 w-1 h-1 bg-brand/50 rounded-full"
          animate={{ y: [-10, 10, -10], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm text-muted">
            24/7 verfugbar &mdash; 365 Tage im Jahr
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
        >
          <span className="text-foreground">Ihr Premium</span>
          <br />
          <span className="brand-gradient-text">Taxi Service</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Die Kurstadt im Herzen Mittelfrankens &mdash; komfortabel, zuverlassig
          und sicher an Ihr Ziel. Mit Taxi Toni fahren Sie erstklassig.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="tel:09841-2997"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-dark via-brand to-brand-light text-background font-bold text-lg rounded-2xl shadow-xl shadow-brand/25 hover:shadow-brand/40 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Jetzt anrufen
          </motion.a>

          <motion.a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-3 px-8 py-4 glass hover:bg-surface-light/50 text-foreground font-semibold text-lg rounded-2xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Unsere Services
          </motion.a>
        </motion.div>

        {/* Info Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand" />
            <span>Bad Windsheim</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-brand/40 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand" />
            <span>Rund um die Uhr</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-brand/40 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-brand" />
            <span>09841 - 29 97</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted/50"
        >
          <span className="text-xs tracking-widest uppercase">Entdecken</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
