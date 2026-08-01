"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const secoes = [
  {
    num: "I.",
    title: "De onde viemos",
    body: [
      "A Aphotex nasceu de uma observação recorrente: profissionais excepcionais com presença digital genérica. Terapeutas que transformam vidas atendendo com um site de 2012. Advogados que fecham contratos complexos com Instagram sem identidade. Consultores que cobram por hora o que agências cobram por projeto — mas aparecem online como freelancers iniciantes.",
      "A distância entre quem esses profissionais são e o que a internet mostra sobre eles é real, é mensurável e tem custo. Criamos a Aphotex para fechar essa distância — com design, copy e estratégia pensados especificamente para quem vive de expertise.",
    ],
  },
  {
    num: "II.",
    title: "Por quem trabalhamos",
    body: [
      "Trabalhamos para profissionais liberais que já têm autoridade no que fazem, mas ainda não têm uma presença digital à altura dessa autoridade. Psicólogos, advogados, coaches, nutricionistas, consultores, médicos, arquitetos, professores e qualquer profissional que venda o próprio conhecimento.",
      "Não trabalhamos para qualquer tipo de negócio. Essa especialização não é capricho — é o que garante que entendemos profundamente as nuances do seu mercado, as dúvidas dos seus clientes e a linguagem que constrói confiança no seu nicho específico.",
    ],
  },
  {
    num: "III.",
    title: "Como pensamos design",
    body: [
      "Design, para nós, não é estética. É comunicação. Cada decisão visual — a escolha da fonte, a proporção dos espaços, a hierarquia das informações — comunica algo antes que qualquer palavra seja lida. Um site mal projetado diz 'não confie em mim' antes de você chegar ao primeiro parágrafo.",
      "Trabalhamos com referências editoriais: revistas independentes, estúdios internacionais, publicações que transformaram tipografia e espaço em branco em linguagem própria. Não porque queremos copiar, mas porque esse padrão visual transmite algo específico: atenção, intenção, qualidade.",
      "Cada site que criamos tem conceito visual único. Uma paleta pensada. Uma tipografia escolhida. Um ritmo de layout que reflete a personalidade do profissional — não um template com cores trocadas.",
    ],
  },
  {
    num: "IV.",
    title: "O que buscamos",
    body: [
      "Buscamos construir um portfólio que seja, em si mesmo, uma declaração de padrão. Cada projeto entregue deve ser capaz de ficar em uma galeria de referências ao lado de trabalhos de estúdios internacionais — não porque somos maiores que eles, mas porque aplicamos o mesmo rigor.",
      "A Aphotex está em sua Edição 01 — momento de construção da base do estúdio. Trabalhamos com preços promocionais para os primeiros 10 clientes, em contrapartida ao uso dos projetos como parte do portfólio inaugural. Uma troca honesta: você recebe qualidade de estúdio premium por preço de lançamento; nós construímos referências reais.",
    ],
  },
];

export default function SobrePage() {
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
                fontSize: "clamp(4rem, 10vw, 8rem)",
                fontWeight: 400,
                lineHeight: 0.95,
                color: "#1B2D4F",
                marginBottom: "3rem",
              }}
            >
              Sobre
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ borderTop: "1px solid #E5DFCF", paddingTop: "2rem", maxWidth: 680 }}
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
                Somos um estúdio editorial de design premium, fundado com uma missão simples: dar presença digital ao trabalho de quem não pode parecer amador.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Fundador */}
        <section style={{ padding: "0 2rem 4rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                background: "#1B2D4F",
                padding: "3rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                maxWidth: 480,
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  background: "rgba(245,241,232,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "#F5F1E8", opacity: 0.4 }}>GR</span>
              </div>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", color: "#F5F1E8" }}>
                Gabriel R.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#D4A73C" }}>
                Fundador · Aphotex Design
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.65, color: "rgba(245,241,232,0.6)", marginTop: "0.5rem" }}>
                São Paulo, Brasil · 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Seções */}
        <section style={{ padding: "0 2rem 8rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {secoes.map((s, i) => (
              <motion.article
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.05 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "4rem",
                  paddingTop: "4rem",
                  paddingBottom: "4rem",
                  borderBottom: "1px solid #E5DFCF",
                }}
                className="sobre-row"
              >
                <div>
                  <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#D4A73C", display: "block", marginBottom: "0.75rem" }}>
                    {s.num}
                  </span>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.4rem, 2.8vw, 2rem)", fontWeight: 400, color: "#1B2D4F", lineHeight: 1.25 }}>
                    {s.title}
                  </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {s.body.map((p, j) => (
                    <p key={j} style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.78, color: "#4A4A4A" }}>
                      {p}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}

            <div style={{ paddingTop: "4rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
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
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Solicitar proposta →
              </Link>
              <Link
                href="/manifesto"
                className="link-mustard"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "#1B2D4F", display: "inline-flex", alignItems: "center", letterSpacing: "0.04em" }}
              >
                Ler o manifesto →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .sobre-row { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </>
  );
}
