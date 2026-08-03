"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const sections = [
  {
    num: "",
    title: "Sobre autoridade real",
    body: [
      "Autoridade real é a que se constrói em consultório, escritório ou sala de aula — em anos de estudo, de prática, de erros e de acertos que nenhuma certificação no mundo resume completamente. É o tipo de autoridade que os seus clientes já reconhecem. Que as suas indicações confirmam. Que o mercado, ainda que lentamente, começa a ver.",
      "Mas autoridade real, no mundo digital, precisa de um suporte à altura. Não de um site qualquer, feito com pressa e template genérico. Precisa de uma presença que, nos primeiros três segundos de contato, comunique: essa pessoa é séria. Essa pessoa entrega. Essa pessoa vale o que cobra.",
      "Esse é o gap que a Aphotex resolve. Não com truques de marketing. Com design, copy e estratégia construídos especificamente para quem vive de expertise.",
    ],
  },
  {
    num: "",
    title: "Sobre presença digital que fecha por você",
    body: [
      "O melhor site é aquele que trabalha enquanto você atende, enquanto você dorme, enquanto você está em férias. Que filtra clientes que não têm fit, que qualifica quem tem, que entrega a mensagem certa no momento certo — sem você precisar estar presente para isso.",
      "Isso não é magia. É estratégia de copy bem executada, estrutura de informação clara e design que transmite a mensagem antes mesmo que o texto seja lido. É um conjunto de decisões pequenas que, somadas, determinam se o visitante vai fechar ou vai embora.",
      "Nós cuidamos desse conjunto. Da hierarquia visual à escolha das palavras. Da fonte ao espaço em branco. Do botão de contato ao texto que aparece antes dele. Cada detalhe tem intenção.",
    ],
  },
  {
    num: "",
    title: "Sobre o custo invisível de parecer amador",
    body: [
      "Existe um custo que nenhuma planilha contabiliza: o custo da hesitação. O cliente que chegou ao seu site, ficou 30 segundos, e saiu sem entrar em contato. Você nunca soube que ele existiu. Nunca teve a chance de mostrar o seu trabalho. Perdeu sem saber que estava competindo.",
      "Esse custo acontece toda semana. Em toda profissão. Com todo profissional que tem um site desatualizado, um Instagram sem coerência visual ou simplesmente uma presença digital que não está à altura do que entrega nos atendimentos.",
      "A boa notícia: esse custo é eliminável. Uma presença digital bem construída transforma a primeira impressão — e a primeira impressão, no mundo digital, é quase sempre a decisiva.",
    ],
  },
  {
    num: "",
    title: "Sobre por que não fazemos qualquer site",
    body: [
      "Poderíamos atender mais clientes se aceitássemos qualquer projeto. Poderíamos crescer mais rápido se usássemos templates e diminuíssemos o tempo de produção. Mas não é isso que queremos construir.",
      "Cada projeto que entregamos é um projeto que vai carregar o nome da Aphotex. Vai aparecer como referência de qualidade ou como evidência de pressa. Prefirimos que seja referência.",
      "Por isso, trabalhamos com nichos específicos, volume controlado e processo rigoroso. Não por elitismo — por responsabilidade. Quando você contrata a Aphotex, está contratando um estúdio que vai tratar o seu projeto com a atenção que você trata os seus clientes.",
    ],
  },
  {
    num: "",
    title: "O que oferecemos, em resumo",
    body: [
      "Sites e design visual criados do zero para profissionais liberais. Processo transparente, prazos fixos, design exclusivo. Sem template, sem atalho, sem letra miúda.",
      "Estamos em nossa Edição 01 — momento de construção do portfolio inaugural. Os primeiros 10 clientes recebem preços promocionais em contrapartida ao uso dos projetos como case público. Uma troca justa para quem quer qualidade e entende que estúdios também precisam de um começo.",
    ],
  },
];

export default function ManifestoPage() {
  return (
    <>
      <Nav />

      <main style={{ background: "#F5F1E8" }}>
        {/* Header */}
        <section style={{ padding: "6rem 2rem 4rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
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
              Manifesto
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                borderTop: "1px solid #E5DFCF",
                paddingTop: "2.5rem",
                maxWidth: 700,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  lineHeight: 1.55,
                  color: "#1B2D4F",
                  marginBottom: "1.25rem",
                }}
              >
                Fundamos a Aphotex por uma convicção simples: profissional que cobra por expertise merece imagem digital à altura da autoridade que já tem no consultório, escritório, ou onde quer que atenda.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                  lineHeight: 1.55,
                  color: "#4A4A4A",
                }}
              >
                Não criamos sites bonitos. Criamos a diferença entre ser lembrado e ser esquecido.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Conteúdo */}
        <section style={{ padding: "0 2rem 8rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            {sections.map((s, i) => (
              <motion.article
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.05 }}
                style={{
                  paddingTop: "4rem",
                  paddingBottom: "4rem",
                  borderBottom: "1px solid #E5DFCF",
                }}
              >
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "baseline", marginBottom: "1.5rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: "1rem",
                      color: "#D4A73C",
                      flexShrink: 0,
                    }}
                  >
                    {s.num}
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
                      fontWeight: 400,
                      color: "#1B2D4F",
                      lineHeight: 1.2,
                    }}
                  >
                    {s.title}
                  </h2>
                </div>

                <div
                  style={{
                    paddingLeft: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                  className="manifesto-body"
                >
                  {s.body.map((p, j) => (
                    <p
                      key={j}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.05rem",
                        lineHeight: 1.8,
                        color: "#4A4A4A",
                      }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}

            {/* Assinatura */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                paddingTop: "4rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "1.4rem",
                  color: "#1B2D4F",
                }}
              >
                Gabriel Queiroz Brito
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#4A4A4A",
                }}
              >
                Fundador · Aphotex Design
              </p>

              <div style={{ marginTop: "2.5rem" }}>
                <Link
                  href="/servicos"
                  className="link-mustard"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "#1B2D4F",
                    letterSpacing: "0.04em",
                  }}
                >
                  Conhecer os serviços →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 600px) {
          .manifesto-body { padding-left: 0 !important; }
        }
      `}</style>
    </>
  );
}
