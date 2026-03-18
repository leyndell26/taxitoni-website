"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Car,
  Plane,
  Accessibility,
  Users,
  CalendarCheck,
  CreditCard,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Taxi & Fahrdienst",
    description:
      "Professioneller Taxi-Service fur alle Ihre Fahrten in und um Bad Windsheim. Komfortabel und punktlich.",
    gradient: "from-amber-500/20 to-yellow-600/5",
  },
  {
    icon: Plane,
    title: "Flughafentransfer",
    description:
      "Stressfreier Transfer zum Flughafen und zuruck. Wir bringen Sie sicher und rechtzeitig ans Ziel.",
    gradient: "from-blue-500/20 to-cyan-600/5",
  },
  {
    icon: Accessibility,
    title: "Rollstuhlgerecht",
    description:
      "Barrierefreie Fahrzeuge fur mobilitatseingeschrankte Fahrgaste. Komfort fur alle.",
    gradient: "from-emerald-500/20 to-green-600/5",
  },
  {
    icon: Users,
    title: "Gruppentransport",
    description:
      "Komfortable Kleinbusse fur Gruppen. Ideal fur Ausfuge, Events und Firmenfahrten.",
    gradient: "from-purple-500/20 to-violet-600/5",
  },
  {
    icon: CalendarCheck,
    title: "Vorbestellung",
    description:
      "Planen Sie im Voraus. Flexible Buchungen mit Sonderwunschen - wir richten uns nach Ihnen.",
    gradient: "from-rose-500/20 to-pink-600/5",
  },
  {
    icon: CreditCard,
    title: "Faire Preise",
    description:
      "Transparente Preisgestaltung. Bezahlung mit Bargeld, EC-Karte oder Kreditkarte moglich.",
    gradient: "from-orange-500/20 to-amber-600/5",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-background to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-brand text-sm font-semibold tracking-widest uppercase">
            Unsere Services
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
            Erstklassiger{" "}
            <span className="brand-gradient-text">Service</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Von der kurzen Stadtfahrt bis zum Flughafentransfer &mdash; wir
            bieten Ihnen den passenden Service fur jeden Anlass.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl p-8 glass hover:border-brand/30 transition-all duration-500 cursor-default"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors">
                  <service.icon className="w-7 h-7 text-brand" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
