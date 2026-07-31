"use client";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

declare global { interface Window { gsap: any; ScrollTrigger: any } }

function waitGSAP(cb: () => void) {
  if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) { cb(); return; }
  const t = setInterval(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) { clearInterval(t); cb(); }
  }, 80);
}

const pacotes = [
  "Landing Page — R$ 1.497",
  "Site Profissional — R$ 2.997",
  "Site Completo — R$ 4.997",
  "Reformulação de Site — R$ 1.797",
  "Design Essencial — R$ 397",
  "Design Combo — R$ 797",
  "Presença Completa — R$ 1.497/mês",
  "Manutenção — R$ 197/mês",
  "Não sei ainda, quero orientação",
];

const inputStyle = {
  width: "100%",
  border: "1px solid var(--neutral-200)",
  borderRadius: "var(--radius-md)",
  padding: "14px 16px",
  font: "400 15px/1 var(--font-poppins)",
  fontFamily: "var(--font-poppins)",
  color: "var(--neutral-900)",
  background: "var(--white)",
  outline: "none",
  transition: "border-color 220ms",
  display: "block",
};

const labelStyle = {
  display: "block",
  font: "600 13px/1 var(--font-poppins)",
  fontFamily: "var(--font-poppins)",
  color: "var(--green-800)",
  marginBottom: 8,
  letterSpacing: "0.01em",
};

