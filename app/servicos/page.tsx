"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const pacotes = [
  {
    n: "01",
    nome: "Site Essencial",
    original: "R$ 1.497",
    promo: "R$ 697",
    prazo: "10 dias úteis",
    desc: "Uma página única, criada com propósito. Ideal para profissional que precisa de presença digital direta e que converta visitantes em pacientes ou clientes.",
    itens: [
      "Landing page única com estrutura estratégica",
      "Copy profissional aplicada",
      "Design exclusivo — não é template",
      "Responsivo em todos os dispositivos",
      "Formulário de contato ou WhatsApp",
      "Domínio configurado",
      "30 dias de ajustes incluídos",
    ],
  },
  {
    n: "02",
    nome: "Site Profissional",
    original: "R$ 2.997",
    promo: "R$ 1.297",
    prazo: "15 dias úteis",
    desc: "Cinco páginas com identidade completa. Ideal para profissional consolidado que quer transmitir profundidade e receber clientes qualificados.",
    itens: [
      "Até 5 páginas com identidade coesa",
      "Copy profissional em todas as páginas",
      "Design exclusivo premium",
      "Responsivo em todos os dispositivos",
      "Formulário de contato + integração WhatsApp",
      "Área de serviços detalhada",
      "2 rodadas de revisão",
      "Domínio + hospedagem configurados",
      "45 dias de suporte pós-entrega",
    ],
  },
  {
    n: "03",
    nome: "Site Premium",
    original: "R$ 4.997",
    promo: "R$ 1.997",
    prazo: "20 dias úteis",
    desc: "Oito páginas com sistema editorial completo, incluindo blog. Ideal para profissional que quer construir autoridade contínua via conteúdo.",
    itens: [
      "Até 8 páginas com sistema editorial",
      "Blog integrado com editor de conteúdo",
      "Copy profissional em todas as páginas",
      "Design exclusivo nível estúdio",
      "Agendamento online incluso",
      "3 rodadas de revisão",
      "Domínio + hospedagem configurados",
      "60 dias de suporte pós-entrega",
      "Treinamento de uso incluso",
    ],
  },
  {
    n: "04",
    nome: "Reformulação",
    original: "R$ 1.797",
    promo: "R$ 697",
    prazo: "12 dias úteis",
    desc: "Renovação estratégica de site existente. Preservamos o que funciona, refinamos o que precisa, elevamos o resultado ao padrão que seu trabalho merece.",
    itens: [
      "Análise estratégica do site atual",
      "Novo design exclusivo (mantém o domínio)",
      "Reestruturação de até 5 páginas",
      "Copy revisada e otimizada",
      "Otimização técnica de velocidade",
      "2 rodadas de ajustes",
      "30 dias de suporte pós-entrega",
    ],
  },
];

const complementares = [
  {
    nome: "Design Essencial",
    original: "R$ 397",
    promo: "R$ 297",
    desc: "Card único de conteúdo para redes sociais, com tratamento visual e identidade coesa.",
    mensal: false,
  },
  {
    nome: "Design Combo",
    original: "R$ 797",
    promo: "R$ 597",
    desc: "3 cards com identidade consistente para diferentes formatos e plataformas.",
    mensal: false,
  },
  {
    nome: "Design Mensal",
    original: null,
    promo: "R$ 1.497/mês",
    desc: "8 cards mensais com identidade visual consistente e alinhamento de marca.",
    mensal: true,
  },
];

const manutencao = {
  original: "R$ 197/mês",
  promo: "R$ 97/mês",
  itens: [
    "Atualizações mensais de conteúdo (até 4)",
    "Backup mensal automático",
    "Monitoramento de segurança",
    "Suporte via WhatsApp (resposta em até 2h úteis)",
    "Verificação de performance (PageSpeed)",
  ],
};

const faq = [
  {
    q: "Por que preços promocionais?",
    a: "Estamos em fase de lançamento — Edição 01. Os primeiros 10 clientes recebem preço reduzido em contrapartida à autorização de uso do projeto como case público. Uma troca justa.",
  },
  {
    q: "Até quando vão durar os preços de lançamento?",
    a: "Até completarmos 10 clientes de portfolio ou até 31 de janeiro de 2027 — o que vier primeiro.",
  },
  {
    q: "Os preços vão subir depois?",
    a: "Sim. Após completar 10 clientes no portfolio, os valores retornam ao padrão da tabela original.",
  },
  {
    q: "Como funciona a autorização de uso como case?",
    a: "Você autoriza mencionar o projeto no portfolio da Aphotex, com sua foto ou logo, e permite depoimento em vídeo curto após a entrega. Simples e transparente.",
  },
  {
    q: "E se eu não quiser autorizar uso como case?",
    a: "Sem problema. Nesse caso o investimento fica no valor cheio da tabela original.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Pix, boleto ou cartão em até 6x sem juros. 50% de entrada na aprovação, 50% na entrega.",
  },
  {
    q: "O prazo é fixo?",
    a: "Sim. Prazo combinado é prazo cumprido — sem desculpa, sem surpresa. É um compromisso que levamos a sério.",
  },
];

