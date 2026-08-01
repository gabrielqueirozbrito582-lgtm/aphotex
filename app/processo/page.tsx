"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const etapas = [
  {
    n: "01",
    title: "Briefing detalhado",
    prazo: "1–2 dias",
    body: "Começamos ouvindo. Formulários pensados para captar tudo que precisamos saber — sem reunião longa, sem enrolação. Você preenche no seu tempo, com a atenção que o projeto merece.",
  },
  {
    n: "02",
    title: "Estratégia de copy",
    prazo: "2 dias",
    body: "Cada palavra é pensada. Aplicamos frameworks de copywriting profissional — AIDA, PAS, storytelling — adaptados ao seu nicho específico. O texto que convence vem antes do design que impressiona.",
  },
  {
    n: "03",
    title: "Direção de arte exclusiva",
    prazo: "1–2 dias",
    body: "Pesquisamos referências fora do óbvio. Cada projeto ganha um conceito visual único — paleta, tipografia, ritmo de layout. Não existe projeto nosso que se parece com outro.",
  },
  {
    n: "04",
    title: "Desenvolvimento em código próprio",
    prazo: "3–5 dias",
    body: "Nada de WordPress genérico. Seu site é construído em Next.js — a tecnologia por trás de grandes marcas digitais. Velocidade, segurança, flexibilidade que plataformas prontas não entregam.",
  },
  {
    n: "05",
    title: "Refinamento cirúrgico",
    prazo: "1–2 dias",
    body: "É aqui que saímos da média. Revisamos hero, seções-chave e cada detalhe até nível de estúdio internacional. O refinamento é onde 80% do impacto visual acontece.",
  },
  {
    n: "06",
    title: "Entrega e suporte contínuo",
    prazo: "Contínuo",
    body: "Publicação, treinamento sobre uso e suporte real via WhatsApp após a entrega. Você nunca fica sozinho com um site que não entende. E se precisar de ajustes, estamos a uma mensagem de distância.",
  },
];

export default function ProcessoPage() {
  return (
    <>
      <Nav />

      <main style={{ background: "#F5F1E8" }}>
        {/* Header */}
        <section style={{ padding: "6rem 2rem 4rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(4rem, 10vw, 8rem)",
                fontWeight: 400,
                lineHeight: 0.95,
                color: "#1B2D4F",
                marginBottom: "3rem",
              }}
            >
              Processo
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                borderTop: "1px solid #E5DFCF",
                paddingTop: "2rem",
                maxWidth: 600,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)",
                  lineHeight: 1.6,
                  color: "#1B2D4F",
                }}
              >
                Nosso processo é feito para ser transparente. Você sabe onde está a cada momento — e por quê.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: "0 2rem 8rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {etapas.map((e, i) => (
              <motion.div
                key={e.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr",
                  gap: "3rem",
                  paddingTop: "3.5rem",
                  paddingBottom: "3.5rem",
                  borderBottom: "1px solid #E5DFCF",
                }}
                className="etapa-row"
              >
                {/* Número */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingTop: "0.5rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(3.5rem, 7vw, 6rem)",
                      fontWeight: 400,
                      color: "#E5DFCF",
                      lineHeight: 1,
                    }}
                  >
                    {e.n}
                  </span>
                </div>

                {/* Conteúdo */}
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                        fontWeight: 400,
                        color: "#1B2D4F",
                        lineHeight: 1.2,
                      }}
                    >
                      {e.title}
                    </h2>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.65rem",
                        fontWeight: 500,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#D4A73C",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {e.prazo}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.05rem",
                      lineHeight: 1.75,
                      color: "#4A4A4A",
                    }}
                  >
                    {e.body}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                paddingTop: "5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  fontWeight: 400,
                  color: "#1B2D4F",
                }}
              >
                Vamos começar o seu?
              </h2>
              <Link
                href="/contato"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "#F5F1E8",
                  background: "#1B2D4F",
                  padding: "1rem 2rem",
                  display: "inline-block",
                  letterSpacing: "0.04em",
                  alignSelf: "flex-start",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Solicitar proposta →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 600px) {
          .etapa-row { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      `}</style>
    </>
  );
}
