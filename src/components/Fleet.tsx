"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Wrench } from "lucide-react";

const fleetFeatures = [
  {
    icon: Shield,
    title: "Sicherheit",
    description: "Regelmasig geprufte und gewartete Fahrzeuge fur Ihre Sicherheit.",
  },
  {
    icon: Sparkles,
    title: "Komfort",
    description: "Moderne, saubere Fahrzeuge mit hochstem Komfort fur jede Fahrt.",
  },
  {
    icon: Wrench,
    title: "Gepflegt",
    description: "Professionell gereinigt und instand gehalten - bei jeder Fahrt.",
  },
];

export function Fleet() {
  return (
    <section id="fleet" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

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
            Unsere Flotte
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
            Moderne{" "}
            <span className="brand-gradient-text">Fahrzeuge</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Unsere moderne Fahrzeugflotte bietet Ihnen Komfort und Sicherheit
            auf jeder Fahrt.
          </p>
        </motion.div>

        {/* Fleet Visual - Elegant car showcase grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Main showcase */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden glass group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-brand/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg
                    viewBox="0 0 200 100"
                    className="w-64 h-32 sm:w-80 sm:h-40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Stylized car silhouette */}
                    <path
                      d="M30 65 Q35 45 55 40 L80 35 Q100 25 130 30 L155 35 Q175 40 180 55 L180 65"
                      stroke="var(--brand)"
                      strokeWidth="2"
                      fill="rgba(73,155,211,0.08)"
                    />
                    <circle cx="55" cy="70" r="10" stroke="var(--brand)" strokeWidth="2" fill="rgba(73,155,211,0.15)" />
                    <circle cx="155" cy="70" r="10" stroke="var(--brand)" strokeWidth="2" fill="rgba(73,155,211,0.15)" />
                    <line x1="30" y1="65" x2="180" y2="65" stroke="var(--brand)" strokeWidth="1.5" opacity="0.5" />
                    {/* Windows */}
                    <path
                      d="M70 40 Q75 30 95 28 L110 27 Q120 27 125 32 L130 40"
                      stroke="var(--gold-light)"
                      strokeWidth="1.5"
                      fill="rgba(73,155,211,0.05)"
                    />
                    <line x1="100" y1="28" x2="100" y2="40" stroke="var(--brand)" strokeWidth="1" opacity="0.4" />
                  </svg>
                </motion.div>
                <p className="text-brand/60 text-sm mt-4 tracking-widest uppercase">
                  Premium Fahrzeugflotte
                </p>
              </div>
            </div>
            {/* Corner accents */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-brand/30 rounded-tl-lg" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-brand/30 rounded-br-lg" />
          </motion.div>

          {/* Stats + Info */}
          <div className="flex flex-col gap-6">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "24/7", label: "Verfugbar" },
                { value: "365", label: "Tage im Jahr" },
                { value: "12+", label: "Fahrzeuge" },
                { value: "100%", label: "Zuverlassig" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 text-center hover:border-brand/30 transition-colors"
                >
                  <div className="text-3xl font-bold brand-gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4 flex-1"
            >
              {fleetFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 glass rounded-2xl p-5 hover:border-brand/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-brand transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
