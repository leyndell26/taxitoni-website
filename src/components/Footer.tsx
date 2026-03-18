"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/vip-logo.png"
                alt="VIP Taxi Toni"
                width={180}
                height={32}
                className="h-8 w-auto mb-2 invert hue-rotate-180"
              />
              <p className="text-xs text-muted">Bad Windsheim</p>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Ihr zuverlassiger Taxi-Service in der Kurstadt im Herzen
              Mittelfrankens. Seit vielen Jahren fur Sie unterwegs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Start", href: "#hero" },
                { name: "Services", href: "#services" },
                { name: "Flotte", href: "#fleet" },
                { name: "Vorteile", href: "#features" },
                { name: "Kontakt", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted hover:text-brand transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:09841-2997"
                  className="flex items-center gap-3 text-muted hover:text-brand transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-brand/60" />
                  09841 - 29 97
                </a>
              </li>
              <li>
                <a
                  href="mailto:t.hurman@t-online.de"
                  className="flex items-center gap-3 text-muted hover:text-brand transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-brand/60" />
                  t.hurman@t-online.de
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted text-sm">
                  <MapPin className="w-4 h-4 text-brand/60 mt-0.5 shrink-0" />
                  Dresdener Str. 10A
                  <br />
                  91438 Bad Windsheim
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted/60">
            &copy; {new Date().getFullYear()} Taxi Toni &mdash; Tuncay Hurman.
            Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted/60 hover:text-brand transition-colors">
              Impressum
            </a>
            <a href="#" className="text-sm text-muted/60 hover:text-brand transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
