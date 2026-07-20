import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--green-800)", color: "var(--white)" }}>
      <div style={{
        maxWidth: "var(--container)", margin: "0 auto",
        padding: "64px 24px 36px",
        display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48,
      }}>
        {/* Brand */}
        <div>
          <div style={{
            display: "inline-flex", alignItems: "baseline", gap: 3,
            font: `700 24px/1 var(--font-poppins)`,
            fontFamily: "var(--font-poppins)",
            color: "var(--white)", letterSpacing: "-0.02em",
          }}>
            Aphotex
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "var(--lime-500)",
              display: "inline-block", alignSelf: "flex-end", marginBottom: 4,
            }} />
          </div>
          <p style={{
            font: "var(--text-sm)", fontFamily: "var(--font-poppins)",
            color: "var(--green-200)", maxWidth: 300, marginTop: 16,
          }}>
            Presença digital estratégica para profissionais que vivem da própria expertise. Design exclusivo, prazo fixo, suporte real.
          </p>
        </div>

        {/* Nav */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{
            font: `600 13px/1 var(--font-poppins)`, fontFamily: "var(--font-poppins)",
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--lime-500)", marginBottom: 4,
          }}>
            Navegação
          </div>
          {[
            { href: "/", label: "Início" },
            { href: "/servicos", label: "Serviços e preços" },
            { href: "/sobre", label: "Sobre a Aphotex" },
            { href: "/contato", label: "Solicitar proposta" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{
              font: "var(--text-sm)", fontFamily: "var(--font-poppins)",
              color: "var(--green-200)",
            }}>
              {label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{
            font: `600 13px/1 var(--font-poppins)`, fontFamily: "var(--font-poppins)",
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--lime-500)", marginBottom: 4,
          }}>
            Contato
          </div>
          {["WhatsApp · resposta em horas", "100% online · todo o Brasil", "Proposta em até 2h úteis"].map(t => (
            <span key={t} style={{
              font: "var(--text-sm)", fontFamily: "var(--font-poppins)",
              color: "var(--green-200)",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{
          maxWidth: "var(--container)", margin: "0 auto",
          padding: "20px 24px",
          display: "flex", justifyContent: "space-between",
          gap: 16, flexWrap: "wrap",
          font: "var(--text-xs)", fontFamily: "var(--font-poppins)",
          color: "var(--green-300)",
        }}>
          <span>© 2026 Aphotex Design. Todos os direitos reservados.</span>
          <span>Design exclusivo, nunca template.</span>
        </div>
      </div>
    </footer>
  );
}
