"use client";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";

declare global { interface Window { gsap: any; ScrollTrigger: any } }

function waitGSAP(cb: () => void) {
  if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) { cb(); return; }
  const t = setInterval(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) { clearInterval(t); cb(); }
  }, 80);
}

export default function SobrePage() {
  useEffect(() => {
    waitGSAP(() => {
      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);

      // Hero
      gsap.from(".sb-hero > *", {
        y: 30, opacity: 0, duration: 0.75, stagger: 0.12, ease: "power3.out",
      });

      // Narrativa 2-col
      gsap.from(".sb-narr-left", {
        x: -40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".sb-narr", start: "top 80%", toggleActions: "play none none none" },
      });
      gsap.from(".sb-narr-right", {
        x: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".sb-narr", start: "top 80%", toggleActions: "play none none none" },
      });

      // Antes/Depois
      gsap.from(".sb-before", {
        x: -40, opacity: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".sb-bd", start: "top 82%", toggleActions: "play none none none" },
      });
      gsap.from(".sb-after", {
        x: 40, opacity: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".sb-bd", start: "top 82%", toggleActions: "play none none none" },
      });

      // Valores cards
      gsap.utils.toArray<Element>(".sb-valor").forEach((el, i) => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 0.6, delay: i * 0.08, ease: "power3.out",
          scrollTrigger: { trigger: ".sb-valores", start: "top 80%", toggleActions: "play none none none" },
        });
      });

      // Stats
      gsap.utils.toArray<Element>(".sb-stat").forEach((el, i) => {
        gsap.from(el, {
          y: 30, opacity: 0, duration: 0.6, delay: i * 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".sb-stats", start: "top 82%", toggleActions: "play none none none" },
        });
      });

      // CTA
      gsap.from(".sb-cta > *", {
        y: 24, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".sb-cta", start: "top 85%", toggleActions: "play none none none" },
      });

      // Hover on valor cards
      document.querySelectorAll<HTMLElement>(".sb-valor").forEach(card => {
        card.addEventListener("mouseenter", () => gsap.to(card, { y: -4, boxShadow: "0 12px 32px rgba(14,42,30,0.12)", duration: 0.22, ease: "power2.out" }));
        card.addEventListener("mouseleave", () => gsap.to(card, { y: 0, boxShadow: "none", duration: 0.3, ease: "power2.inOut" }));
      });
    });
  }, []);

  return (
    <>
      <Nav />
      <main>
        {/* HEADER */}
        <section style={{ background: "var(--neutral-100)", padding: "72px 24px 64px" }}>
          <div className="sb-hero" style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <span className="rd-eyebrow">Sobre a Aphotex</span>
            <h1 style={{
              font: "700 46px/1.12 var(--font-poppins)", fontFamily: "var(--font-poppins)",
              color: "var(--green-800)", letterSpacing: "-0.02em", margin: "20px 0 0",
              textWrap: "balance" as never,
            }}>
              Existimos para resolver uma <span className="rd-mark">incoerência</span> específica.
            </h1>
            <p style={{ font: "var(--text-lg)", fontFamily: "var(--font-poppins)", color: "var(--text-body)", margin: "22px auto 0", maxWidth: 660 }}>
              Profissionais excepcionais com uma imagem digital que não reflete essa excelência. A Aphotex Design fecha a distância entre quem você é e o que a internet mostra sobre você.
            </p>
          </div>
        </section>

        {/* NARRATIVA */}
        <section style={{ background: "var(--white)", padding: "88px 24px" }}>
          <div className="sb-narr" style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div className="sb-narr-left">
              <span className="rd-eyebrow">Nosso propósito</span>
              <h2 style={{ font: "700 34px/1.18 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", letterSpacing: "-0.02em", margin: "18px 0 0" }}>
                Não criamos "site bonito". Criamos presença que vende por você.
              </h2>
              <p style={{ font: "var(--text-base)", fontFamily: "var(--font-poppins)", color: "var(--text-body)", margin: "20px 0 0" }}>
                Presença digital estratégica transmite autoridade desde o primeiro segundo, converte visitantes em clientes e faz o seu nome aparecer como referência no digital.
              </p>
              <p style={{ font: "var(--text-base)", fontFamily: "var(--font-poppins)", color: "var(--text-body)", margin: "16px 0 0" }}>
                E fazemos isso em <strong style={{ color: "var(--green-800)" }}>dias, não em meses</strong>. Com design exclusivo, nunca template. Por uma fração do custo de uma agência tradicional.
              </p>
            </div>
            <div className="sb-narr-right" style={{ position: "relative" }}>
              {/* Image placeholder */}
              <div style={{
                width: "100%", height: 420, borderRadius: 22,
                background: "linear-gradient(135deg, var(--green-100) 0%, var(--green-200) 100%)",
                boxShadow: "var(--shadow-lg)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ font: "700 48px/1 var(--font-poppins)", color: "var(--green-400)" }}>A</div>
                  <div style={{ font: "600 14px/1 var(--font-poppins)", color: "var(--green-600)", marginTop: 8 }}>Aphotex Design</div>
                </div>
              </div>
              <div style={{
                position: "absolute", right: -18, bottom: 28,
                display: "inline-flex", alignItems: "center", gap: 12,
                background: "var(--green-800)", color: "var(--white)",
                borderRadius: "var(--radius-pill)", padding: "14px 22px",
                boxShadow: "var(--shadow-md)",
              }}>
                <span style={{ font: "700 22px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)" }}>2h</span>
                <span style={{ font: "500 12px/1.25 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-200)", maxWidth: 110 }}>para receber sua proposta personalizada</span>
              </div>
            </div>
          </div>
        </section>

        {/* ANTES / DEPOIS */}
        <section style={{ background: "var(--neutral-100)", padding: "80px 24px" }}>
          <div className="sb-bd" style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
            <div className="sb-before" style={{ background: "var(--white)", border: "1px solid var(--neutral-200)", borderRadius: "var(--radius-lg)", padding: 36, boxShadow: "var(--shadow-sm)" }}>
              <div style={{ font: "600 13px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", letterSpacing: "0.12em", textTransform: "uppercase" as never, color: "var(--neutral-500)" }}>Antes</div>
              <p style={{ font: "600 22px/1.45 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--neutral-700)", margin: "16px 0 0" }}>
                Clientes que hesitam porque a imagem online não convence.
              </p>
            </div>
            <div className="sb-after" style={{ background: "var(--green-800)", borderRadius: "var(--radius-lg)", padding: 36, boxShadow: "var(--shadow-md)" }}>
              <div style={{ font: "600 13px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", letterSpacing: "0.12em", textTransform: "uppercase" as never, color: "var(--lime-500)" }}>Depois</div>
              <p style={{ font: "600 22px/1.45 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--white)", margin: "16px 0 0" }}>
                Uma presença digital que fecha por você — mesmo quando você não está disponível.
              </p>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section style={{ background: "var(--white)", padding: "88px 24px" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
              <span className="rd-eyebrow">Como trabalhamos</span>
              <h2 style={{ font: "700 36px/1.15 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", letterSpacing: "-0.02em", margin: "20px 0 0" }}>
                Os princípios que sustentam cada projeto
              </h2>
            </div>
            <div className="sb-valores" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22, marginTop: 48 }}>
              {[
                { title: "Prazo combinado é prazo cumprido", desc: "Sites em 10 a 20 dias úteis, design em 5 a 7. Sem desculpa, sem surpresa. Respeitamos o seu tempo porque ele vale dinheiro." },
                { title: "Especialistas em profissional liberal", desc: "Não atendemos qualquer negócio. Entendemos como transmitir autoridade para quem vive de expertise — credenciais, serviços e confiança." },
                { title: "Design exclusivo, nunca template", desc: "Cada projeto começa do zero, a partir de um briefing da sua profissão e posicionamento. Sua identidade não vai se parecer com a de ninguém." },
                { title: "Você fala direto com quem produz", desc: "Sem gerente intermediário, sem atendimento robotizado. Via WhatsApp, com resposta em horas e atualizações proativas durante o projeto." },
              ].map(({ title, desc }) => (
                <div key={title} className="sb-valor" style={{ background: "var(--neutral-100)", borderRadius: "var(--radius-lg)", padding: 32 }}>
                  <h3 style={{ font: "700 20px/1.3 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", margin: "0 0 10px" }}>{title}</h3>
                  <p style={{ font: "var(--text-base)", fontFamily: "var(--font-poppins)", color: "var(--text-body)", margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ALCANCE */}
        <section style={{ background: "var(--green-800)", color: "var(--white)", padding: "72px 24px" }}>
          <div className="sb-stats" style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, textAlign: "center" as never }}>
            {[
              { fig: "100%", label: "online · todo o Brasil" },
              { fig: "SP·RJ·MG·PR", label: "profissionais já atendidos" },
              { fig: "10–20", label: "dias úteis por site" },
              { fig: "R$197", label: "manutenção mensal opcional" },
            ].map(({ fig, label }) => (
              <div key={label} className="sb-stat">
                <div style={{ font: "700 42px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--lime-500)", letterSpacing: "-0.02em" }}>{fig}</div>
                <div style={{ font: "var(--text-sm)", fontFamily: "var(--font-poppins)", color: "var(--green-200)", marginTop: 8 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--lime-500)", padding: "74px 24px" }}>
          <div className="sb-cta" style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ font: "700 38px/1.13 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", letterSpacing: "-0.02em", margin: 0 }}>
              Vamos colocar sua imagem digital à altura do seu trabalho?
            </h2>
            <Link href="/contato" style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 28, background: "var(--green-800)", color: "var(--white)", font: "600 17px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", padding: "17px 32px", borderRadius: "var(--radius-pill)", boxShadow: "var(--shadow-md)" }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--lime-500)", boxShadow: "0 0 0 4px rgba(255,255,255,0.25)", display: "inline-block" }} />
              Solicitar proposta gratuita →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
