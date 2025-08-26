const output = items.map((item) => {
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
  const messageText =
    dadosWebhook.message?.text?.body ??
    dadosWebhook.text ??
    dadosWebhook.body ??
    dadosWebhook.message?.body ??
    "";

  // telefone
  const senderPhone = String(senderId).replace(/@c\.us|@g\.us/gi, "");

  return {
    json: {
      isGroup: ehGrupo,
      groupId,
      groupName,
      senderId,
      senderPhone,
      senderName,
      messageText,
    },
  };
});

return output;
