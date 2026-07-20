// ============================================================
// APHOTEX — Google Apps Script Webhook
// ============================================================
// COMO USAR:
// 1. Acesse: https://script.google.com/
// 2. Clique em "Novo projeto"
// 3. Cole TODO este código no editor
// 4. Clique em "Implantar" → "Nova implantação"
// 5. Tipo: "App da Web"
//    - Executar como: Eu (gabrielqueirozbrito582@gmail.com)
//    - Quem tem acesso: Qualquer pessoa
// 6. Clique em "Implantar" e copie a URL gerada
// 7. Cole a URL no arquivo .env.local em APPS_SCRIPT_WEBHOOK_URL=
// ============================================================

var SHEET_ID = "1EK_q9p7w9SgxM484gHhJXRJhJyEkRS7iIjZ5bOF-ciA";
var EMAIL_DESTINO = "gabrielqueirozbrito582@gmail.com";
var LINK_PLANILHA = "https://docs.google.com/spreadsheets/d/1EK_q9p7w9SgxM484gHhJXRJhJyEkRS7iIjZ5bOF-ciA";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // ---- Gravar na planilha ----
    var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    var sheet = spreadsheet.getActiveSheet();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Data", "Nome", "Profissão", "E-mail", "WhatsApp", "Pacote", "Mensagem"]);
      sheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#1a3d2a").setFontColor("#ffffff");
    }

    sheet.appendRow([
      new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
      data.nome    || "",
      data.profissao || "",
      data.email   || "",
      data.whatsapp || "",
      data.pacote  || "",
      data.mensagem || ""
    ]);

    // ---- Enviar e-mail ----
    var assunto = "🔔 Novo cliente Aphotex: " + (data.nome || "Sem nome");

    var corpo = "" +
      "<div style='font-family:sans-serif;max-width:600px;'>" +
      "<div style='background:#1a3d2a;padding:24px 32px;border-radius:10px 10px 0 0;'>" +
      "<h2 style='color:#cdea45;margin:0;font-size:22px;'>🔔 Novo cliente Aphotex!</h2>" +
      "</div>" +
      "<div style='background:#f5f7f5;padding:28px 32px;border-radius:0 0 10px 10px;border:1px solid #e0e5e1;'>" +
      "<table style='width:100%;border-collapse:collapse;'>" +
      "<tr><td style='padding:8px 0;color:#5a655f;width:120px;font-weight:600;'>Nome</td><td style='padding:8px 0;color:#1a2e22;'>" + (data.nome || "—") + "</td></tr>" +
      "<tr><td style='padding:8px 0;color:#5a655f;font-weight:600;'>Profissão</td><td style='padding:8px 0;color:#1a2e22;'>" + (data.profissao || "—") + "</td></tr>" +
      "<tr><td style='padding:8px 0;color:#5a655f;font-weight:600;'>E-mail</td><td style='padding:8px 0;color:#1a2e22;'>" + (data.email || "—") + "</td></tr>" +
      "<tr><td style='padding:8px 0;color:#5a655f;font-weight:600;'>WhatsApp</td><td style='padding:8px 0;color:#1a2e22;'>" + (data.whatsapp || "—") + "</td></tr>" +
      "<tr><td style='padding:8px 0;color:#5a655f;font-weight:600;'>Pacote</td><td style='padding:8px 0;color:#1a2e22;'><b>" + (data.pacote || "—") + "</b></td></tr>" +
      "<tr><td style='padding:8px 0;color:#5a655f;font-weight:600;vertical-align:top;'>Mensagem</td><td style='padding:8px 0;color:#1a2e22;'>" + (data.mensagem || "—") + "</td></tr>" +
      "</table>" +
      "<div style='margin-top:24px;'>" +
      "<a href='" + LINK_PLANILHA + "' style='background:#1a3d2a;color:#ffffff;padding:12px 22px;border-radius:100px;text-decoration:none;font-weight:600;font-size:14px;'>Ver planilha completa →</a>" +
      "</div>" +
      "</div>" +
      "</div>";

    GmailApp.sendEmail(EMAIL_DESTINO, assunto, "", { htmlBody: corpo });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
