import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1B2D4F", color: "#F5F1E8" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "5rem 2rem 3rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "3rem",
          }}
          className="footer-grid"
        >
          {/* Col 1 — Marca */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "#F5F1E8",
                lineHeight: 1,
              }}
            >
              APHOTEX
            </span>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                color: "rgba(245,241,232,0.6)",
                lineHeight: 1.6,
                marginTop: "0.25rem",
              }}
            >
              Estúdio editorial de design premium
            </p>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#D4A73C",
                marginTop: "0.5rem",
              }}
            >
              DESIGN — ESTÚDIO EDITORIAL · EDIÇÃO 01 · 2026
            </span>
          </div>

          {/* Col 2 — Navegação */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(245,241,232,0.4)",
                marginBottom: "1.25rem",
              }}
            >
              Navegação
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { href: "/", label: "Início" },
                { href: "/manifesto", label: "Manifesto" },
                { href: "/processo", label: "Processo" },
                { href: "/servicos", label: "Serviços" },
                { href: "/sobre", label: "Sobre" },
                { href: "/contato", label: "Contato" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    color: "rgba(245,241,232,0.7)",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F1E8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,241,232,0.7)")}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contato */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(245,241,232,0.4)",
                marginBottom: "1.25rem",
              }}
            >
              Contato
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="https://wa.me/5511999999999"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  color: "rgba(245,241,232,0.7)",
                }}
              >
                WhatsApp
              </a>
              <a
                href="mailto:contato@aphotexdesign.com.br"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  color: "rgba(245,241,232,0.7)",
                }}
              >
                contato@aphotexdesign.com.br
              </a>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.78rem",
                  color: "rgba(245,241,232,0.4)",
                  marginTop: "0.5rem",
                }}
              >
                Resposta em até 2h úteis
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.78rem",
                  color: "rgba(245,241,232,0.4)",
                }}
              >
                100% online · Todo o Brasil
              </p>
            </div>
          </div>

          {/* Col 4 — Créditos */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(245,241,232,0.4)",
                marginBottom: "1.25rem",
              }}
            >
              Créditos
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["Design & desenvolvimento", "Gabriel R.", "São Paulo, Brasil", "2026"].map((line) => (
                <p
                  key={line}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    color: "rgba(245,241,232,0.6)",
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(245,241,232,0.08)",
            marginTop: "3rem",
            paddingTop: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              color: "rgba(245,241,232,0.3)",
              letterSpacing: "0.06em",
            }}
          >
            © 2026 Aphotex Design. Feito com atenção aos detalhes.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