export default function ContatoPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ nome: "", profissao: "", email: "", whatsapp: "", pacote: "", mensagem: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const WEBHOOK_URL =
    "https://script.google.com/macros/s/AKfycby-pa7U9KZhEIu44yIfXl8olFPqxoPiVcqB0PYGCgP5U838cvzFGXMXxyXl1jGWp7k4/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erro ao enviar");
      if (typeof window !== "undefined" && window.gsap) {
        window.gsap.to(".ct-form", { opacity: 0, y: -20, duration: 0.4, ease: "power2.in", onComplete: () => setSent(true) });
      } else {
        setSent(true);
      }
    } catch {
      setError("Não foi possível enviar. Tente novamente ou entre em contato pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    waitGSAP(() => {
      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".ct-hero > *", {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
      });

      gsap.from(".ct-form-wrap", {
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".ct-form-wrap", start: "top 85%", toggleActions: "play none none none" },
      });

      (gsap.utils.toArray(".ct-info-item") as Element[]).forEach((el, i) => {
        gsap.from(el, {
          x: 30, opacity: 0, duration: 0.55, delay: i * 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".ct-info", start: "top 82%", toggleActions: "play none none none" },
        });
      });
    });
  }, []);

  useEffect(() => {
    if (sent && typeof window !== "undefined" && window.gsap) {
      window.gsap.from(".ct-success > *", {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
      });
    }
  }, [sent]);

  return (
    <>
      <Nav />
      <main>
        {/* HEADER */}
        <section style={{ background: "var(--neutral-100)", padding: "72px 24px 60px" }}>
          <div className="ct-hero" style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <span className="rd-eyebrow">Solicitar proposta</span>
            <h1 style={{
              font: "700 46px/1.12 var(--font-poppins)", fontFamily: "var(--font-poppins)",
              color: "var(--green-800)", letterSpacing: "-0.02em", margin: "20px 0 0",
              textWrap: "balance" as never,
            }}>
              Proposta em até <span className="rd-mark">2h úteis.</span>
            </h1>
            <p style={{ font: "var(--text-lg)", fontFamily: "var(--font-poppins)", color: "var(--text-body)", margin: "22px auto 0", maxWidth: 560 }}>
              Preencha abaixo. Nada de ligação surpresa — você recebe a proposta diretamente no WhatsApp.
            </p>
          </div>
        </section>

        {/* FORM + INFO */}
        <section style={{ background: "var(--white)", padding: "76px 24px 88px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 56, alignItems: "start" }}>
            {/* Form */}
            <div className="ct-form-wrap">
              {sent ? (
                <div className="ct-success" style={{ background: "var(--green-100)", borderRadius: "var(--radius-lg)", padding: "48px 40px", textAlign: "center" }}>
                  <div style={{ font: "700 48px/1 var(--font-poppins)", color: "var(--lime-500)" }}>✓</div>
                  <h2 style={{ font: "700 28px/1.2 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", margin: "20px 0 0" }}>
                    Recebemos sua solicitação!
                  </h2>
                  <p style={{ font: "var(--text-base)", fontFamily: "var(--font-poppins)", color: "var(--text-body)", margin: "16px 0 0", maxWidth: 380, marginLeft: "auto", marginRight: "auto" }}>
                    Em até 2h úteis você recebe a proposta personalizada no WhatsApp. Obrigado, {form.nome || "profissional"}!
                  </p>
                </div>
              ) : (
                <form className="ct-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                    <div>
                      <label style={labelStyle}>Nome completo *</label>
                      <input
                        required name="nome" value={form.nome} onChange={handleChange}
                        placeholder="Seu nome"
                        onFocus={() => setFocusedField("nome")} onBlur={() => setFocusedField(null)}
                        style={{ ...inputStyle, borderColor: focusedField === "nome" ? "var(--green-600)" : "var(--neutral-200)" }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Profissão *</label>
                      <input
                        required name="profissao" value={form.profissao} onChange={handleChange}
                        placeholder="Ex: Advogado, Psicólogo..."
                        onFocus={() => setFocusedField("profissao")} onBlur={() => setFocusedField(null)}
                        style={{ ...inputStyle, borderColor: focusedField === "profissao" ? "var(--green-600)" : "var(--neutral-200)" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                    <div>
                      <label style={labelStyle}>E-mail *</label>
                      <input
                        required type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="seu@email.com"
                        onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)}
                        style={{ ...inputStyle, borderColor: focusedField === "email" ? "var(--green-600)" : "var(--neutral-200)" }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>WhatsApp *</label>
                      <input
                        required name="whatsapp" value={form.whatsapp} onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        onFocus={() => setFocusedField("whatsapp")} onBlur={() => setFocusedField(null)}
                        style={{ ...inputStyle, borderColor: focusedField === "whatsapp" ? "var(--green-600)" : "var(--neutral-200)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Pacote de interesse *</label>
                    <select
                      required name="pacote" value={form.pacote} onChange={handleChange}
                      onFocus={() => setFocusedField("pacote")} onBlur={() => setFocusedField(null)}
                      style={{ ...inputStyle, cursor: "pointer", borderColor: focusedField === "pacote" ? "var(--green-600)" : "var(--neutral-200)", appearance: "none" as never, backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%235A655F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
                    >
                      <option value="">Selecione um pacote</option>
                      {pacotes.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Conte um pouco sobre seu projeto</label>
                    <textarea
                      name="mensagem" value={form.mensagem} onChange={handleChange}
                      rows={4} placeholder="Ex: tenho um consultório de psicologia, quero um site que transmita confiança e profissionalismo..."
                      onFocus={() => setFocusedField("mensagem")} onBlur={() => setFocusedField(null)}
                      style={{ ...inputStyle, resize: "vertical" as never, lineHeight: 1.6, borderColor: focusedField === "mensagem" ? "var(--green-600)" : "var(--neutral-200)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                      background: loading ? "var(--green-600)" : "var(--green-800)", color: "var(--white)",
                      font: "600 16px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)",
                      padding: "17px 32px", borderRadius: "var(--radius-pill)",
                      border: "none", cursor: loading ? "not-allowed" : "pointer", boxShadow: "var(--shadow-md)",
                      transition: "transform 150ms, box-shadow 150ms, background 150ms",
                      alignSelf: "flex-start", opacity: loading ? 0.8 : 1,
                    }}
                    onMouseEnter={e => { if (!loading) { (e.currentTarget).style.transform = "translateY(-2px)"; (e.currentTarget).style.boxShadow = "var(--shadow-lg)"; }}}
                    onMouseLeave={e => { (e.currentTarget).style.transform = ""; (e.currentTarget).style.boxShadow = "var(--shadow-md)"; }}
                  >
                    <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--lime-500)", boxShadow: "0 0 0 3px rgba(205,234,69,0.3)", display: "inline-block" }} />
                    {loading ? "Enviando..." : "Enviar e receber proposta →"}
                  </button>
                  {error && (
                    <p style={{ font: "var(--text-sm)", fontFamily: "var(--font-poppins)", color: "#c0392b", margin: 0, background: "#fdecea", borderRadius: "var(--radius-md)", padding: "12px 16px" }}>
                      {error}
                    </p>
                  )}
                  <p style={{ font: "var(--text-xs)", fontFamily: "var(--font-poppins)", color: "var(--text-muted)", margin: 0 }}>
                    Sem spam. Seus dados são usados apenas para enviar a proposta.
                  </p>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="ct-info" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div className="ct-info-item" style={{ background: "var(--neutral-100)", borderRadius: "var(--radius-lg)", padding: "28px 24px" }}>
                <div style={{ font: "700 17px/1.3 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", marginBottom: 10 }}>⚡ Resposta em 2h úteis</div>
                <p style={{ font: "var(--text-sm)", fontFamily: "var(--font-poppins)", color: "var(--text-body)", margin: 0 }}>Você recebe proposta detalhada com escopo, prazo e valor — direto no WhatsApp. Sem ligação surpresa.</p>
              </div>
              <div className="ct-info-item" style={{ background: "var(--neutral-100)", borderRadius: "var(--radius-lg)", padding: "28px 24px" }}>
                <div style={{ font: "700 17px/1.3 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", marginBottom: 10 }}>🇧🇷 100% online</div>
                <p style={{ font: "var(--text-sm)", fontFamily: "var(--font-poppins)", color: "var(--text-body)", margin: 0 }}>Atendemos todo o Brasil. Reuniões via WhatsApp ou videochamada quando necessário.</p>
              </div>
              <div className="ct-info-item" style={{ background: "var(--green-800)", borderRadius: "var(--radius-lg)", padding: "28px 24px" }}>
                <div style={{ font: "700 17px/1.3 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--white)", marginBottom: 10 }}>🔒 Sem burocracia</div>
                <p style={{ font: "var(--text-sm)", fontFamily: "var(--font-poppins)", color: "var(--green-200)", margin: 0 }}>Contrato digital, pagamento seguro, atualizações durante todo o processo. Transparência total.</p>
              </div>
              <div className="ct-info-item" style={{ background: "var(--neutral-100)", borderRadius: "var(--radius-lg)", padding: "28px 24px" }}>
                <div style={{ font: "600 13px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", letterSpacing: "0.1em", textTransform: "uppercase" as never, color: "var(--green-700)", marginBottom: 14 }}>Formas de pagamento</div>
                <div style={{ display: "flex", flexWrap: "wrap" as never, gap: 8 }}>
                  {["Pix", "Cartão até 6×", "Boleto"].map(m => (
                    <span key={m} style={{ font: "600 12px/1 var(--font-poppins)", fontFamily: "var(--font-poppins)", color: "var(--green-800)", background: "var(--white)", border: "1px solid var(--neutral-200)", borderRadius: "var(--radius-pill)", padding: "7px 13px" }}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
