"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const principles = [
  {
    n: "01",
    title: "Design exclusivo em cada projeto",
    body: "Nenhum template, nenhum atalho. Cada site é criado do zero com conceito visual único, tipografia pensada e estrutura construída para o seu perfil específico.",
  },
  {
    n: "02",
    title: "Especialização em profissionais liberais",
    body: "Não atendemos qualquer negócio. Entendemos como transmitir autoridade para quem vive de expertise — credenciais, serviços, confiança.",
  },
  {
    n: "03",
    title: "Presença digital estratégica, não decoração",
    body: "Um site bonito que não converte é decoração cara. Cada decisão de design tem intenção: captar atenção, construir confiança, gerar contato.",
  },
  {
    n: "04",
    title: "Suporte direto com quem cria",
    body: "Sem gerente intermediário. Você fala via WhatsApp com quem está criando seu projeto — resposta em horas, atualizações proativas.",
  },
];

const stats = [
  { value: "10", label: "dias úteis do briefing ao site no ar" },
  { value: "5–7", label: "dias para entregar design finalizado" },
  { value: "2h", label: "tempo médio para receber a proposta" },
  { value: "100%", label: "online · atendimento em todo o Brasil" },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* ── HERO ────────────────────────────────────────────── */}
        <section
          style={{
            background: "#F5F1E8",
            minHeight: "85vh",
            display: "flex",
            alignItems: "center",
            padding: "5rem 2rem 4rem",
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "3fr 2fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Esquerda */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <motion.p
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#D4A73C",
                  marginBottom: "1.5rem",
                }}
              >
                APHOTEX — EDIÇÃO 01 · 2026
              </motion.p>

              <motion.h1
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                  color: "#1B2D4F",
                  marginBottom: "1.5rem",
                }}
              >
                Sua competência é real.
                <br />
                Sua imagem digital precisa dizer isso.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "#4A4A4A",
                  maxWidth: 520,
                  marginBottom: "2.5rem",
                }}
              >
                A Aphotex cria sites e design visual para profissionais que vivem da própria
                expertise — terapeutas, advogados, coaches, nutricionistas e consultores que
                cobram pelo que sabem, mas ainda não têm uma presença digital à altura do que entregam.
              </motion.p>

              <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
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
                  href="/servicos"
                  className="link-mustard"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    color: "#1B2D4F",
                    letterSpacing: "0.04em",
                  }}
                >
                  Ver pacotes e preços
                </Link>
              </motion.div>

              <motion.p
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#D4A73C",
                  marginTop: "2rem",
                  borderTop: "1px solid #E5DFCF",
                  paddingTop: "1.25rem",
                }}
              >
                VAGAS LIMITADAS · PREÇOS DE LANÇAMENTO
              </motion.p>
            </motion.div>

            {/* Direita — número editorial */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(8rem, 18vw, 18rem)",
                  fontWeight: 400,
                  color: "#E5DFCF",
                  lineHeight: 0.85,
                }}
              >
                01
              </span>
            </motion.div>
          </div>
        </section>

        {/* ── MANIFESTO CURTO ─────────────────────────────────── */}
        <section
          style={{
            background: "#1B2D4F",
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "7rem 2rem",
            textAlign: "center",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            style={{ maxWidth: 900 }}
          >
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.4rem, 6vw, 5rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "#F5F1E8",
              }}
            >
              Não fazemos sites.
              <br />
              Fazemos a diferença entre ser encontrado — e ser lembrado.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              style={{
                width: 60,
                height: 1,
                background: "#D4A73C",
                margin: "3rem auto 0",
              }}
            />
          </motion.div>
        </section>

        {/* ── FILOSOFIA ───────────────────────────────────────── */}
        <section style={{ background: "#F5F1E8", padding: "8rem 2rem" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#4A4A4A",
                marginBottom: "3rem",
              }}
            >
              II. FILOSOFIA
            </motion.p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "5rem",
                alignItems: "start",
              }}
              className="two-col-grid"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: "#1B2D4F",
                }}
              >
                Autoridade real merece presença real.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.75, color: "#4A4A4A" }}>
                  Você passou anos estudando, construindo reputação e refinando a sua prática. Cada consulta, cada processo, cada sessão acumulou conhecimento que não tem preço. Mas existe uma distância perigosa entre quem você é e o que aparece quando alguém pesquisa seu nome.
                </p>

                <blockquote
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                    lineHeight: 1.3,
                    color: "#1B2D4F",
                    borderLeft: "2px solid #D4A73C",
                    paddingLeft: "1.5rem",
                    margin: "1rem 0",
                  }}
                >
                  &ldquo;Cada cliente merece um site tão único quanto o serviço que oferece.&rdquo;
                </blockquote>

                <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.75, color: "#4A4A4A" }}>
                  A Aphotex existe para fechar essa distância. Não com templates prontos ou soluções genéricas, mas com design criado para o seu perfil específico — capaz de transmitir, em segundos, o mesmo nível de autoridade que você construiu em anos.
                </p>

                <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.75, color: "#4A4A4A" }}>
                  Porque no mundo digital, presença amadora tem custo. E esse custo é invisível — contabilizado em clientes que chegam, hesitam e vão embora silenciosamente.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── O QUE FAZEMOS ───────────────────────────────────── */}
        <section style={{ background: "#F5F1E8", padding: "0 2rem 8rem" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ borderTop: "1px solid #E5DFCF", paddingTop: "4rem", marginBottom: "3rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#4A4A4A",
                  marginBottom: "1rem",
                }}
              >
                III. O QUE FAZEMOS
              </p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                  color: "#1B2D4F",
                }}
              >
                Quatro princípios inegociáveis
              </motion.h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {principles.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr 2fr",
                    gap: "3rem",
                    alignItems: "start",
                    padding: "3rem 0",
                    borderBottom: "1px solid #E5DFCF",
                  }}
                  className="principle-row"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(3rem, 6vw, 5rem)",
                      fontWeight: 400,
                      color: "#E5DFCF",
                      lineHeight: 1,
                    }}
                  >
                    {p.n}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                      fontWeight: 400,
                      color: "#1B2D4F",
                      lineHeight: 1.25,
                      paddingTop: "0.5rem",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      color: "#4A4A4A",
                      paddingTop: "0.5rem",
                    }}
                  >
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EM NÚMEROS ──────────────────────────────────────── */}
        <section style={{ background: "#1B2D4F", padding: "7rem 2rem" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <p
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
              IV. EM NÚMEROS
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "2rem",
              }}
              className="stats-grid"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(3rem, 7vw, 7rem)",
                      fontWeight: 400,
                      color: "#F5F1E8",
                      lineHeight: 1,
                      marginBottom: "1rem",
                    }}
                  >
                    {s.value}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(245,241,232,0.5)",
                      lineHeight: 1.5,
                    }}
                  >
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONVITE PROCESSO ────────────────────────────────── */}
        <section style={{ background: "#F5F1E8", padding: "5rem 2rem", borderBottom: "1px solid #E5DFCF" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                fontWeight: 400,
                color: "#1B2D4F",
              }}
            >
              Curioso sobre como trabalhamos?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Link
                href="/processo"
                className="link-mustard"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "#D4A73C",
                  letterSpacing: "0.04em",
                  transition: "opacity 0.2s",
                }}
              >
                Conheça nosso processo →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── CTA FINAL ───────────────────────────────────────── */}
        <section
          style={{
            background: "#D4A73C",
            padding: "8rem 2rem",
            textAlign: "center",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            style={{ maxWidth: 800, margin: "0 auto" }}
          >
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "#1B2D4F",
                marginBottom: "1.25rem",
              }}
            >
              Sua imagem digital não pode esperar.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.05rem",
                lineHeight: 1.65,
                color: "#1B2D4F",
                marginBottom: "0.75rem",
              }}
            >
              Cada semana com presença amadora tem custo. Comece agora.
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#1B2D4F",
                opacity: 0.7,
                marginBottom: "2.5rem",
              }}
            >
              PREÇOS DE LANÇAMENTO — VAGAS LIMITADAS
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                href="/contato"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "#F5F1E8",
                  background: "#1B2D4F",
                  padding: "1.1rem 2.5rem",
                  display: "inline-block",
                  letterSpacing: "0.04em",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Solicitar proposta →
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none !important; }
          .two-col-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .principle-row { grid-template-columns: 60px 1fr !important; gap: 1.5rem !important; }
          .principle-row > p { grid-column: 1 / -1 !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
