"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--neutral-200)",
    }}>
      <div style={{
        maxWidth: "var(--container)", margin: "0 auto",
        padding: "0 24px", height: 74,
        display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: 24,
      }}>
        {/* Logo */}
        <Link href="/" style={{
          display: "inline-flex", alignItems: "baseline", gap: 3,
          font: `700 23px/1 var(--font-poppins)`,
          color: "var(--green-800)", letterSpacing: "-0.02em",
          fontFamily: "var(--font-poppins)",
        }}>
          Aphotex
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "var(--lime-500)",
            display: "inline-block", alignSelf: "flex-end", marginBottom: 4,
          }} />
        </Link>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                style={{
                  font: active
                    ? `600 15px/1 var(--font-poppins)`
                    : `500 15px/1 var(--font-poppins)`,
                  fontFamily: "var(--font-poppins)",
                  color: active ? "var(--green-800)" : "var(--neutral-600)",
                  padding: "6px 2px",
                  borderBottom: active ? "2px solid var(--lime-500)" : "2px solid transparent",
                  transition: `color var(--dur-fast) var(--ease-out)`,
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/contato"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "var(--green-800)", color: "var(--white)",
            font: `600 15px/1 var(--font-poppins)`,
            fontFamily: "var(--font-poppins)",
            padding: "12px 22px", borderRadius: "var(--radius-pill)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{
            width: 9, height: 9, borderRadius: "50%",
            background: "var(--lime-500)",
            boxShadow: "0 0 0 4px rgba(205,234,69,0.25)",
          }} />
          Solicitar proposta
        </Link>
      </div>
    </nav>
  );
}
