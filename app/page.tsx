"use client";

import { useEffect } from "react";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gsap: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ScrollTrigger: any;
  }
}

function waitGSAP(): Promise<void> {
  return new Promise((res) => {
    const t = setInterval(() => {
      if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
        clearInterval(t);
        res();
      }
    }, 40);
  });
}

const stats = [
  { value: "10–20", label: "dias úteis para o site no ar" },
  { value: "5–7",   label: "dias para entregar design" },
  { value: "2h",    label: "para receber a proposta" },
  { value: "100%",  label: "online · todo o Brasil" },
];

const problems = [
  "Cobro R$ 300 por consulta, mas meu Instagram parece de estudante.",
  "Meus clientes chegam por indicação. Mas quando pesquisam meu nome… não acham nada confiável.",
  "Meu concorrente é profissionalmente inferior. Mas tem um site melhor — e está crescendo mais.",
  "Já tentei freelancer. Atrasou, ficou genérico, não entendeu o meu negócio.",
];

const diferenciais = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Entrega em dias, não em meses",
    body: "Sites prontos em 10 a 20 dias úteis. Design em 5 a 7 dias. Prazo combinado é prazo cumprido — sem desculpa, sem surpresa.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Especialistas em profissional liberal",
    body: "Não atendemos qualquer negócio. Entendemos como transmitir autoridade para quem vive de expertise — credenciais, serviços, confiança.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z" />
      </svg>
    ),
    title: "Design exclusivo, nunca template",
    body: "Cada projeto é criado do zero. Sua identidade visual não vai se parecer com a de ninguém. Zero atalho, zero cara genérica.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z" />
      </svg>
    ),
    title: "Você fala direto com quem produz",
    body: "Sem gerente intermediário, sem atendimento robotizado. Via WhatsApp, com resposta em horas e atualizações proativas durante o projeto.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
    title: "Qualidade com preço justo",
    body: "Agências cobram R$ 8.000 a R$ 15.000 pelo mesmo nível de resultado. Aqui você paga entre R$ 1.497 e R$ 4.997 — com qualidade que compete.",
  },
];

const testimonials = [
  {
    initials: "CM", name: "Carolina M.", role: "Psicóloga clínica · São Paulo/SP",
    quote: "\"Eu tinha vergonha de mandar meu site pra potenciais clientes. Depois da Aphotex, passei a usar o site como cartão de visita. Em três semanas, fechei dois contratos novos — ambos vieram pelo site.\"",
  },
  {
    initials: "RT", name: "Rodrigo T.", role: "Consultor financeiro · Curitiba/PR",
    quote: "\"Contratei um freelancer antes e foi uma decepção. Com a Aphotex foi diferente: prazo cumprido, design que combinou com o que eu transmito nos atendimentos. Profissionalismo do início ao fim.\"",
  },
  {
    initials: "AF", name: "Ana F.", role: "Nutricionista · Belo Horizonte/MG",
    quote: "\"O que mais me surpreendeu foi a velocidade. Achei que ia demorar dois meses — ficou pronto em 15 dias. E o resultado ficou melhor do que eu esperava. Meus colegas ficaram perguntando quem fez.\"",
  },
];

/* ── shared inline style helpers ── */
const ff = "var(--font-poppins)";

