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
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            padding: "8rem 2rem 6rem",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* Camada 1 — Micro-info identidade */}
              <motion.p
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#4A4A4A",
                  marginBottom: "2.5rem",
                }}
              >
                APHOTEX — ESTÚDIO DE DESIGN DIGITAL
              </motion.p>

              {/* Camada 2 — Título editorial */}
              <motion.h1
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                  color: "#1B2D4F",
                  marginBottom: "2.5rem",
                  maxWidth: 900,
                }}
              >
                Construímos a presença digital de profissionais liberais que vivem da expertise.
              </motion.h1>

              {/* Camada 3 — Subheadline funcional */}
              <motion.p
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  color: "#0F0F0F",
                  maxWidth: 640,
                  marginBottom: "3rem",
                }}
              >
                Sites, identidade visual e design gráfico para psicólogos, advogados, coaches,
                nutricionistas e outros especialistas que precisam ser levados a sério online.
              </motion.p>

              {/* Camada 4 — Posicionamento com traço mostarda */}
              <motion.div
                variants={fadeUp}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  marginBottom: "3.5rem",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 2,
                    background: "#D4A73C",
                    flexShrink: 0,
                    marginTop: "0.75rem",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  {[
                    "Design exclusivo, nunca template.",
                    "Estratégia antes de estética.",
                    "Prazo fixo, sem enrolação.",
                  ].map((frase) => (
                    <p
                      key={frase}
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontStyle: "italic",
                        fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                        color: "#4A4A4A",
                        lineHeight: 1.5,
                      }}
                    >
                      {frase}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Camada 5 — CTAs editoriais */}
              <motion.div
                variants={fadeUp}
                style={{ display: "flex", alignItems: "center", gap: "2.5rem", flexWrap: "wrap" }}
              >
                <Link
                  href="/servicos"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "#F5F1E8",
                    background: "#1B2D4F",
                    padding: "1rem 2.25rem",
                    display: "inline-block",
                    letterSpacing: "0.04em",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Ver o que criamos
                </Link>

                <Link
                  href="/manifesto"
                  className="link-mustard"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    color: "#1B2D4F",
                    letterSpacing: "0.04em",
                  }}
                >
                  Conheça a filosofia →
                </Link>
              </motion.div>
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
              FILOSOFIA
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

                <div
                  style={{
                    marginTop: "1rem",
                    border: "1px solid #E5DFCF",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/images/filosofia-editorial.jpg"
                    alt="Detalhe editorial de espaço de trabalho"
                    style={{
                      width: "100%",
                      height: 260,
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                      filter: "saturate(0.82) contrast(1.02)",
                    }}
                  />
                </div>
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
                O QUE FAZEMOS
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

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                borderTop: "1px solid #E5DFCF",
                borderBottom: "1px solid #E5DFCF",
                overflow: "hidden",
                marginBottom: "0",
              }}
            >
              <img
                src="/images/o-que-fazemos-divisor.jpg"
                alt="Textura editorial"
                style={{
                  width: "100%",
                  height: 320,
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  filter: "saturate(0.78) contrast(1.04)",
                }}
              />
            </motion.div>

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
              EM NÚMEROS
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "3.5rem",
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

        {/* ── TRABALHOS ───────────────────────────────────────── */}
        <section style={{ background: "#F5F1E8", padding: "7rem 2rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#4A4A4A",
                  marginBottom: "1rem",
                }}
              >
                TRABALHOS
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                  fontWeight: 400,
                  color: "#1B2D4F",
                  marginBottom: "1rem",
                }}
              >
                Alguns projetos entregues
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                  color: "#4A4A4A",
                  marginBottom: "4rem",
                  maxWidth: 600,
                }}
              >
                Cada site é único. Cada projeto é feito para transmitir a autoridade real de quem contratou.
              </p>
            </motion.div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "3rem",
              }}
              className="portfolio-grid"
            >
              {[
                {
                  img: "/portfolio/rafaella-leah-hero.jpg",
                  nicho: "PROJETO · SAÚDE & BEM-ESTAR",
                  nome: "Rafaella Leah",
                  desc: "Fisioterapia domiciliar e Pilates individual online. Site com identidade acolhedora, foco em conversão via WhatsApp e narrativa emocional.",
                },
                {
                  img: "/portfolio/regina-fernandes-hero.jpg",
                  nicho: "PROJETO · SAÚDE MENTAL",
                  nome: "Regina Fernandes",
                  desc: "Terapeuta certificada em TRG e Psicanalista. Site com posicionamento premium, storytelling profundo e agendamento via WhatsApp.",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.nome}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.1 }}
                >
                  <div
                    style={{
                      aspectRatio: "16 / 10",
                      overflow: "hidden",
                      border: "1px solid #E5DFCF",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <img
                      src={p.img}
                      alt={`Screenshot do site de ${p.nome}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block",
                        filter: "saturate(0.9)",
                      }}
                    />
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.62rem",
                      fontWeight: 500,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#4A4A4A",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {p.nicho}
                  </p>

                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      fontWeight: 400,
                      color: "#1B2D4F",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {p.nome}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "#4A4A4A",
                    }}
                  >
                    {p.desc}
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

            <motion.div variants={fadeUp}>
              <Link
                href="/servicos"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "#1B2D4F",
                  background: "transparent",
                  border: "2px solid #1B2D4F",
                  padding: "1.1rem 2.5rem",
                  display: "inline-block",
                  letterSpacing: "0.04em",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Ver os serviços →
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .portfolio-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
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
