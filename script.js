const dadosWebhook = $json.body ?? $json;

// verificando se é grupo
const ehGrupo = Boolean(
  dadosWebhook.isGroup ?? dadosWebhook.chat?.isGroup ?? false
);

// Id's
const groupId =
  dadosWebhook.chatId ?? dadosWebhook.from ?? dadosWebhook.chat?.id ?? "";
const senderId =
  dadosWebhook.participant ??
  dadosWebhook.sender?.id ??
  dadosWebhook.from ??
  "";