export default function Home() {
  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    waitGSAP().then(() => {
      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        /* hero — stagger children */
        gsap.from(".hero-content > *", {
          opacity: 0, y: 30, duration: 0.7, ease: "power3.out",
          stagger: 0.12, delay: 0.15,
        });
        gsap.from(".hero-image", {
          opacity: 0, x: 40, duration: 0.9, ease: "power3.out", delay: 0.3,
        });
        gsap.from(".hero-badge-bottom", {
          opacity: 0, x: -20, duration: 0.7, ease: "back.out(1.4)", delay: 0.7,
        });
        gsap.from(".hero-badge-top", {
          opacity: 0, x: 20, duration: 0.7, ease: "back.out(1.4)", delay: 0.85,
        });

        /* trust band */
        gsap.from(".stat-item", {
          opacity: 0, y: 24, duration: 0.6, ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".trust-band", start: "top 88%" },
        });

        /* section reveals */
        (gsap.utils.toArray(".reveal") as HTMLElement[]).forEach((el) => {
          gsap.from(el, {
            opacity: 0, y: 36, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
          });
        });

        /* problem cards */
        gsap.from(".problem-card", {
          opacity: 0, y: 28, duration: 0.6, ease: "power2.out", stagger: 0.1,
          scrollTrigger: { trigger: ".problem-grid", start: "top 85%" },
        });

        /* diferencial cards */
        gsap.from(".dif-card", {
          opacity: 0, y: 28, scale: 0.97, duration: 0.55, ease: "power2.out", stagger: 0.09,
          scrollTrigger: { trigger: ".dif-grid", start: "top 82%" },
        });

        /* testimonial cards */
        gsap.from(".testi-card", {
          opacity: 0, y: 28, duration: 0.6, ease: "power2.out", stagger: 0.12,
          scrollTrigger: { trigger: ".testi-grid", start: "top 85%" },
        });

        /* CTA final */
        gsap.from(".cta-final > *", {
          opacity: 0, y: 24, duration: 0.65, ease: "power2.out", stagger: 0.1,
          scrollTrigger: { trigger: ".cta-final", start: "top 85%" },
        });

        /* hover lift on cards */
        document.querySelectorAll<HTMLElement>(".card-hover").forEach((card) => {
          card.addEventListener("mouseenter", () =>
            gsap.to(card, { y: -4, boxShadow: "0 12px 32px rgba(14,42,30,0.12)", duration: 0.25, ease: "power2.out" })
          );
          card.addEventListener("mouseleave", () =>
            gsap.to(card, { y: 0, boxShadow: "0 2px 8px rgba(14,42,30,0.06)", duration: 0.25, ease: "power2.out" })
          );
        });
      });
    });

    return () => ctx?.revert();
  }, []);

  return (
    <>
      <Nav />

      <main>
        {/* ── HERO ──────────────────────────────────────────── */}
        <section style={{ background: "var(--white)", padding: "72px 24px 40px" }}>
          <div style={{
            maxWidth: "var(--container)", margin: "0 auto",
            display: "grid", gridTemplateColumns: "1.05fr 0.95fr",
            gap: 56, alignItems: "center",
          }}>
            {/* left */}
            <div className="hero-content" style={{ display: "flex", flexDirection: "column" }}>
              <span className="rd-eyebrow">Sites &amp; design para profissionais liberais</span>
              <h1 style={{
                font: `700 54px/1.08 ${ff}`, fontFamily: ff,
                color: "var(--green-800)", letterSpacing: "-0.02em",
                margin: "22px 0 0", textWrap: "balance" as never,
              }}>
                Sua competência é real.<br />
                Sua imagem digital precisa{" "}
                <span className="rd-mark">dizer isso.</span>
              </h1>
              <p style={{
                font: "var(--text-lg)", fontFamily: ff,
                color: "var(--text-body)", maxWidth: 520, margin: "24px 0 0",
              }}>
                A Aphotex cria sites e design visual para profissionais que vivem da própria expertise — terapeutas, advogados, coaches, nutricionistas e consultores que cobram pelo que sabem, mas ainda não têm uma presença digital à altura do que entregam.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginTop: 34 }}>
                <Link
                  href="/contato"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "var(--green-800)", color: "var(--white)",
                    font: `600 17px/1 ${ff}`, fontFamily: ff,
                    padding: "16px 28px", borderRadius: "var(--radius-pill)",
                    transition: `background var(--dur-base) var(--ease-out)`,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--green-700)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--green-800)")}
                >
                  <span style={{
                    width: 9, height: 9, borderRadius: "50%",
                    background: "var(--lime-500)",
                    boxShadow: "0 0 0 4px rgba(205,234,69,0.25)",
                  }} />
                  Solicitar proposta gratuita →
                </Link>
                <Link
                  href="/servicos"
                  style={{
                    display: "inline-flex", alignItems: "center",
                    font: `600 16px/1 ${ff}`, fontFamily: ff,
                    color: "var(--green-800)", padding: "16px 8px",
                  }}
                >
                  Ver pacotes e preços
                </Link>
              </div>
            </div>

            {/* right — image placeholder */}
            <div className="hero-image" style={{ position: "relative" }}>
              <div style={{
                width: "100%", height: 460,
                background: "var(--neutral-100)",
                borderRadius: 22,
                boxShadow: "var(--shadow-lg)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--neutral-300)",
                font: `500 14px/1 ${ff}`, fontFamily: ff,
              }}>
                Foto de um profissional
              </div>

              {/* badge bottom-left */}
              <div className="hero-badge-bottom" style={{
                position: "absolute", left: -22, bottom: 34,
                display: "inline-flex", alignItems: "center", gap: 12,
                background: "var(--lime-500)", color: "var(--green-800)",
                borderRadius: "var(--radius-pill)", padding: "14px 22px",
                boxShadow: "var(--shadow-md)",
              }}>
                <span style={{ font: `700 22px/1 ${ff}`, fontFamily: ff, letterSpacing: "-0.02em" }}>10 dias</span>
                <span style={{ font: `500 12px/1.25 ${ff}`, fontFamily: ff, color: "var(--green-700)", maxWidth: 96 }}>
                  do briefing ao site no ar
                </span>
              </div>

              {/* badge top-right */}
              <div className="hero-badge-top" style={{
                position: "absolute", right: -16, top: 30,
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "var(--white)", color: "var(--green-800)",
                borderRadius: "var(--radius-pill)", padding: "11px 18px",
                boxShadow: "var(--shadow-md)", border: "1px solid var(--neutral-200)",
              }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green-500)" }} />
                <span style={{ font: `600 13px/1 ${ff}`, fontFamily: ff }}>Design exclusivo, nunca template</span>
              </div>
            </div>
          </div>

          {/* Trust band */}
          <div className="trust-band" style={{
            maxWidth: "var(--container)", margin: "56px auto 0",
            padding: "30px 24px",
            background: "var(--neutral-100)", borderRadius: "var(--radius-lg)",
            display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24,
          }}>
            {stats.map((s) => (
              <div key={s.label} className="stat-item" style={{ textAlign: "center" }}>
                <div className="rd-figure">{s.value}</div>
                <div style={{ font: "var(--text-sm)", fontFamily: ff, color: "var(--text-muted)", marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROBLEMA ──────────────────────────────────────── */}
        <section style={{ background: "var(--neutral-100)", padding: "88px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <span className="rd-eyebrow reveal">O problema</span>
            <h2 className="reveal" style={{
              font: `700 38px/1.15 ${ff}`, fontFamily: ff,
              color: "var(--green-800)", letterSpacing: "-0.02em",
              margin: "20px 0 0", textWrap: "balance" as never,
            }}>
              Quando alguém pesquisa o seu nome no Google… o que encontra?
            </h2>
            <p className="reveal" style={{
              font: "var(--text-lg)", fontFamily: ff,
              color: "var(--text-body)", margin: "22px auto 0", maxWidth: 720,
            }}>
              Você tem anos de experiência. Clientes que confiam em você. Um serviço que transforma a vida de quem passa pela sua porta. Mas um site com cara de 2015 — ou nenhum site — fala antes de você. Em segundos, a pessoa já formou uma opinião.
            </p>
          </div>

          <div className="problem-grid" style={{
            maxWidth: 1080, margin: "48px auto 0",
            display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22,
          }}>
            {problems.map((p) => (
              <div key={p} className="problem-card card-hover" style={{
                background: "var(--white)",
                border: "1px solid var(--neutral-200)",
                borderLeft: "3px solid var(--lime-500)",
                borderRadius: "var(--radius-lg)",
                padding: 28, boxShadow: "var(--shadow-sm)",
              }}>
                <p style={{ font: `600 18px/1.5 ${ff}`, fontFamily: ff, color: "var(--green-800)", margin: 0 }}>
                  &ldquo;{p}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <p className="reveal" style={{
            maxWidth: 760, margin: "40px auto 0",
            textAlign: "center", font: "var(--text-lg)", fontFamily: ff,
            color: "var(--text-body)",
          }}>
            Se alguma dessas frases soou familiar, o problema não é o seu trabalho. É a distância entre quem você é e o que a internet mostra sobre você — e essa distância tem um custo invisível toda semana.
          </p>
        </section>

        {/* ── SOLUÇÃO (forest band) ─────────────────────────── */}
        <section style={{ background: "var(--green-800)", color: "var(--white)", padding: "90px 24px" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div style={{ maxWidth: 760 }}>
              <span className="reveal" style={{
                display: "inline-block",
                font: `600 12px/1 ${ff}`, fontFamily: ff,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--lime-500)",
                border: "1px solid rgba(205,234,69,0.4)",
                borderRadius: "var(--radius-pill)", padding: "7px 14px",
              }}>
                A solução
              </span>
              <h2 className="reveal" style={{
                font: `700 40px/1.13 ${ff}`, fontFamily: ff,
                color: "var(--white)", letterSpacing: "-0.02em",
                margin: "22px 0 0", textWrap: "balance" as never,
              }}>
                Presença digital com o mesmo nível da{" "}
                <span className="rd-mark" style={{ color: "var(--green-900)" }}>autoridade</span>{" "}
                que você já tem.
              </h2>
              <p className="reveal" style={{
                font: "var(--text-lg)", fontFamily: ff,
                color: "var(--green-200)", margin: "22px 0 0",
              }}>
                Não criamos "site bonito". Criamos presença digital estratégica — que transmite autoridade desde o primeiro segundo, converte visitantes em clientes e faz o seu nome aparecer como referência. Em dias, não em meses. Com design exclusivo. Por uma fração do custo de uma agência tradicional.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginTop: 46 }}>
              <div className="reveal" style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "var(--radius-lg)", padding: 30,
              }}>
                <div style={{ font: `600 13px/1 ${ff}`, fontFamily: ff, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--green-300)" }}>Antes</div>
                <p style={{ font: `600 21px/1.45 ${ff}`, fontFamily: ff, color: "var(--white)", margin: "14px 0 0" }}>
                  Clientes que hesitam porque a imagem online não convence.
                </p>
              </div>
              <div className="reveal" style={{
                background: "var(--lime-500)",
                borderRadius: "var(--radius-lg)", padding: 30,
              }}>
                <div style={{ font: `600 13px/1 ${ff}`, fontFamily: ff, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--green-700)" }}>Depois</div>
                <p style={{ font: `600 21px/1.45 ${ff}`, fontFamily: ff, color: "var(--green-800)", margin: "14px 0 0" }}>
                  Uma presença digital que fecha por você — mesmo quando você não está disponível.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIFERENCIAIS ──────────────────────────────────── */}
        <section style={{ background: "var(--white)", padding: "90px 24px" }}>
          <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
            <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
              <span className="rd-eyebrow reveal">Diferenciais</span>
              <h2 className="reveal" style={{
                font: `700 38px/1.15 ${ff}`, fontFamily: ff,
                color: "var(--green-800)", letterSpacing: "-0.02em", margin: "20px 0 0",
              }}>
                Por que a Aphotex — e não qualquer designer ou agência?
              </h2>
            </div>

            <div className="dif-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(3,1fr)",
              gap: 22, marginTop: 48,
            }}>
              {diferenciais.map((d) => (
                <div key={d.title} className="dif-card card-hover" style={{
                  background: "var(--white)",
                  border: "1px solid var(--neutral-200)",
                  borderRadius: "var(--radius-lg)", padding: 28,
                  boxShadow: "var(--shadow-sm)",
                }}>
                  <span style={{
                    display: "inline-flex", width: 46, height: 46,
                    borderRadius: "var(--radius-md)",
                    background: "var(--green-100)", color: "var(--green-700)",
                    alignItems: "center", justifyContent: "center",
                  }}>
                    {d.icon}
                  </span>
                  <h3 style={{ font: `700 19px/1.3 ${ff}`, fontFamily: ff, color: "var(--green-800)", margin: "18px 0 8px" }}>
                    {d.title}
                  </h3>
                  <p style={{ font: "var(--text-sm)", fontFamily: ff, color: "var(--text-body)", margin: 0 }}>
                    {d.body}
                  </p>
                </div>
              ))}

              {/* CTA card */}
              <div className="dif-card" style={{
                background: "var(--green-800)",
                borderRadius: "var(--radius-lg)", padding: 28,
                display: "flex", flexDirection: "column", justifyContent: "center",
                color: "var(--white)",
              }}>
                <h3 style={{ font: `700 21px/1.3 ${ff}`, fontFamily: ff, color: "var(--white)", margin: "0 0 14px" }}>
                  Pronto para fechar por você?
                </h3>
                <Link
                  href="/contato"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    alignSelf: "flex-start",
                    background: "var(--lime-500)", color: "var(--green-800)",
                    font: `600 15px/1 ${ff}`, fontFamily: ff,
                    padding: "13px 22px", borderRadius: "var(--radius-pill)",
                  }}
                >
                  Solicitar proposta →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ───────────────────────────────────── */}
        <section style={{ background: "var(--neutral-100)", padding: "90px 24px" }}>
          <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
            <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
              <span className="rd-eyebrow reveal">Depoimentos</span>
              <h2 className="reveal" style={{
                font: `700 38px/1.15 ${ff}`, fontFamily: ff,
                color: "var(--green-800)", letterSpacing: "-0.02em", margin: "20px 0 0",
              }}>
                Quem já trocou a imagem amadora por presença de verdade
              </h2>
            </div>

            <div className="testi-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(3,1fr)",
              gap: 22, marginTop: 48,
            }}>
              {testimonials.map((t) => (
                <div key={t.name} className="testi-card card-hover" style={{
                  background: "var(--white)",
                  border: "1px solid var(--neutral-200)",
                  borderRadius: "var(--radius-lg)", padding: 30,
                  boxShadow: "var(--shadow-sm)",
                  display: "flex", flexDirection: "column", gap: 16,
                }}>
                  <div style={{ color: "var(--lime-600)", fontSize: 16, letterSpacing: 2 }}>★★★★★</div>
                  <p style={{ font: `500 16px/1.6 ${ff}`, fontFamily: ff, color: "var(--neutral-700)", margin: 0, flex: 1 }}>
                    {t.quote}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: "var(--green-100)", color: "var(--green-700)",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      font: `700 16px/1 ${ff}`, fontFamily: ff,
                    }}>
                      {t.initials}
                    </span>
                    <div>
                      <div style={{ font: `600 14px/1.2 ${ff}`, fontFamily: ff, color: "var(--green-800)" }}>{t.name}</div>
                      <div style={{ font: "var(--text-xs)", fontFamily: ff, color: "var(--text-muted)" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{
              textAlign: "center", font: "var(--text-xs)", fontFamily: ff,
              color: "var(--text-muted)", margin: "24px 0 0",
            }}>
              Depoimentos ilustrativos para aprovação — serão substituídos por reais antes da publicação.
            </p>
          </div>
        </section>

        {/* ── CTA FINAL ─────────────────────────────────────── */}
        <section style={{ background: "var(--lime-500)", padding: "80px 24px" }}>
          <div className="cta-final" style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{
              font: `700 42px/1.12 ${ff}`, fontFamily: ff,
              color: "var(--green-800)", letterSpacing: "-0.02em",
              margin: 0, textWrap: "balance" as never,
            }}>
              Sua imagem digital não pode esperar mais.
            </h2>
            <p style={{
              font: "var(--text-lg)", fontFamily: ff,
              color: "var(--green-700)", margin: "20px auto 0", maxWidth: 600,
            }}>
              Cada semana com presença amadora é uma semana de clientes que chegam — e vão embora sem fechar. Comece agora.
            </p>
            <Link
              href="/contato"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                marginTop: 34,
                background: "var(--green-800)", color: "var(--white)",
                font: `600 17px/1 ${ff}`, fontFamily: ff,
                padding: "17px 32px", borderRadius: "var(--radius-pill)",
                boxShadow: "var(--shadow-md)",
                transition: `background var(--dur-base) var(--ease-out)`,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--green-700)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--green-800)")}
            >
              <span style={{
                width: 9, height: 9, borderRadius: "50%",
                background: "var(--lime-500)",
                boxShadow: "0 0 0 4px rgba(255,255,255,0.25)",
              }} />
              Solicitar proposta gratuita →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