export default function ServicosPage() {
  return (
    <>
      <Nav />

      <main style={{ background: "#F5F1E8" }}>
        {/* Header */}
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
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(4rem, 10vw, 8rem)",
                fontWeight: 400,
                lineHeight: 0.95,
                color: "#1B2D4F",
                marginBottom: "3rem",
              }}
            >
              Serviços
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                borderTop: "1px solid #E5DFCF",
                paddingTop: "2rem",
                maxWidth: 680,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
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
                Quatro caminhos para chegar ao mesmo destino: uma presença digital que trabalha por você.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "#4A4A4A",
                }}
              >
                A escolha depende do que sua marca precisa dizer — e onde precisa aparecer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Banner preços de lançamento */}
        <section style={{ background: "#D4A73C", padding: "4rem 2rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 400,
                color: "#1B2D4F",
                marginBottom: "1.25rem",
              }}
            >
              Preços de lançamento — Edição 01
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "#1B2D4F",
                marginBottom: "1.25rem",
              }}
            >
              A Aphotex está em fase de construção do portfolio inicial. Os primeiros 10 clientes recebem preços
              promocionais em contrapartida à autorização de uso do projeto como case público.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#1B2D4F",
                opacity: 0.7,
              }}
            >
              VAGAS LIMITADAS · APENAS OS 10 PRIMEIROS CLIENTES
            </p>
          </motion.div>
        </section>

        {/* Pacotes */}
        <section style={{ padding: "0 2rem", background: "#F5F1E8" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {pacotes.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.04 }}
                style={{
                  padding: "5rem 0",
                  borderBottom: "1px solid #E5DFCF",
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "4rem",
                  alignItems: "start",
                }}
                className="pacote-row"
              >
                {/* Coluna esquerda — preço */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#D4A73C",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {p.n}. {p.nome}
                  </p>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      color: "#4A4A4A",
                      textDecoration: "line-through",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {p.original}
                  </p>

                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      fontWeight: 400,
                      color: "#1B2D4F",
                      lineHeight: 1,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {p.promo}
                  </p>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#D4A73C",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Promocional de lançamento
                  </p>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.78rem",
                      color: "#4A4A4A",
                      marginBottom: "2rem",
                    }}
                  >
                    Prazo: {p.prazo}
                  </p>

                  <Link
                    href="/contato"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "#F5F1E8",
                      background: "#1B2D4F",
                      padding: "0.875rem 1.75rem",
                      display: "inline-block",
                      letterSpacing: "0.04em",
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Solicitar proposta →
                  </Link>
                </div>

                {/* Coluna direita — descrição + itens */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.05rem",
                      lineHeight: 1.7,
                      color: "#4A4A4A",
                      marginBottom: "2rem",
                    }}
                  >
                    {p.desc}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {p.itens.map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                          paddingBottom: "0.75rem",
                          borderBottom: "1px solid #E5DFCF",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.65rem",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            color: "#D4A73C",
                            flexShrink: 0,
                            paddingTop: "0.15rem",
                          }}
                        >
                          →
                        </span>
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.9rem",
                            lineHeight: 1.5,
                            color: "#4A4A4A",
                          }}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Complementares */}
        <section style={{ background: "#F5F1E8", padding: "5rem 2rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
              Design Avulso
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#1B2D4F",
                marginBottom: "3rem",
              }}
            >
              Serviços complementares de design
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
              }}
              className="comp-grid"
            >
              {complementares.map((c) => (
                <div
                  key={c.nome}
                  style={{
                    padding: "2rem 0",
                    borderTop: "1px solid #E5DFCF",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#4A4A4A",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {c.nome}
                  </p>

                  {c.original && (
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "#4A4A4A", textDecoration: "line-through", marginBottom: "0.2rem" }}>
                      {c.original}
                    </p>
                  )}

                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2.2rem",
                      fontWeight: 400,
                      color: "#1B2D4F",
                      lineHeight: 1,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {c.promo}
                  </p>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      color: "#4A4A4A",
                    }}
                  >
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manutenção */}
        <section style={{ background: "#1B2D4F", padding: "5rem 2rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#D4A73C",
                marginBottom: "1rem",
              }}
            >
              Manutenção Contínua
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4rem",
                alignItems: "start",
              }}
              className="two-col-grid"
            >
              <div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "rgba(245,241,232,0.5)", textDecoration: "line-through", marginBottom: "0.2rem" }}>
                  {manutencao.original}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 400,
                    color: "#F5F1E8",
                    lineHeight: 1,
                    marginBottom: "1.5rem",
                  }}
                >
                  {manutencao.promo}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#D4A73C", marginBottom: "2rem" }}>
                  Promocional de lançamento
                </p>
                <Link
                  href="/contato"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#1B2D4F",
                    background: "#F5F1E8",
                    padding: "0.875rem 1.75rem",
                    display: "inline-block",
                    letterSpacing: "0.04em",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Solicitar manutenção →
                </Link>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {manutencao.itens.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "1rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(245,241,232,0.08)" }}>
                    <span style={{ color: "#D4A73C", flexShrink: 0 }}>→</span>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.55, color: "rgba(245,241,232,0.7)" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "#F5F1E8", padding: "6rem 2rem 8rem" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
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
              Dúvidas frequentes
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "#1B2D4F",
                marginBottom: "3rem",
              }}
            >
              Perguntas que sempre chegam
            </h2>

            {faq.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{
                  padding: "2rem 0",
                  borderBottom: "1px solid #E5DFCF",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "#1B2D4F",
                    marginBottom: "0.75rem",
                  }}
                >
                  {f.q}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: "#4A4A4A",
                  }}
                >
                  {f.a}
                </p>
              </motion.div>
            ))}

            <div style={{ paddingTop: "3rem" }}>
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
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .pacote-row { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .comp-grid { grid-template-columns: 1fr !important; }
          .two-col-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </>
  );
}
