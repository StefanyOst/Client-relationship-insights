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

// nomes
const groupName =
  dadosWebhook.chatName ??
  dadosWebhook.chat?.name ??
  dadosWebhook.groupName ??
  "";
const senderName =
  dadosWebhook.pushName ??
  dadosWebhook.sender?.name ??
  dadosWebhook.notifyName ??
  "";

// menssagem
