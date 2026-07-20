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

const pkFeat = { display: "flex", gap: 10, alignItems: "flex-start" as const };
const checkStyle = { color: "var(--green-600)", fontWeight: 700, flexShrink: 0, lineHeight: 1.55 };
const featText = { font: "var(--text-sm)", fontFamily: "var(--font-poppins)", color: "var(--text-body)" };

function PkFeat({ children }: { children: string }) {
  return <div style={pkFeat}><span style={checkStyle}>✓</span><span style={featText}>{children}</span></div>;
}
function PkNo({ children }: { children: string }) {
  return (
    <div style={pkFeat}>
      <span style={{ color: "var(--neutral-400)", fontWeight: 700, flexShrink: 0, lineHeight: 1.55 }}>✕</span>
      <span style={{ ...featText, color: "var(--text-muted)" }}>{children}</span>
    </div>
  );
}

export default function ServicosPage() {
  useEffect(() => {
    waitGSAP(() => {
      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);

      // Hero
      gsap.from(".s-hero-content > *", {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
      });

      // Reveal sections
      gsap.utils.toArray<Element>(".s-reveal").forEach((el) => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      });

      // Card stagger groups
      gsap.utils.toArray<Element>(".s-card-group").forEach((group) => {
        const cards = (group as HTMLElement).querySelectorAll(".s-card");
        gsap.from(cards, {
          y: 50, opacity: 0, duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: group, start: "top 82%", toggleActions: "play none none none" },
        });
      });

      // Steps
      gsap.utils.toArray<Element>(".s-step").forEach((el, i) => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 0.6, delay: i * 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".s-steps", start: "top 80%", toggleActions: "play none none none" },
        });
      });

      // Card hover
      document.querySelectorAll<HTMLElement>(".s-card").forEach(card => {
        card.addEventListener("mouseenter", () => gsap.to(card, { y: -5, boxShadow: "0 20px 48px rgba(14,42,30,0.16)", duration: 0.25, ease: "power2.out" }));
        card.addEventListener("mouseleave", () => gsap.to(card, { y: 0, boxShadow: "", duration: 0.3, ease: "power2.inOut" }));
      });
    });
  }, []);

  return (
    <>
      <Nav />
      <main>
        {/* HEADER */}
        <section style={{ background: "var(--neutral-100)", padding: "72px 24px 60px" }}>
          <div className="s-hero-content" style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <span className="rd-eyebrow">Pacotes e preços</span>
            <h1 style={{
              font: "700 46px/1.12 var(--font-poppins)", fontFamily: "var(--font-poppins)",
              color: "var(--green-800)", letterSpacing: "-0.02em", margin: "20px 0 0",
              textWrap: "balance" as never,
            }}>
              Escolha o nível de presença digital que faz sentido{" "}
              <span className="rd-mark">agora.</span>
            </h1>
            <p style={{ font: "var(--text-lg)", fontFamily: "var(--font-poppins)", color: "var(--text-body)", margin: "22px auto 0", maxWidth: 640 }}>
              Todos os pacotes incluem design exclusivo, prazo fixo e suporte real. Sem surpresa no final.
            </p>
          </div>
        </section>

        {/* SITES INSTITUCIONAIS */}
        <section style={{ background: "var(--white)", padding: "76px 24px 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div className="s-reveal" style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" as never, marginBottom: 8 }}>
              <h2 style={{ font: "700 30px/1.15 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", margin: 0 }}>Sites institucionais</h2>
              <span style={{ font: "var(--text-base)", fontFamily: "var(--font-poppins)", color: "var(--text-muted)" }}>Presença digital completa, do zero ao ar</span>
            </div>
            <div className="s-card-group" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginTop: 32, alignItems: "start" }}>
              {/* Landing Page */}
              <div className="s-card" style={{ background: "var(--white)", border: "1px solid var(--neutral-200)", borderRadius: "var(--radius-lg)", padding: 32, boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <div style={{ font: "700 20px/1.2 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)" }}>Landing Page</div>
                  <div style={{ font: "700 36px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", letterSpacing: "-0.02em", marginTop: 12 }}>R$ 1.497</div>
                  <span style={{ display: "inline-block", marginTop: 14, font: "600 12px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-700)", background: "var(--green-100)", padding: "7px 13px", borderRadius: "var(--radius-pill)" }}>Entrega em 10 dias úteis</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  <PkFeat>Uma página completa e otimizada</PkFeat>
                  <PkFeat>Design exclusivo</PkFeat>
                  <PkFeat>Responsivo (mobile)</PkFeat>
                  <PkFeat>Formulário de contato</PkFeat>
                  <PkFeat>1 rodada de revisão</PkFeat>
                  <PkFeat>15 dias de suporte</PkFeat>
                </div>
                <Link href="/contato" style={{ marginTop: "auto", textAlign: "center", border: "1px solid var(--neutral-300)", color: "var(--green-800)", font: "600 15px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", padding: "13px 20px", borderRadius: "var(--radius-pill)", display: "block" }}>
                  Solicitar este pacote
                </Link>
              </div>

              {/* Site Profissional (destaque) */}
              <div className="s-card" style={{ background: "var(--white)", border: "1.5px solid var(--lime-500)", borderRadius: "var(--radius-lg)", padding: 32, boxShadow: "var(--shadow-md)", display: "flex", flexDirection: "column", gap: 20, position: "relative" }}>
                <span style={{ position: "absolute", top: -13, left: 32, background: "var(--lime-500)", color: "var(--green-800)", font: "600 12px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", padding: "7px 14px", borderRadius: "var(--radius-pill)" }}>⭐ Mais escolhido</span>
                <div>
                  <div style={{ font: "700 20px/1.2 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)" }}>Site Profissional</div>
                  <div style={{ font: "700 36px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", letterSpacing: "-0.02em", marginTop: 12 }}>R$ 2.997</div>
                  <span style={{ display: "inline-block", marginTop: 14, font: "600 12px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-700)", background: "var(--green-100)", padding: "7px 13px", borderRadius: "var(--radius-pill)" }}>Entrega em 15 dias úteis</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  <PkFeat>Até 5 páginas</PkFeat>
                  <PkFeat>Design exclusivo</PkFeat>
                  <PkFeat>Responsivo (mobile)</PkFeat>
                  <PkFeat>Formulário + WhatsApp</PkFeat>
                  <PkFeat>Área de serviços detalhada</PkFeat>
                  <PkFeat>2 rodadas de revisão</PkFeat>
                  <PkFeat>30 dias de suporte</PkFeat>
                </div>
                <Link href="/contato" style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 9, background: "var(--green-800)", color: "var(--white)", font: "600 15px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", padding: "14px 20px", borderRadius: "var(--radius-pill)" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--lime-500)", display: "inline-block" }} />
                  Solicitar este pacote
                </Link>
              </div>

              {/* Site Completo */}
              <div className="s-card" style={{ background: "var(--white)", border: "1px solid var(--neutral-200)", borderRadius: "var(--radius-lg)", padding: 32, boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <div style={{ font: "700 20px/1.2 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)" }}>Site Completo</div>
                  <div style={{ font: "700 36px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", letterSpacing: "-0.02em", marginTop: 12 }}>R$ 4.997</div>
                  <span style={{ display: "inline-block", marginTop: 14, font: "600 12px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-700)", background: "var(--green-100)", padding: "7px 13px", borderRadius: "var(--radius-pill)" }}>Entrega em 20 dias úteis</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  <PkFeat>Até 8 páginas</PkFeat>
                  <PkFeat>Design exclusivo premium</PkFeat>
                  <PkFeat>Agendamento online incluso</PkFeat>
                  <PkFeat>Blog integrado</PkFeat>
                  <PkFeat>3 rodadas de revisão</PkFeat>
                  <PkFeat>60 dias de suporte</PkFeat>
                </div>
                <Link href="/contato" style={{ marginTop: "auto", textAlign: "center", border: "1px solid var(--neutral-300)", color: "var(--green-800)", font: "600 15px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", padding: "13px 20px", borderRadius: "var(--radius-pill)", display: "block" }}>
                  Solicitar este pacote
                </Link>
              </div>
            </div>
            <p className="s-reveal" style={{ font: "var(--text-sm)", fontFamily: "var(--font-poppins)", color: "var(--text-muted)", margin: "22px 0 0" }}>
              Pagamento: 50% na aprovação + 50% na entrega. Pix, cartão em até 6x sem juros ou boleto.
            </p>
          </div>
        </section>

        {/* MELHORIA DE SITE */}
        <section style={{ background: "var(--white)", padding: "64px 24px 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div className="s-reveal" style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" as never, marginBottom: 8 }}>
              <h2 style={{ font: "700 30px/1.15 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", margin: 0 }}>Melhoria de site</h2>
              <span style={{ font: "var(--text-base)", fontFamily: "var(--font-poppins)", color: "var(--text-muted)" }}>Seu site existe — mas não representa quem você é hoje</span>
            </div>
            <div className="s-reveal" style={{ background: "var(--neutral-100)", borderRadius: "var(--radius-lg)", padding: 36, marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 40, alignItems: "center" }}>
              <div>
                <div style={{ font: "700 22px/1.2 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)" }}>Reformulação de Site</div>
                <div style={{ font: "700 40px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", letterSpacing: "-0.02em", margin: "14px 0" }}>R$ 1.797</div>
                <span style={{ display: "inline-block", font: "600 12px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-700)", background: "var(--white)", padding: "7px 13px", borderRadius: "var(--radius-pill)" }}>Entrega em 12 dias úteis</span>
                <p style={{ font: "var(--text-sm)", fontFamily: "var(--font-poppins)", color: "var(--text-body)", margin: "20px 0 0" }}>
                  Em vez de começar do zero, fazemos a evolução do que você já tem.{" "}
                  <strong style={{ color: "var(--green-800)" }}>Ideal para</strong> profissional com site desatualizado que quer modernizar sem perder o domínio.
                </p>
                <Link href="/contato" style={{ display: "inline-flex", alignItems: "center", gap: 9, marginTop: 22, background: "var(--green-800)", color: "var(--white)", font: "600 15px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", padding: "13px 22px", borderRadius: "var(--radius-pill)" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--lime-500)", display: "inline-block" }} />
                  Solicitar reformulação
                </Link>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "11px 24px" }}>
                <PkFeat>Análise estratégica do site atual</PkFeat>
                <PkFeat>Novo design exclusivo (mantém domínio)</PkFeat>
                <PkFeat>Reestruturação de até 5 páginas</PkFeat>
                <PkFeat>Otimização SEO técnica</PkFeat>
                <PkFeat>Formulário + integração WhatsApp</PkFeat>
                <PkFeat>Google Analytics + Meta Pixel</PkFeat>
                <PkFeat>Otimização de velocidade</PkFeat>
                <PkFeat>2 rodadas de ajustes</PkFeat>
                <PkFeat>30 dias de suporte pós-entrega</PkFeat>
              </div>
            </div>
            <p style={{ font: "var(--text-sm)", fontFamily: "var(--font-poppins)", color: "var(--text-muted)", margin: "18px 0 0" }}>
              Pagamento: 50% na aprovação + 50% na entrega. Pix, cartão em até 6x sem juros ou boleto.
            </p>
          </div>
        </section>

        {/* DESIGN VISUAL */}
        <section style={{ background: "var(--white)", padding: "64px 24px 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div className="s-reveal" style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" as never, marginBottom: 8 }}>
              <h2 style={{ font: "700 30px/1.15 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", margin: 0 }}>Design visual</h2>
              <span style={{ font: "var(--text-base)", fontFamily: "var(--font-poppins)", color: "var(--text-muted)" }}>Imagens tratadas, criativos e materiais para redes e anúncios</span>
            </div>
            <div className="s-card-group" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginTop: 32, alignItems: "start" }}>
              {/* Design Essencial */}
              <div className="s-card" style={{ background: "var(--white)", border: "1px solid var(--neutral-200)", borderRadius: "var(--radius-lg)", padding: 32, boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <div style={{ font: "700 20px/1.2 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)" }}>Design Essencial</div>
                  <div style={{ font: "700 36px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", letterSpacing: "-0.02em", margin: "12px 0 14px" }}>R$ 397</div>
                  <span style={{ display: "inline-block", font: "600 12px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-700)", background: "var(--green-100)", padding: "7px 13px", borderRadius: "var(--radius-pill)" }}>Entrega em 5 dias úteis</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  <PkFeat>10 imagens com tratamento profissional</PkFeat>
                  <PkFeat>2 formatos por imagem (quadrado + vertical)</PkFeat>
                  <PkFeat>Alta resolução</PkFeat>
                  <PkFeat>1 rodada de ajustes (até 3 imagens)</PkFeat>
                </div>
                <Link href="/contato" style={{ marginTop: "auto", textAlign: "center", border: "1px solid var(--neutral-300)", color: "var(--green-800)", font: "600 15px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", padding: "13px 20px", borderRadius: "var(--radius-pill)", display: "block" }}>Solicitar</Link>
              </div>

              {/* Design Combo (destaque) */}
              <div className="s-card" style={{ background: "var(--white)", border: "1.5px solid var(--lime-500)", borderRadius: "var(--radius-lg)", padding: 32, boxShadow: "var(--shadow-md)", display: "flex", flexDirection: "column", gap: 20, position: "relative" }}>
                <span style={{ position: "absolute", top: -13, left: 32, background: "var(--lime-500)", color: "var(--green-800)", font: "600 12px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", padding: "7px 14px", borderRadius: "var(--radius-pill)" }}>⭐ Mais completo</span>
                <div>
                  <div style={{ font: "700 20px/1.2 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)" }}>Design Combo</div>
                  <div style={{ font: "700 36px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", letterSpacing: "-0.02em", margin: "12px 0 14px" }}>R$ 797</div>
                  <span style={{ display: "inline-block", font: "600 12px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-700)", background: "var(--green-100)", padding: "7px 13px", borderRadius: "var(--radius-pill)" }}>Entrega em 7 dias úteis</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  <PkFeat>10 imagens com tratamento profissional</PkFeat>
                  <PkFeat>5 criativos prontos pra Instagram/anúncio</PkFeat>
                  <PkFeat>1 capa de destaque do Instagram</PkFeat>
                  <PkFeat>1 banner para plataforma</PkFeat>
                  <PkFeat>2 rodadas de ajustes</PkFeat>
                  <PkFeat>Pasta organizada no Drive</PkFeat>
                </div>
                <Link href="/contato" style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 9, background: "var(--green-800)", color: "var(--white)", font: "600 15px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", padding: "14px 20px", borderRadius: "var(--radius-pill)" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--lime-500)", display: "inline-block" }} />
                  Solicitar
                </Link>
              </div>

              {/* Presença Completa */}
              <div className="s-card" style={{ background: "var(--green-800)", borderRadius: "var(--radius-lg)", padding: 32, boxShadow: "var(--shadow-md)", display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <div style={{ font: "700 20px/1.2 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--white)" }}>Presença Completa</div>
                  <div style={{ font: "700 32px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--white)", letterSpacing: "-0.02em", margin: "12px 0 6px" }}>
                    R$ 1.497<span style={{ font: "500 16px/1 var(--font-poppins)", color: "var(--green-300)" }}>/mês</span>
                  </div>
                  <span style={{ display: "inline-block", font: "600 12px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", background: "var(--lime-500)", padding: "7px 13px", borderRadius: "var(--radius-pill)" }}>Contrato mínimo de 3 meses</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  {[
                    "20 imagens tratadas por mês",
                    "12 criativos para posts e stories (3/semana)",
                    "4 criativos para anúncio pago",
                    "1 banner mensal",
                    "1 reunião de alinhamento (30 min)",
                    "3 rodadas de ajustes mensais",
                    "Suporte prioritário no WhatsApp",
                  ].map(t => (
                    <div key={t} style={pkFeat}>
                      <span style={{ color: "var(--lime-500)", fontWeight: 700, flexShrink: 0, lineHeight: 1.55 }}>✓</span>
                      <span style={{ font: "var(--text-sm)", fontFamily: "var(--font-poppins)", color: "var(--green-200)" }}>{t}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contato" style={{ marginTop: "auto", textAlign: "center", background: "var(--lime-500)", color: "var(--green-800)", font: "600 15px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", padding: "14px 20px", borderRadius: "var(--radius-pill)", display: "block" }}>
                  Solicitar plano
                </Link>
              </div>
            </div>
            <p style={{ font: "var(--text-sm)", fontFamily: "var(--font-poppins)", color: "var(--text-muted)", margin: "22px 0 0" }}>
              Pacotes únicos: 50% na aprovação + 50% na entrega. Pacote mensal: mensalidade antecipada no dia 1 de cada mês.
            </p>
          </div>
        </section>

        {/* MANUTENÇÃO */}
        <section style={{ background: "var(--white)", padding: "64px 24px 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div className="s-reveal" style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" as never, marginBottom: 8 }}>
              <h2 style={{ font: "700 30px/1.15 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", margin: 0 }}>Manutenção de site</h2>
              <span style={{ font: "var(--text-base)", fontFamily: "var(--font-poppins)", color: "var(--text-muted)" }}>Para quem já tem site da Aphotex e quer parceria contínua</span>
            </div>
            <div className="s-reveal" style={{ background: "var(--neutral-100)", borderRadius: "var(--radius-lg)", padding: 36, marginTop: 24, display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 40 }}>
              <div>
                <div style={{ font: "700 22px/1.2 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)" }}>Plano Manutenção</div>
                <div style={{ font: "700 40px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", letterSpacing: "-0.02em", margin: "14px 0" }}>
                  R$ 197<span style={{ font: "500 18px/1 var(--font-poppins)", color: "var(--text-muted)" }}>/mês</span>
                </div>
                <span style={{ display: "inline-block", font: "600 12px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-700)", background: "var(--white)", padding: "7px 13px", borderRadius: "var(--radius-pill)" }}>
                  Renovação automática · aviso de 30 dias para cancelar
                </span>
                <Link href="/contato" style={{ display: "inline-flex", alignItems: "center", gap: 9, marginTop: 24, background: "var(--green-800)", color: "var(--white)", font: "600 15px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", padding: "13px 22px", borderRadius: "var(--radius-pill)" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--lime-500)", display: "inline-block" }} />
                  Assinar manutenção
                </Link>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
                <div>
                  <div style={{ font: "600 13px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", letterSpacing: "0.1em", textTransform: "uppercase" as never, color: "var(--green-700)", marginBottom: 14 }}>O que inclui</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                    <PkFeat>Até 4 atualizações de conteúdo por mês</PkFeat>
                    <PkFeat>Backup mensal</PkFeat>
                    <PkFeat>Monitoramento de segurança</PkFeat>
                    <PkFeat>Suporte prioritário no WhatsApp (até 2h úteis)</PkFeat>
                    <PkFeat>Verificação de performance (PageSpeed)</PkFeat>
                  </div>
                </div>
                <div>
                  <div style={{ font: "600 13px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", letterSpacing: "0.1em", textTransform: "uppercase" as never, color: "var(--neutral-500)", marginBottom: 14 }}>Não inclui</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                    <PkNo>Criação de páginas novas (orçamento à parte)</PkNo>
                    <PkNo>Mudanças estruturais de design</PkNo>
                    <PkNo>Migração de domínio ou hospedagem</PkNo>
                  </div>
                </div>
              </div>
            </div>
            <p className="s-reveal" style={{ font: "var(--text-base)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", fontWeight: 600, margin: "28px 0 0", maxWidth: 720 }}>
              Não trabalhamos com desconto. O valor reflete o padrão de entrega — qualidade consistente, sem pechincha, sem surpresa.
            </p>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section style={{ background: "var(--green-800)", color: "var(--white)", padding: "90px 24px", marginTop: 76 }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
              <span style={{ display: "inline-block", font: "600 12px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", letterSpacing: "0.14em", textTransform: "uppercase" as never, color: "var(--lime-500)", border: "1px solid rgba(205,234,69,0.4)", borderRadius: "var(--radius-pill)", padding: "7px 14px" }}>Como funciona</span>
              <h2 style={{ font: "700 36px/1.15 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--white)", letterSpacing: "-0.02em", margin: "20px 0 0" }}>Do zero ao ar em quatro etapas simples.</h2>
            </div>
            <div className="s-steps" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22, marginTop: 50 }}>
              {[
                { n: "1", title: "Você preenche a proposta", desc: "Formulário rápido: nome, profissão, pacote de interesse e prazo desejado. Sem ligação surpresa.", dark: false },
                { n: "2", title: "Recebe a proposta em até 2h úteis", desc: "Via WhatsApp, com escopo, prazo, valor e contrato digital. Tudo transparente, sem letra miúda.", dark: false },
                { n: "3", title: "Produção com acompanhamento real", desc: "Atualizações sem você precisar perguntar, rodadas de revisão incluídas. O projeto é seu.", dark: false },
                { n: "4", title: "Entrega + suporte pós-projeto", desc: "Site no ar, arquivos em mãos, suporte de 15 a 60 dias conforme o pacote. E um plano mensal se quiser continuar.", dark: true },
              ].map(({ n, title, desc, dark }) => (
                <div key={n} className="s-step" style={{
                  background: dark ? "var(--lime-500)" : "rgba(255,255,255,0.05)",
                  border: dark ? "none" : "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "var(--radius-lg)", padding: 28,
                }}>
                  <div style={{ font: "700 30px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: dark ? "var(--green-700)" : "var(--lime-500)" }}>{n}</div>
                  <h3 style={{ font: "700 17px/1.3 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: dark ? "var(--green-800)" : "var(--white)", margin: "16px 0 8px" }}>{title}</h3>
                  <p style={{ font: "var(--text-sm)", fontFamily: "var(--font-poppins)", color: dark ? "var(--green-700)" : "var(--green-200)", margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--lime-500)", padding: "74px 24px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <h2 className="s-reveal" style={{ font: "700 38px/1.13 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", letterSpacing: "-0.02em", margin: 0 }}>
              Ainda em dúvida sobre qual pacote escolher?
            </h2>
            <p className="s-reveal" style={{ font: "var(--text-lg)", fontFamily: "var(--font-poppins)", color: "var(--green-700)", margin: "18px auto 0", maxWidth: 560 }}>
              Conte sua profissão e seu objetivo. Você recebe uma recomendação e a proposta em até 2h úteis.
            </p>
            <Link href="/contato" className="s-reveal" style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 30, background: "var(--green-800)", color: "var(--white)", font: "600 17px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", padding: "17px 32px", borderRadius: "var(--radius-pill)", boxShadow: "var(--shadow-md)" }}>
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
