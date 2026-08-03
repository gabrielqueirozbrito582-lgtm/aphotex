"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycby-pa7U9KZhEIu44yIfXl8olFPqxoPiVcqB0PYGCgP5U838cvzFGXMXxyXl1jGWp7k4/exec";

const inputStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "1rem",
  color: "#0F0F0F",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #E5DFCF",
  outline: "none",
  padding: "0.75rem 0",
  width: "100%",
  transition: "border-color 0.2s ease",
};

const labelStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.62rem",
  fontWeight: 500,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "#4A4A4A",
  display: "block",
  marginBottom: "0.25rem",
};

export default function ContatoPage() {
  useEffect(() => { document.title = "Contato — Aphotex Design"; }, []);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    servico: "",
    mensagem: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      });
      setStatus("ok");
      setForm({ nome: "", email: "", whatsapp: "", servico: "", mensagem: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Nav />

      <main style={{ background: "#F5F1E8" }}>
        <section style={{ padding: "6rem 2rem 4rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4A73C",
                marginBottom: "1.5rem",
              }}
            >
              EDIÇÃO 01 · 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3rem, 9vw, 7rem)",
                fontWeight: 400,
                lineHeight: 0.95,
                color: "#1B2D4F",
                marginBottom: "1.25rem",
              }}
            >
              Vamos conversar.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#D4A73C",
                marginBottom: "4rem",
              }}
            >
              PREÇOS DA EDIÇÃO 01 · VÁLIDO ATÉ 31 DE MARÇO DE 2027
            </motion.p>
          </div>
        </section>

        {/* Layout formulário + info */}
        <section style={{ padding: "0 2rem 8rem" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "3fr 2fr",
              gap: "6rem",
              alignItems: "start",
            }}
            className="contato-grid"
          >
            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {status === "ok" ? (
                <div style={{ padding: "3rem 0" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2rem",
                      color: "#1B2D4F",
                      marginBottom: "1rem",
                    }}
                  >
                    Mensagem recebida.
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "#4A4A4A", lineHeight: 1.7 }}>
                    Você receberá uma resposta em até 2h úteis via WhatsApp ou e-mail.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  <div>
                    <label style={labelStyle}>Nome</label>
                    <input
                      style={inputStyle}
                      type="text"
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      onFocus={(e) => (e.target.style.borderBottomColor = "#D4A73C")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "#E5DFCF")}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="form-two-col">
                    <div>
                      <label style={labelStyle}>E-mail</label>
                      <input
                        style={inputStyle}
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onFocus={(e) => (e.target.style.borderBottomColor = "#D4A73C")}
                        onBlur={(e) => (e.target.style.borderBottomColor = "#E5DFCF")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>WhatsApp</label>
                      <input
                        style={inputStyle}
                        type="tel"
                        value={form.whatsapp}
                        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                        onFocus={(e) => (e.target.style.borderBottomColor = "#D4A73C")}
                        onBlur={(e) => (e.target.style.borderBottomColor = "#E5DFCF")}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Serviço de interesse</label>
                    <select
                      style={{ ...inputStyle, cursor: "pointer" }}
                      value={form.servico}
                      onChange={(e) => setForm({ ...form, servico: e.target.value })}
                      onFocus={(e) => (e.target.style.borderBottomColor = "#D4A73C")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "#E5DFCF")}
                    >
                      <option value="">Selecione um pacote</option>
                      <option value="essencial">Site Essencial — R$ 697</option>
                      <option value="profissional">Site Profissional — R$ 1.297</option>
                      <option value="premium">Site Premium — R$ 1.997</option>
                      <option value="reformulacao">Reformulação — R$ 697</option>
                      <option value="design">Design avulso</option>
                      <option value="manutencao">Manutenção — R$ 97/mês</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Mensagem</label>
                    <textarea
                      style={{ ...inputStyle, resize: "none", minHeight: 120 }}
                      rows={4}
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      onFocus={(e) => (e.target.style.borderBottomColor = "#D4A73C")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "#E5DFCF")}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "#F5F1E8",
                        background: "#1B2D4F",
                        border: "none",
                        padding: "1rem 2.5rem",
                        cursor: status === "sending" ? "wait" : "pointer",
                        letterSpacing: "0.04em",
                        opacity: status === "sending" ? 0.7 : 1,
                        transition: "opacity 0.2s ease",
                      }}
                    >
                      {status === "sending" ? "Enviando..." : "Enviar proposta →"}
                    </button>

                    {status === "error" && (
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "#B00020", marginTop: "0.75rem" }}>
                        Erro ao enviar. Tente via WhatsApp.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </motion.div>

            {/* Informações */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ display: "flex", flexDirection: "column", gap: "2.5rem", paddingTop: "0.5rem" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4A4A4A" }}>
                  Resposta
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "#1B2D4F" }}>
                  Em até 2h úteis
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4A4A4A" }}>
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/5511999999999"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "#1B2D4F" }}
                  className="link-mustard"
                >
                  +55 (11) 9 9999-9999
                </a>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4A4A4A" }}>
                  E-mail
                </p>
                <a
                  href="mailto:contato@aphotexdesign.com.br"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "#1B2D4F" }}
                  className="link-mustard"
                >
                  contato@aphotexdesign.com.br
                </a>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4A4A4A" }}>
                  Atendimento
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "#4A4A4A", lineHeight: 1.6 }}>
                  100% online · Todo o Brasil
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid #E5DFCF",
                  paddingTop: "2rem",
                  marginTop: "0.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "1.3rem",
                    lineHeight: 1.4,
                    color: "#1B2D4F",
                  }}
                >
                  &ldquo;A melhor forma de começar é começar.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .contato-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
