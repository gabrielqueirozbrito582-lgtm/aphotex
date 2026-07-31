// deploy.js — envia /out para HostGator via FTP e corrige permissões
// Uso: node deploy.js

const fs   = require("fs");
const path = require("path");
const FTP  = require("promise-ftp");

// Lê .env.ftp preservando senhas com caracteres especiais
function loadEnv(filePath) {
  fs.readFileSync(path.resolve(filePath), "utf8").split("\n").forEach((line) => {
    const t = line.trim();
    if (!t || t.startsWith("#")) return;
    const eq = t.indexOf("=");
    if (eq === -1) return;
    const key = t.slice(0, eq).trim();
    let val = t.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'")))
      val = val.slice(1, -1);
    process.env[key] = val;
  });
}

loadEnv(".env.ftp");

const HOST   = process.env.FTP_HOST;
const USER   = process.env.FTP_USER;
const PASS   = process.env.FTP_PASS;
const REMOTE = process.env.FTP_REMOTE_DIR || "/public_html";
const LOCAL  = path.join(__dirname, "out");

// Coleta arquivos e diretórios recursivamente
function walkAll(dir) {
  const files = [], dirs = [];
  (function recurse(cur) {
    fs.readdirSync(cur, { withFileTypes: true }).forEach((e) => {
      const full = path.join(cur, e.name);
      const rel  = path.relative(dir, full).replace(/\\/g, "/");
      if (e.isDirectory()) { dirs.push(rel); recurse(full); }
      else files.push(rel);
    });
  })(dir);
  return { files, dirs };
}

async function deploy() {
  const ftp = new FTP();
  try {
    console.log(`\n📦 Conectando em ${HOST}...`);
    await ftp.connect({ host: HOST, user: USER, password: PASS, port: 21, pasvTimeout: 30000 });
    console.log("✓ Conectado\n");

    const { files, dirs } = walkAll(LOCAL);

    // Criar diretórios remotos
    for (const d of dirs) {
      const rdir = `${REMOTE}/${d}`;
      try { await ftp.mkdir(rdir, true); } catch (_) {}
      try { await ftp.site(`CHMOD 755 ${rdir}`); } catch (_) {}
    }

    // Enviar arquivos com permissão 644
    const total = files.length;
    for (let i = 0; i < total; i++) {
      const f = files[i];
      const pct = Math.round(((i + 1) / total) * 100);
      process.stdout.write(`\r  [${pct}%] ${f.slice(-65)}`);
      await ftp.put(path.join(LOCAL, f), `${REMOTE}/${f}`);
      try { await ftp.site(`CHMOD 644 ${REMOTE}/${f}`); } catch (_) {}
    }

    console.log(`\n\n✅ Deploy concluído! ${total} arquivos enviados.`);
    console.log("🌐 Acesse: https://aphotexdesign.com.br\n");
  } catch (err) {
    console.error("\n❌ Erro:", err.message || err);
    process.exit(1);
  } finally {
    try { await ftp.end(); } catch (_) {}
  }
}

deploy();
