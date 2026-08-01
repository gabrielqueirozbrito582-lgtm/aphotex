"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/manifesto", label: "Manifesto" },
  { href: "/processo", label: "Processo" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isNavy = pathname !== "/";

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: scrolled
            ? "rgba(245, 241, 232, 0.96)"
            : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid #E5DFCF" : "1px solid transparent",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 2rem",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.6rem",
              fontWeight: 400,
              color: "#1B2D4F",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            APHOTEX
          </Link>

          {/* Desktop links */}
          <div
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: active ? "#1B2D4F" : "#4A4A4A",
                    borderBottom: active ? "1px solid #D4A73C" : "1px solid transparent",
                    paddingBottom: "2px",
                    transition: "color 0.2s ease",
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "none",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span style={{ display: "block", width: 24, height: 1, background: "#1B2D4F" }} />
            <span style={{ display: "block", width: 16, height: 1, background: "#1B2D4F" }} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 98,
                background: "rgba(15,15,15,0.4)",
              }}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(340px, 90vw)",
                zIndex: 99,
                background: "#1B2D4F",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "#F5F1E8" }}>
                  APHOTEX
                </span>
                <button
                  onClick={() => setOpen(false)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#F5F1E8", fontSize: "1.4rem", lineHeight: 1 }}
                >
                  ×
                </button>
              </div>

              <nav style={{ display: "flex", flexDirection: "column", gap: "2rem", flex: 1 }}>
                {[{ href: "/", label: "Início" }, ...links].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: pathname === href ? "#D4A73C" : "#F5F1E8",
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div style={{ borderTop: "1px solid rgba(245,241,232,0.1)", paddingTop: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#D4A73C" }}>
                  EDIÇÃO 01 · 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
