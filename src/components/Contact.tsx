"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CreditCard, Banknote } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-semibold tracking-widest uppercase">
            Kontakt
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
            Jetzt <span className="brand-gradient-text">buchen</span>
          </h2>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 sm:p-10 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <motion.a
              href="tel:09841-2997"
              className="flex items-center justify-center gap-3 flex-1 px-6 py-4 bg-gradient-to-r from-brand-dark via-brand to-brand-light text-white font-bold text-lg rounded-2xl shadow-lg shadow-brand/25 hover:shadow-brand/40 transition-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-5 h-5" />
              09841 - 29 97
            </motion.a>

            <motion.a
              href="mailto:t.hurman@t-online.de"
              className="flex items-center justify-center gap-3 flex-1 px-6 py-4 glass hover:border-brand/30 text-foreground font-semibold rounded-2xl transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail className="w-5 h-5 text-brand" />
              E-Mail schreiben
            </motion.a>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <div>
                <p className="text-muted mb-0.5">Adresse</p>
                <p className="text-foreground">Dresdener Str. 10A, 91438 Bad Windsheim</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <div>
                <p className="text-muted mb-0.5">Erreichbarkeit</p>
                <p className="text-foreground">24/7 &ndash; 365 Tage im Jahr</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CreditCard className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <div>
                <p className="text-muted mb-0.5">Zahlung</p>
                <p className="text-foreground">Bargeld, EC &amp; Kreditkarte</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden glass"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.5!2d10.3999!3d49.4996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDI5JzU4LjYiTiAxMMKwMjMnNTkuNiJF!5e0!3m2!1sde!2sde!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.6)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Taxi Toni Standort"
          />
        </motion.div>
      </div>
    </section>
  );
}
