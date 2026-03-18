"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Heart, DollarSign, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Flexibel",
    description:
      "Sonderwunsche und besondere Anforderungen konnen bei der Buchung mitgeteilt werden.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    icon: Heart,
    title: "Modern",
    description:
      "Moderne Fahrzeugflotte, die Komfort und Sicherheit bietet. Regelmasig gewartet und gepflegt.",
    accent: "from-rose-400 to-pink-500",
  },
  {
    icon: DollarSign,
    title: "Fair",
    description:
      "Alle Preise transparent und fair. Sonderkonditionen werden vorher besprochen.",
    accent: "from-emerald-400 to-green-500",
  },
  {
    icon: Clock,
    title: "Zuverlassig",
    description:
      "Das ganze Jahr fur Sie da - auch an Feiertagen und spat in der Nacht. 365 Tage, 24/7.",
    accent: "from-blue-400 to-indigo-500",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
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
            Warum Taxi Toni
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
            Ihre{" "}
            <span className="brand-gradient-text">Vorteile</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Tuncay Hurman und sein Team stehen fur Qualitat, Zuverlassigkeit und
            erstklassigen Service seit vielen Jahren.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="glass rounded-3xl p-8 h-full hover:border-brand/30 transition-all duration-500">
                {/* Number */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-foreground/[0.03] group-hover:text-brand/[0.08] transition-colors">
                  0{i + 1}
                </span>

                {/* Icon with gradient ring */}
                <div className="relative w-16 h-16 mb-6">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} opacity-20 blur-lg group-hover:opacity-40 transition-opacity`}
                  />
                  <div className="relative w-full h-full rounded-2xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-brand" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-brand transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
