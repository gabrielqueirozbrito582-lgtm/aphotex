"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const secoes = [
  {
    num: "",
    title: "De onde viemos",
    body: [
      "A Aphotex nasceu de uma observação recorrente: profissionais excepcionais com presença digital genérica. Terapeutas que transformam vidas atendendo com um site de 2012. Advogados que fecham contratos complexos com Instagram sem identidade. Consultores que cobram por hora o que agências cobram por projeto — mas aparecem online como freelancers iniciantes.",
      "A distância entre quem esses profissionais são e o que a internet mostra sobre eles é real, é mensurável e tem custo. Criamos a Aphotex para fechar essa distância — com design, copy e estratégia pensados especificamente para quem vive de expertise.",
    ],
  },
  {
    num: "",
    title: "Por quem trabalhamos",
    body: [
      "Trabalhamos para profissionais liberais que já têm autoridade no que fazem, mas ainda não têm uma presença digital à altura dessa autoridade. Psicólogos, advogados, coaches, nutricionistas, consultores, médicos, arquitetos, professores e qualquer profissional que venda o próprio conhecimento.",
      "Não trabalhamos para qualquer tipo de negócio. Essa especialização não é capricho — é o que garante que entendemos profundamente as nuances do seu mercado, as dúvidas dos seus clientes e a linguagem que constrói confiança no seu nicho específico.",
    ],
  },
  {
    num: "",
    title: "Como pensamos design",
    body: [
      "Design, para nós, não é estética. É comunicação. Cada decisão visual — a escolha da fonte, a proporção dos espaços, a hierarquia das informações — comunica algo antes que qualquer palavra seja lida. Um site mal projetado diz 'não confie em mim' antes de você chegar ao primeiro parágrafo.",
      "Trabalhamos com referências editoriais: revistas independentes, estúdios internacionais, publicações que transformaram tipografia e espaço em branco em linguagem própria. Não porque queremos copiar, mas porque esse padrão visual transmite algo específico: atenção, intenção, qualidade.",
      "Cada site que criamos tem conceito visual único. Uma paleta pensada. Uma tipografia escolhida. Um ritmo de layout que reflete a personalidade do profissional — não um template com cores trocadas.",
    ],
  },
  {
    num: "",
    title: "O que buscamos",
    body: [
      "Buscamos construir um portfólio que seja, em si mesmo, uma declaração de padrão. Cada projeto entregue deve ser capaz de ficar em uma galeria de referências ao lado de trabalhos de estúdios internacionais — não porque somos maiores que eles, mas porque aplicamos o mesmo rigor.",
      "A Aphotex nasceu com uma proposta clara: crescer por edições. Cada edição do estúdio marca um ciclo — com posicionamento próprio, tabela de valores e evolução no trabalho. Estamos hoje na Edição 01, ciclo que vai de agosto de 2026 a março de 2027. É aqui que começamos a construir o padrão que queremos deixar como assinatura.",
    ],
  },
];

export default function SobrePage() {
  useEffect(() => { document.title = "Sobre — Aphotex Design"; }, []);
  return (
    <>
      <Nav />

      <main style={{ background: "#F5F1E8" }}>
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
        <section style={{ padding: "0 2rem 5rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                display: "grid",
                gridTemplateColumns: "300px 1fr",
                gap: "3.5rem",
                alignItems: "start",
              }}
              className="fundador-grid"
            >
              {/* Foto */}
              <div>
                <div
                  style={{
                    aspectRatio: "3 / 4",
                    overflow: "hidden",
                    border: "1px solid #E5DFCF",
                  }}
                >
                  <img
                    src="/images/gabriel-fundador.jpg"
                    alt="Gabriel Queiroz Brito, fundador da Aphotex Design"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                      filter: "saturate(0.9) contrast(1.02)",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "0.82rem",
                    color: "#4A4A4A",
                    marginTop: "0.75rem",
                    opacity: 0.75,
                  }}
                >
                  Gabriel Queiroz Brito — Fundador
                </p>
              </div>

              {/* Texto */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingTop: "0.5rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#D4A73C",
                  }}
                >
                  FUNDADOR
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontWeight: 400,
                    color: "#1B2D4F",
                    lineHeight: 1.15,
                  }}
                >
                  Gabriel Queiroz Brito
                </h2>
                <div style={{ width: 40, height: 1, background: "#D4A73C" }} />
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                    lineHeight: 1.55,
                    color: "#1B2D4F",
                  }}
                >
                  Designer e estrategista digital especializado em profissionais liberais. Fundou a Aphotex com a convicção de que autoridade real merece presença digital à sua altura.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    color: "#4A4A4A",
                  }}
                >
                  São Paulo, Brasil · Edição 01 · 2026
                </p>
              </div>
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
          .fundador-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .fundador-grid > div:first-child { max-width: 260px; margin: 0 auto; }
        }
      `}</style>
    </>
  );
}
