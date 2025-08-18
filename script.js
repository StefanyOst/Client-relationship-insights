const raw = $json;

// Usando função para tentar pegar um valor em caminhos diferentes
function pick(path, obj, def = "") {
  return (
    path.split(".").reduce(o && o[k] !== undefined ? o[k] : undefined, obj) ??
    def
  );
}

// Nome do Grupo
const group_name =
  raw.group_name || raw.chatName || pick("messages.0.group_name", raw) || "";

// ID do remetente (nmr de telefone no WhatsApp)
const sender_id =
  raw.sender_id || raw.from || pick("messages.0.from", raw) || "";
